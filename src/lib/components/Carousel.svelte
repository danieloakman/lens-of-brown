<script lang="ts">
	import { Icon } from '$lib/icons';
	import type { Snippet } from 'svelte';

	const {
		buttons,
		nextDelayMs = 5000,
		children,
		class: klass = ''
	}: {
		buttons?: boolean;
		nextDelayMs?: number;
		children: Snippet;
		class?: string;
	} = $props();

	let elemCarousel: HTMLDivElement | undefined;

	function carouselLeft(): void {
		if (!elemCarousel) return;
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		if (!elemCarousel) return;
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	// function carouselThumbnail(index: number) {
	// 	elemCarousel?.scroll(elemCarousel.clientWidth * index, 0);
	// }

	setInterval(() => {
		carouselRight();
	}, nextDelayMs);
</script>

<div class={'grid grid-cols-[auto_1fr_auto] items-center ' + klass}>
	{#if buttons}
		<button type="button" class="btn-icon variant-filled" onclick={carouselLeft}>
			<Icon.ArrowLeft />
		</button>
	{/if}

	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
		{#if children}
			{@render children()}
		{/if}
		<!-- {#each imgs as { src, alt }}
			<img class={"snap-center " + imgClass} {src} {alt} />
		{/each} -->
		<!-- Working example, but doesn't stretch the image -->
		<!-- {#each unsplashIds as unsplashId}
			<img
				class="snap-center w-[1024px] rounded-container-token"
				src="https://source.unsplash.com/{unsplashId}/1024x768"
				alt={unsplashId}
				loading="lazy"
			/>
		{/each} -->
	</div>

	{#if buttons}
		<button type="button" class="btn-icon variant-filled-primary" onclick={carouselRight}>
			<Icon.ArrowRight />
		</button>
	{/if}
</div>
