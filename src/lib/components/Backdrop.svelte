<!--
 @component Backdrop
 @decription Displays a backdrop behind some children overlaying it.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	const {
		children,
		backdrop,
		class: containerClass = '',
		backdropClass = '',
		childrenClass = '',
		...rest
	}: HTMLAttributes<HTMLDivElement> & {
		innerClass?: string;
		backdropClass?: string;
		childrenClass?: string;
		backdrop?: Snippet;
	} = $props();
</script>

<div class={'container ' + containerClass} {...rest}>
	<div class={"inner z-1 " + backdropClass}>
		{#if backdrop}
			{@render backdrop()}
		{/if}
	</div>

	<!-- TODO: Put some of this class stuff as a component prop -->
	<div class={"inner z-2 " + childrenClass}>
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
