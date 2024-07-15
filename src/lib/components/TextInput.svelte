<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = {
		label: string;
		name: string;
		placeholder?: string;
		class?: string;
		required?: boolean;
		value?: string;
		type?: HTMLInputAttributes['type'] | 'textarea';
		inputmode?: HTMLInputAttributes['inputmode'];
	};
	let {
		value = $bindable(''),
		label: _label,
		name,
		placeholder,
		class: klass = '',
		required,
		type = 'text',
		inputmode
	}: Props = $props();
</script>

<label class={'label ' + klass}>
	<span class="text-2xl font-Forum uppercase">{_label}{required ? ' *' : ''}</span>
	{#if type === 'textarea'}
		<textarea {name} class="textarea text-xl" rows={4} bind:value {inputmode} {required}></textarea>
	{:else}
		<input {name} class="input text-xl" {placeholder} {required} {inputmode} bind:value />
	{/if}
</label>
