<script lang="ts">
	import BannerImageCarousel from '$components/BannerImageCarousel.svelte';
	import type { ImgProps } from '$types';

	const imgs: ImgProps[] = [
		{
			src: 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
			alt: 'grassy meadow'
		},
		{
			src: 'https://cdn.naturettl.com/wp-content/uploads/2020/04/25152036/how-to-find-great-locations-for-landscape-photography-11.jpg',
			alt: 'rocky beach'
		},
		{
			src: 'https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2-1024x649.png',
			alt: 'lake with snowy mountains backdrop'
		},
		{
			src: 'https://vastphotos.com/files/uploads/photos/10691/peaceful-water-landscape-photo-l.jpg?v=20220712073521',
			alt: 'Road with snowy mountains backdrop'
		}
	];
</script>

<svelte:head>
	<title>Lens of Brown</title>
	<meta name="description" content="Lens of Brown Photography" />
</svelte:head>

<div class="flex flex-col gap-10">
	<!-- <img class="object-fit" src={imgs[0].src} alt={imgs[0].alt} /> -->
	<BannerImageCarousel images={imgs} />

	<section class="m-auto flex flex-col">
		<h1 class="scroll-m-20 justify-center text-4xl font-semibold">Lens of Brown</h1>
	</section>

	<section class="m-auto flex flex-col">
		<h1 class="scroll-m-20 justify-center text-4xl font-semibold">Portfolio</h1>
	</section>

	<section class="m-auto flex flex-col gap-2">
		<h1 class="scroll-m-20 justify-center text-4xl font-semibold">Launching soon...</h1>
		<p>Something</p>
		<p>Something</p>
		<p>Something</p>
		<p>Something</p>
		<p>Something</p>
	</section>
</div>
