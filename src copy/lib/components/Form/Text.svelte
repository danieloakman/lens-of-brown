<script lang="ts" generics="T extends Z.AnyZodObject">
	import type { FormPathLeaves, ZodValidation } from 'sveltekit-superforms';
	import { formFieldProxy, type SuperForm } from 'sveltekit-superforms/client';
	import type * as Z from 'zod';
	import { capitalize, omit } from 'js-utils';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import ErrorText from '$components/ErrorText.svelte';

	export let name: FormPathLeaves<Z.infer<T>>;
	export const type: 'text' | 'tel' | 'email' | 'password' | 'url' = 'text'; // TODO: add more types that could be easily used.
	export const label = capitalize(name);
	export let form: SuperForm<ZodValidation<T>, unknown>;
	export let inputmode: HTMLInputAttributes['inputmode'] = undefined;

	const { value, errors, constraints } = formFieldProxy(form, name);
</script>

<label class="label flex flex-col gap-1">
	{label}
	<input
		{name}
		{...{ type }}
		class="input"
		aria-invalid={$errors ? 'true' : undefined}
		{inputmode}
		bind:value={$value}
		{...omit($constraints, 'pattern')}
		{...$$restProps}
	/>
</label>
<ErrorText error={$errors?.[0]} />
