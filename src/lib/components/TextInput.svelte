<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		label: string;
		name: string;
		placeholder?: string;
		class?: string;
		required?: boolean;
		value?: string;
		type?: HTMLInputAttributes['type'] | 'textarea';
	}
	let {
		value = $bindable(''),
		label: _label,
		name,
		placeholder,
		class: klass = '',
		required,
		type = 'text',
		inputmode,
		pattern,
		disabled,
		...rest
	}: Props = $props();
</script>

<label class={'label ' + klass}>
	<span class="text-2xl font-Forum uppercase">{_label}{required ? ' *' : ''}</span>
	{#if type === 'textarea'}
		<textarea
			{name}
			class="textarea text-xl"
			rows={3}
			bind:value
			{inputmode}
			{required}
			{disabled}
			{placeholder}
		></textarea>
	{:else}
		<input
			{name}
			class="input text-xl"
			{placeholder}
			{required}
			{inputmode}
			{pattern}
			bind:value
			{disabled}
			{...rest}
		/>
	{/if}
</label>
