<!--
@component CarouselOld
@description Utilises tailwindcss snap utilities to create a horizontal carousel.
-->
<script lang="ts">
	import { Icon } from '$lib/icons';
	import type { Snippet } from 'svelte';

	const {
		buttons,
		children,
		class: klass = '',
		innerClass = ''
	}: {
		buttons?: boolean;
		children: Snippet;
		class?: string;
		innerClass?: string;
	} = $props();

	let elemCarousel: HTMLDivElement | undefined;

	export function left(): void {
		if (!elemCarousel) return;
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	export function right(): void {
		if (!elemCarousel) return;
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}
</script>

<div class={'grid grid-cols-[auto_1fr_auto] items-center ' + klass}>
	{#if buttons}
		<button type="button" class="btn-icon variant-filled-primary mr-2" onclick={left}>
			<Icon.ArrowLeft />
		</button>
	{/if}

	<div
		bind:this={elemCarousel}
		class={'snap-x snap-mandatory scroll-smooth flex overflow-x-auto ' + innerClass}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>

	{#if buttons}
		<button type="button" class="btn-icon variant-filled-primary ml-2" onclick={right}>
			<Icon.ArrowRight />
		</button>
	{/if}
</div>
