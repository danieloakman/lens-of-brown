<script lang="ts">
	import { page } from '$app/stores';
	import { iife, propIs, isObjectLike } from 'js-utils';
	import { iter, repeat } from 'iteragain';
	import { dev } from '$app/environment';

	type ImgDir =
		| 'portraits'
		| 'families'
		| 'couples'
		| 'landscapes'
		| 'weddings'
		| 'events'
		| 'animals';

	const imgdir = $page.params.imgdir as ImgDir | unknown;
	let alts: IterableIterator<string> = repeat('todo', 12);
	const imgs: Record<string, { default: string }> = iife(() => {
		// **The following non-dynamic if statements are required for vite to correctly resolve the glob.**
		// To add more image directories, add more if statements.
		// if (imgdir === 'portraits') {
		// 	return import.meta.glob('$imgs/portraits/*.{jpg,jpeg,png,webp}', {
		// 		eager: true,
		// 		query: {
		// 			enhanced: true,
		// 			aspect: '0.67:1'
		// 		}
		// 	});
		// }
		// if (imgdir === 'families')
		// 	return import.meta.glob('$imgs/families/*.{jpg,jpeg,png,webp}', {
		// 		eager: true,
		// 		query: {
		// 			enhanced: true,
		// 			aspect: '0.67:1'
		// 		}
		// 	});
		// if (imgdir === 'couples')
		// 	return import.meta.glob('$imgs/couples/*.{jpg,jpeg,png,webp}', {
		// 		eager: true,
		// 		query: {
		// 			enhanced: true,
		// 			aspect: '0.67:1'
		// 		}
		// 	});
		// if (imgdir === 'landscapes')
		// 	return import.meta.glob('$imgs/landscapes/*.{jpg,jpeg,png,webp}', {
		// 		eager: true,
		// 		query: {
		// 			enhanced: true,
		// 			aspect: '0.67:1'
		// 		}
		// 	});
		// if (imgdir === 'weddings')
		// 	return import.meta.glob('$imgs/weddings/*.{jpg,jpeg,png,webp}', {
		// 		eager: true,
		// 		query: {
		// 			enhanced: true,
		// 			aspect: '0.67:1'
		// 		}
		// 	});
		// if (imgdir === 'events')
		// 	return import.meta.glob('$imgs/events/*.{jpg,jpeg,png,webp}', {
		// 		eager: true,
		// 		query: {
		// 			enhanced: true,
		// 			aspect: '0.67:1'
		// 		}
		// 	});
		// if (imgdir === 'animals')
		// 	return import.meta.glob('$imgs/animals/*.{jpg,jpeg,png,webp}', {
		// 		eager: true,
		// 		query: {
		// 			enhanced: true,
		// 			aspect: '0.67:1'
		// 		}
		// 	});
		if (dev && imgdir === 'test') {
			const imgs = import.meta.glob('$imgs/wombat*', {
				eager: true,
				query: {
					enhanced: true,
					aspect: '0.67:1'
				}
			});
      const img = Object.values(imgs)[0];
      if (!(isObjectLike(img) && ('default' in img))) throw new Error('test img.default is not a string');
			return iter(repeat(img as { default: string }, 12))
				.enumerate()
				.reduce(
					(a, [i, v]) => ((a[i.toString()] = v), a),
					{} as Record<string, { default: string }>
				);
		}
		throw new Error(`Unknown imgdir: ${imgdir}`);
	});
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
	{#each iter(Object.values(imgs)).pluck('default').zip(alts) as [src, alt]}
		<enhanced:img {src} {alt} class="rounded-container-token w-[700px]"></enhanced:img>
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
