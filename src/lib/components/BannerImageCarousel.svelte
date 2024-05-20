<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	let { delay = 5000, images }: { delay?: number; images: { src: string; alt: string }[] } =
		$props();
	// export let images: { src: string; alt: string }[];
	const plugin = Autoplay({ delay, stopOnInteraction: true });
</script>

<Carousel.Root
	plugins={[plugin]}
	class="flex"
	opts={{ loop: true,  }}
	on:mousenter={plugin.stop}
	on:mouseleave={plugin.reset}
>
	<Carousel.Content class="flex">
		{#each images as { src, alt }}
			<Carousel.Item class="flex">
						<img {src} {alt} class="object-cover  w-full" />
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<!-- <Carousel.Previous />
  <Carousel.Next /> -->
</Carousel.Root>
