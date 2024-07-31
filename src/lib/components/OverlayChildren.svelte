<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	const { class: klass = '', children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={'container ' + klass} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</div>

<style lang="postcss">
	.container {
		display: grid;
		place-items: center;
		grid-template-areas: 'inner-div';
	}

	.container > :global(*) {
		grid-area: inner-div;
	}
</style>
