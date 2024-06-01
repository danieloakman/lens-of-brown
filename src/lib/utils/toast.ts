import { type ToastSettings, getToastStore } from '@skeletonlabs/skeleton';
import { type Fn, type Nullish, isNullish, once } from 'js-utils';

export type CallOnCallbackResult = Nullish<
	string | [message: string, options: Omit<ToastSettings, 'background' | 'message'>]
>;
const toastStore = once(() => getToastStore());

/** Wrapper for skeleton's `toastStore`. Adds useful default template toasts, like `error`, `success`, etc. */
export const toast = {
	/** Initialises Skeletonlab's toast store. Meant to be called from the root +layout.svelte */
	init: () => {
		toastStore().freeze(0);
		toastStore().unfreeze(0);
		console.debug('Toast store initialised.');
	},
	close: (id: string) => toastStore().close(id),
	freeze: (index: number) => toastStore().freeze(index),
	unfreeze: (index: number) => toastStore().unfreeze(index),
	/** The default trigger for a toast. No default background style applied. */
	trigger: (message: string, options: Omit<ToastSettings, 'message'>) =>
		toastStore().trigger({ message, ...options }),
	/** An error toast with 'bg-error-500' set to the background. */
	error: (message: string, options: Omit<ToastSettings, 'background' | 'message'> = {}) => {
		console.error(message);
		return toastStore().trigger({
			message,
			background: 'bg-error-500',
			...options
		});
	},
	/** A success toast with 'bg-success-500' set to the background. */
	success: (message: string, options: Omit<ToastSettings, 'background' | 'message'> = {}) => {
		console.log(message);
		return toastStore().trigger({
			message,
			background: 'bg-success-500',
			...options
		});
	},
	/** A warning toast with 'bg-warning-500' set to the background. */
	warning: (message: string, options: Omit<ToastSettings, 'background' | 'message'> = {}) => {
		console.warn(message);
		return toastStore().trigger({
			message,
			background: 'bg-warning-500',
			...options
		});
	},
	/** Call `fn` within a try catch block, then optionally call a success or error toast depending on results from `fn`. */
	triggerOn: async <T extends Fn>(
		fn: T,
		callbacks: {
			/** Called on successful return result of `fn`. The result of this is passed to the toast call.  */
			success?: (fnResult: Awaited<ReturnType<T>>) => CallOnCallbackResult;
			/** Called when `fn` throws an error. The result of this is passed to the toast call.  */
			error?: (e: Error) => CallOnCallbackResult;
			/** Called within the `finally` block. */
			finally?: () => CallOnCallbackResult;
		}
	) => {
		try {
			const result = await fn();
			if (callbacks.success) {
				const success = callbacks.success(result);
				if (typeof success === 'string') toast.success(success);
				else if (!isNullish(success)) toast.success(...success);
			}
		} catch (e) {
			if (!(e instanceof Error))
				throw new Error(`Expected an error to be thrown, got ${e} instead.`);
			if (callbacks.error) {
				const error = callbacks.error(e);
				if (typeof error === 'string') toast.error(error);
				else if (!isNullish(error)) toast.error(...error);
			}
		} finally {
			callbacks.finally?.();
		}
	},
	/** Alias or shorthand for `toast.triggerOn(fn, { error: ... })` */
	triggerOnError: async <T extends Fn>(fn: T) =>
		toast.triggerOn(fn, { error: (e) => errorMessage(e) })
};

function errorMessage(e: unknown): string {
	// This was origianlly from `together`, but didn't copy it over.
	return e instanceof Error ? e.message : String(e);
}
