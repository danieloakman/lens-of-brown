<script lang="ts" generics="T extends Z.AnyZodObject">
	import ErrorText from '$components/ErrorText.svelte';

	import type { FormPathLeaves, ZodValidation } from 'sveltekit-superforms';
	import { formFieldProxy, type SuperForm } from 'sveltekit-superforms/client';
	import type * as Z from 'zod';
	import { capitalize, omit } from 'js-utils';
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	export let name: FormPathLeaves<Z.infer<T>>;
	export const label = capitalize(name);
	export let form: SuperForm<ZodValidation<T>, unknown>;
	export let inputmode: HTMLTextareaAttributes['inputmode'] = undefined;

	const { value, errors, constraints } = formFieldProxy(form, name);
</script>

<label class="label flex flex-col gap-1">
	{label}
	<textarea
		{name}
		class="textarea"
		aria-invalid={$errors ? 'true' : undefined}
		{inputmode}
		bind:value={$value}
		{...omit($constraints, 'pattern')}
		{...$$restProps}
	></textarea>
</label>
<ErrorText error={$errors?.[0]} />
