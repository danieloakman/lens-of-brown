<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let open = false;
	export let containerClass = '';
	const dispatch = createEventDispatcher<{ focusin: null }>();
</script>

<div
	class={containerClass}
	on:focusin={() => {
		dispatch('focusin');
	}}
>
	<slot name="summary"></slot>
	{#if open}
		<slot name="when-open"></slot>
	{/if}
</div>
