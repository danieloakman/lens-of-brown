<script lang="ts" generics="T extends Z.AnyZodObject">
	import ErrorText from '$components/ErrorText.svelte';

	import type { Writable } from 'svelte/store';
	import type { FormPathLeaves, ZodValidation } from 'sveltekit-superforms';
	import { formFieldProxy, type SuperForm } from 'sveltekit-superforms/client';
	import type * as Z from 'zod';
	import { capitalize, omit } from 'js-utils';

	export let name: FormPathLeaves<Z.infer<T>>;
	export const label = capitalize(name);
	export let form: SuperForm<ZodValidation<T>, unknown>;

	const { value, errors, constraints } = formFieldProxy(form, name);

	$: boolValue = value as Writable<boolean>;
</script>

<label class="label flex flex-col gap-1">
	{label}
	<input
		{name}
		class="checkbox"
		type="checkbox"
		bind:checked={$boolValue}
		{...omit($constraints, 'pattern')}
		{...$$restProps}
	/>
</label>
<ErrorText error={$errors?.[0]} />
