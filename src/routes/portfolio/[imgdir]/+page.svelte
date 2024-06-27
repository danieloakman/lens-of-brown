<script lang="ts">
	import { page } from '$app/stores';

	const imgdir = $page.params.imgdir;
	let imgs: Record<string, { default: string }> = {};
	if (imgdir === 'portraits') {
		imgs = import.meta.glob('$imgs/portraits/*.{jpg,jpeg,png,webp}', {
			eager: true,
			query: {
				aspect: '1:1',
				w: 700,
				webp: true,
				url: true,
				imagetools: true
			}
		});
	}
</script>

<div class="flex flex-col">
	{#each Object.values(imgs) as { default: img }}
		<span>{JSON.stringify(img)}</span>
	{/each}
</div>

<!-- <script lang="ts">
	import Carousel from '$components/Carousel.svelte';
	import Img1 from '$imgs/bianca_cherie1.jpg?aspect=1:1&w=700&webp&imagetools';
	import Img2 from '$imgs/bianca_cherie2.jpg?aspect=1:1&w=700&webp&imagetools';

	let carousel: Carousel | null = null;
	$effect(() => {
		console.log(carousel);
		setInterval(() => {
			carousel?.right();
		}, 5000);
	});
</script> -->

<!-- All PORTRAITS, no aspect-ratio 1/1, keep it portrait orientation. -->
<!-- On desktop: 3x3 pictures, slightly smaller gap than /portfolio between pics -->
<!-- On mobile, 2x6 pictures,  -->
<!-- <div class="px-4 py-20 flex flex-col gap-4">
	<h1 class="text-3xl text-center font-Forum">FAMILIES, SIBLINGS & LITTLE ONES</h1>
	<Carousel
		bind:this={carousel}
		class="w-[600px] mx-auto rounded-container-token"
		innerClass="rounded-container-token"
	>
		<img src={Img1} alt="Family of 4 amongst Autumn leaves" />
		<img src={Img2} alt="todo" />
	</Carousel>
</div>

<style lang="postcss">
	img {
		@apply snap-center aspect-square object-cover w-[600px];
	}
</style> -->
