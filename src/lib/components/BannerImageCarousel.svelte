<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	let { delay = 5000, images }: { delay?: number; images: { src: string; alt: string }[] } =
		$props();
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
					<Card.Content class="container flex w-full items-center justify-center p-0">
						<!-- <div style={`background:image: url(${src})`}></div> -->
						<img {src} {alt} class="w-full h-auto" />
					</Card.Content>
				</Card.Root>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<!-- <Carousel.Previous />
  <Carousel.Next /> -->
</Carousel.Root>
