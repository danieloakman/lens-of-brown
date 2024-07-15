<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	type TextInput = {
		type: HTMLInputAttributes['type'];
		inputmode?: HTMLInputAttributes['inputmode'];
	};

	type SelectInput = {
		type: 'select';
		options: [value: string, label: string][];
		size?: number;
		multiple?: boolean;
	};

	type BaseProps = {
		label: string;
		name: string;
		placeholder?: string;
		class?: string;
		required?: boolean;
	};
	const {
		label: _label,
		name,
		placeholder,
		class: klass = '',
		required,
		// type = 'text',
		...rest
	}: BaseProps & (TextInput | SelectInput) = $props();
</script>

<label class={'label ' + klass}>
	<span class="text-2xl font-Forum uppercase">{_label}{required ? ' *' : ''}</span>
	{#if rest.type === 'select'}
		<select {name} class="select" {...rest}>
			{#each rest.options as [value, label]}
				<option {value}>{label}</option>
			{/each}
		</select>
	{:else}
		<input {name} class="input text-xl" {placeholder} {required} {...rest} />
	{/if}
</label>
