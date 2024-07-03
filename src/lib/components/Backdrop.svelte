<!--
 @component Backdrop
 @decription Displays a backdrop behind some children overlaying it.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	const {
		children,
		class: classContainer = '',
		backdrop,
		...rest
	}: HTMLAttributes<HTMLDivElement> & {
		innerClass?: string;
		backdrop?: Snippet;
	} = $props();
</script>

<div class={'container ' + classContainer} {...rest}>
	<div class="w-full h-full inner z-1">
		{#if backdrop}
			{@render backdrop()}
		{/if}
	</div>

	<!-- TODO: Put some of this class stuff as a component prop -->
	<div class="w-full h-full inner z-2">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>

<style lang="postcss">
	.container {
		display: grid;
		place-items: center;
		grid-template-areas: 'inner-div';
	}

	.inner {
		grid-area: inner-div;
	}
</style>
