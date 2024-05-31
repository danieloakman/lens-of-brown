<script lang="ts">
	import { AddIcon } from '$icons';
	import type { ComponentType } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let ButtonIcon: ComponentType = AddIcon;
	export let value = '';
	export let disabled = false;
	export let placeholder = '';
	export let containerClass = '';
	// export let validator: (value: string) => boolean | Error = () => true;

	// $: validation = validator(value);
	// $: isValid = validation === true;
	// $: error = validation instanceof Error ? validation : null;

	const dispatch = createEventDispatcher<{
		submit: { type: 'button' | 'enter_key'; value: string };
	}>();
</script>

<div class={'input-group input-group-divider grid-cols-[1fr_auto] ' + containerClass}>
	<input
		type="text"
		{placeholder}
		bind:value
		on:keyup={(e) => {
			if (e.key === 'Enter' /* && isValid */ && !disabled)
				dispatch('submit', { type: 'enter_key', value });
		}}
	/>
	<button
		type="button"
		class="btn rounded-none variant-filled-primary"
		{disabled}
		on:click={(e) => {
			/* if (isValid) */ dispatch('submit', { type: 'button', value });
		}}
	>
		<svelte:component this={ButtonIcon} />
	</button>
</div>

<!-- <ErrorText {error} /> -->
