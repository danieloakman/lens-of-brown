<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	export let delay = 3000;
	export let images: { src: string; alt: string }[];
	const plugin = Autoplay({ delay, stopOnInteraction: true });
</script>

<Carousel.Root
	plugins={[plugin]}
	class="w-full"
	opts={{ loop: true }}
	on:mousenter={plugin.stop}
	on:mouseleave={plugin.reset}
>
	<Carousel.Content>
		{#each images as { src, alt }}
			<Carousel.Item>
				<Card.Root>
					<Card.Content class="flex items-center justify-center p-0">
						<img {src} {alt} class="aspect-auto h-full w-full object-cover" />
					</Card.Content>
				</Card.Root>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<!-- <Carousel.Previous />
  <Carousel.Next /> -->
</Carousel.Root>

<style>
	img {
		width: 100%;
		/* max-height: 100%;
    max-width: 100%; */
	}
</style>
