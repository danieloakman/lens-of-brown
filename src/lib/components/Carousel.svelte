<script lang="ts">
	const {
		buttons,
		nextDelayMs = 5000,
		imgs
	}: { buttons?: boolean; nextDelayMs?: number; imgs: { src: string; alt: string }[] } = $props();

	let elemCarousel: HTMLDivElement | undefined;
	const unsplashIds = [
		'vjUokUWbFOs',
		'1aJuPtQJX_I',
		'Jp6O3FFRdEI',
		'I3C_eojFVQY',
		's0fXOuyTH1M',
		'z_X0PxmBuIQ'
	];

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

	function carouselThumbnail(index: number) {
		elemCarousel?.scroll(elemCarousel.clientWidth * index, 0);
	}

	setInterval(() => {
		carouselRight();
	}, nextDelayMs);
</script>

<div class="grid grid-cols-[auto_1fr_auto] items-center">
	<!-- Button: Left -->
	<!-- <button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button> -->
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
		{#each imgs as { src, alt }}
			<img class="snap-center object-scale-down" {src} {alt} />
		{/each}
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
	<!-- Button: Right -->
	<!-- <button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
		<i class="fa-solid fa-arrow-right" />
	</button> -->
</div>
