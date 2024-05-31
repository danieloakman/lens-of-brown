import { iter } from 'iteragain';
import { combineLatest, debounceTime, filter, switchMap } from 'rxjs';
import type { Writable } from 'svelte/store';
import type { SuperValidated, UnwrapEffects } from 'sveltekit-superforms';
import {
	type FormOptions,
	type SuperForm,
	superForm,
	superValidateSync
} from 'sveltekit-superforms/client';
import type * as Z from 'zod';

import type { Nullish } from '$types';
import {
	distinctUntilHashChanged,
	filterMap,
	isObjectLike,
	noop,
	takeUntilDestroyed,
	timedState,
	toObservable
} from '$utils';

export interface FormCreateOptions<T extends Z.AnyZodObject> {
	delayMs?: number;
	timeoutMs?: number;
	/** Changes can be made to the form before fully submitting, as well cancelling it altogether. */
	onPreSubmit?: (arg: { form: SuperValidated<T>; cancel: () => void }) => unknown;
	/** A form error. */
	onError?: (arg: {
		result: { type: 'error'; status?: number; error: App.Error };
		message: Writable<string | undefined>;
	}) => unknown;
	/** Form is valid and can be processed/finalised. */
	onSubmit?: (form: Readonly<SuperValidated<T>>) => unknown;
	/** Form is valid and `onChangeDebounceMs` time has elapsed since the last form change. */
	onChange?: (value: {
		/** Full form data. */
		data: Z.output<T>;
		/** Only the tainted form data. */
		tainted: Partial<Z.output<T>>;
	}) => unknown;
	// onChange?: (changes: {
	// 	/** Full form data output. */
	// 	data: Z.output<T>
	// 	changed: Partial<Z.output<T>>;
	// }) => unknown;
	onChangeDebounceMs?: number;
	initialValue?: Nullish<Z.output<T>>;
	clearOnSubmit?: FormOptions<T, any>['clearOnSubmit'];
	/** The message to show when the user attempts to leave the page with a dirty form. Set to null to disable the message. */
	taintedMessage?: string | null;
	autoFocusOnError?: FormOptions<T, any>['autoFocusOnError'];
}

export function create<T extends Z.AnyZodObject>(
	schema: T,
	{
		delayMs = 500,
		timeoutMs = 5000,
		onError = noop,
		onPreSubmit = noop,
		onSubmit = noop,
		onChange = undefined,
		initialValue,
		taintedMessage = null,
		onChangeDebounceMs = 500,
		...rest
	}: FormCreateOptions<T>
): SuperForm<UnwrapEffects<UnwrapEffects<T>>> {
	const { start, stop, submitting, delayed, timeout } = timedState(delayMs, timeoutMs);
	const form = superForm(
		superValidateSync(
			...((initialValue ? [initialValue, schema] : [schema]) as Parameters<
				typeof superValidateSync
			>)
		),
		{
			...rest,
			taintedMessage,
			SPA: true,
			validators: schema as any,
			multipleSubmits: 'prevent',
			// There are other available events/callbacks, but since we're not using SSR we don't need them and can just use these:
			onError,
			onUpdate: onPreSubmit,
			onUpdated: async ({ form }) => {
				// Form has been updated and finalised, cannot change it from here.
				if (!form.valid) return;
				// Only allow valid form values from here.
				try {
					start();
					await onSubmit(form);
				} finally {
					stop();
				}
			}
		}
	);

	if (onChange)
		combineLatest([
			toObservable(form.form),
			toObservable(form.tainted).pipe(
				filter((v): v is Record<string, any> => Object.keys(v ?? {}).length > 0)
			)
		])
			.pipe(
				takeUntilDestroyed(),
				debounceTime(onChangeDebounceMs),
				switchMap(([, tainted]) => form.validate().then((form) => ({ form, tainted }))),
				filterMap(({ form: { data, errors, valid }, tainted }) => {
					if (valid) return { data, tainted };
					else form.errors.set(errors);
				}),
				distinctUntilHashChanged(),
				filterMap(({ data, tainted }) =>
					isObjectLike(tainted) && Object.keys(tainted).length
						? {
								data,
								tainted: iter(Object.keys(tainted)).reduce(
									(acc, k) => {
										(acc as any)[k] = (data as any)[k];
										return acc;
									},
									{} as Partial<Z.output<T>>
								)
							}
						: null
				)
			)
			.subscribe(async (v) => {
				try {
					start();
					await onChange(v);
				} finally {
					stop();
				}
			});

	// Overwrite these because for some reason using the ones from `form` don't work:
	form.submitting = submitting;
	form.delayed = delayed;
	form.timeout = timeout;

	return form as any;
}
