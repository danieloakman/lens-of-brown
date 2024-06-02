<script lang="ts">
	// Create svelte-5 prop

	const {
		buttons,
		nextDelayMs = 5000,
		imgs
	}: { buttons?: boolean; nextDelayMs?: number; imgs: { src: string; alt: string }[] } = $props();

	let elemCarousel: HTMLDivElement;
	const unsplashIds = [
		'vjUokUWbFOs',
		'1aJuPtQJX_I',
		'Jp6O3FFRdEI',
		'I3C_eojFVQY',
		's0fXOuyTH1M',
		'z_X0PxmBuIQ'
	];

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	function carouselThumbnail(index: number) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}

	setInterval(() => {
		carouselRight();
	}, nextDelayMs);
</script>

<div class="card grid grid-cols-[auto_1fr_auto] items-center">
	<!-- Button: Left -->
	{#if buttons}
		<button type="button" class="btn-icon variant-filled" onclick={carouselLeft}>
			<i class="fa-solid fa-arrow-left"></i>
		</button>
	{/if}

	<!-- Full Images -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
		{#each unsplashIds as unsplashId}
			<img
				class="snap-center w-full object-cover"
				src="https://source.unsplash.com/{unsplashId}/1024x768"
				alt={unsplashId}
				loading="lazy"
			/>
		{/each}
	</div>

	<!-- Button: Right -->
	{#if buttons}
		<button type="button" class="btn-icon variant-filled" onclick={carouselRight}>
			<i class="fa-solid fa-arrow-right"></i>
		</button>
	{/if}
</div>
