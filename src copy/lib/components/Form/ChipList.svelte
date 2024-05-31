<script lang="ts" generics="T extends Z.AnyZodObject, K extends keyof Z.infer<T>">
	import { CheckSmallIcon } from '$icons';
	import { InputChip } from '@skeletonlabs/skeleton';
	import { identity } from 'rxjs';
	import type { ZodValidation } from 'sveltekit-superforms';
	import { formFieldProxy, type SuperForm } from 'sveltekit-superforms/client';
	import type * as Z from 'zod';
	import { capitalize, constant } from 'js-utils';
	import ErrorText from '$components/ErrorText.svelte';

	export let name: K;
	export const label = capitalize(name as string);
	export let form: SuperForm<ZodValidation<T>, unknown>;
	export let validator: (v: string) => boolean = constant(true);
	export let from: (v: Z.infer<T>[K]) => string[] = identity;
	export let to: (v: string[]) => Z.infer<T>[K] = identity as any;

	const { value, errors } = formFieldProxy(form, name as any);
	let chips: string[] = [];
	value.subscribe((v) => {
		chips = from(v as any);
	});
	let input = '';
	$: value.set(to(chips as any));
</script>

<div class="flex flex-col gap-2">
	<span>{label}</span>

	<div class="flex flex-row">
		<InputChip
			bind:value={chips}
			bind:input
			name={name.toString()}
			allowUpperCase
			validation={validator}
		/>

		<button
			class="absolute right-9 btn-icon variant-filled-primary w-9 h-9"
			style:margin-top="3px"
			style:margin-right="-1px"
			type="button"
			disabled={!validator(input)}
			on:click={() => {
				chips = [...chips, input];
				input = '';
			}}
		>
			<CheckSmallIcon />
		</button>
	</div>
</div>
<ErrorText error={$errors} />
