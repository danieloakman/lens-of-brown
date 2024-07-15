<!--
@component SelectInput
@description https://www.skeleton.dev/elements/forms#select Uses this.
-->
<script lang="ts">
	type Props = {
		label: string;
		name: string;
		placeholder?: string;
		class?: string;
		required?: boolean;
		value?: string;

		options: [value: string, label: string][];
		size?: number;
		// multiple?: boolean;
	};
	let {
		value = $bindable('0'),
		label: _label,
		name,
		placeholder,
		class: klass = '',
		required,
		options,
		// multiple,
		size
	}: Props = $props();
</script>

<label class={'label ' + klass}>
	<span class="text-2xl font-Forum uppercase">{_label}{required ? ' *' : ''}</span>
	<select {name} class="select text-xl" {placeholder} {required} {size} bind:value>
		{#each options as [value, label]}
			<option {value} class="text-xl">{label}</option>
		{/each}
	</select>
</label>
