<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { browser } from '$app/environment';
	// import { windowSize } from '$stores/index.svelte';

	const windowSize = $state({ width: 0, height: 0 });
	if (browser) {
		window.addEventListener('resize', () => {
      if (window.innerWidth !== windowSize.width)
			  windowSize.width = window.innerWidth;
			if (window.innerHeight !== windowSize.height)
        windowSize.height = window.innerHeight;
		});
	}

	let { delay = 5000, images }: { delay: number; images: { src: string; alt: string }[] } = $props();
	// export let images: { src: string; alt: string }[];
	const plugin = Autoplay({ delay, stopOnInteraction: true });
</script>

<Carousel.Root
	plugins={[plugin]}
	class="w-full"
	opts={{ loop: true }}
	on:mousenter={plugin.stop}
	on:mouseleave={plugin.reset}
>
	<Carousel.Content class="w-full">
		{#each images as { src, alt }}
			<Carousel.Item class="w-full">
				<Card.Root class="w-full">
					<Card.Content class="flex w-full items-center justify-center p-0">
						<img {src} {alt} class="h-full w-full" width={windowSize.width} />
					</Card.Content>
				</Card.Root>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<!-- <Carousel.Previous />
  <Carousel.Next /> -->
</Carousel.Root>
