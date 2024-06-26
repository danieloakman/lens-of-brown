<script lang="ts">
	import type { BasicImg } from '$types';
	import TwoImg from './TwoImg.svelte';

	// function random(seed: number) {
	// 	var x = Math.sin(seed++) * 10000;
	// 	return x - Math.floor(x);
	// }
	// function shuffle<T>(array: T[], seed: number): T[] {
	// 	// TODO: refactor this
	// 	var m = array.length,
	// 		t,
	// 		i;

	// 	// While there remain elements to shuffle…
	// 	while (m) {
	// 		// Pick a remaining element…
	// 		i = Math.floor(random(seed) * m--);

	// 		// And swap it with the current element.
	// 		t = array[m];
	// 		array[m] = array[i] as T;
	// 		array[i] = t as T;
	// 		++seed;
	// 	}

	// 	return array;
	// }
	// const seed = 10;
	// const imgs = take(
	// 	shuffle(iter(Object.values(STATIC_FILES.imgs.clients) as string[]).toArray(), seed),
	// 	12
	// );

	interface Section {
		title: string;
		subheading: string;
		href: string;
		imgs: [BasicImg, BasicImg];
	}

	const IMG_TODO: BasicImg = {
		src: '',
		alt: 'todo'
	};

	import fam4 from '$imgs/clients/P5151059.jpg?url&w=400&aspect=1:1&imagetools';
	import twoToddlers from '$imgs/clients/P5152015.jpg?url&w=400&aspect=1:1&imagetools';
	import dogA from '$imgs/clients/P6020330.jpg?url&w=400&aspect=1:1&imagetools';
	import dogB from '$imgs/clients/P6020120.jpg?url&w=400&aspect=1:1&imagetools';
	import couplesA from '$imgs/clients/P6184044.jpg?url&w=400&aspect=1:1&imagetools';
	import couplesB from '$imgs/clients/P6184010.jpg?url&w=400&aspect=1:1&imagetools';
	import TrotPortrait1 from '$imgs/trot_portrait_1.jpg?url&w=400&aspect=1:1&imagetools';
	const sections: Section[] = [
		{
			title: 'Families',
			subheading: 'todo',
			href: '/portfolio/families',
			imgs: [
				{
					src: fam4,
					alt: 'Family of 4 amongst Autumn leaves.'
				},
				{
					src: twoToddlers,
					alt: 'Boy and girl toddlers playing with Autumn leaves.'
				}
			]
		},
		{
			title: 'Animals',
			subheading: 'todo',
			href: '/portfolio/animals',
			imgs: [
				{
					src: dogA,
					alt: 'Ginger dog laying on back with purple flowers in background.'
				},
				{
					src: dogB,
					alt: 'Ginger dog preparing to run.'
				}
			]
		},
		{
			title: 'Couples',
			subheading: 'todo',
			href: '/portfolio/couples',
			imgs: [
				{
					src: couplesA,
					alt: 'A couple in front of a lighthouse, looking at the camera.'
				},
				{
					src: couplesB,
					alt: 'A couple in front of a lighthouse, looking at each other.'
				}
			]
		},
		{
			title: 'Events',
			subheading: 'todo',
			href: '/portfolio/events',
			imgs: [IMG_TODO, IMG_TODO]
		},
		{
			title: 'Portraits',
			subheading: 'todo',
			href: '/portfolio/portraits',
			imgs: [{
				src: TrotPortrait1,
				alt: ''
			}, IMG_TODO]
		},
		{
			title: 'Landscapes',
			subheading: 'todo',
			href: '/portfolio/landscapes',
			imgs: [IMG_TODO, IMG_TODO]
		},
		{
			title: 'Weddings',
			subheading: 'todo',
			href: '/portfolio/weddings',
			imgs: [IMG_TODO, IMG_TODO]
		}
	];
</script>

<div class="flex flex-col">
	<h1 class="p-4 text-center">See what we've been up to!</h1>

	<div class="py-4 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-10">
		{#each sections as { title, imgs, subheading, href }}
			<a class="cell" {href}>
				<TwoImg class="rounded-lg w-[400px] aspect-square object-cover" loading="lazy" {imgs} />
				<h2>{title}</h2>
				<h3>{subheading}</h3>
			</a>
		{/each}
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply text-5xl mx-auto font-Forum;
	}

	h2 {
		@apply text-4xl text-center font-Forum;
	}

	h3 {
		@apply text-3xl text-center font-Forum;
	}

	/* span {
		@apply text-2xl;
	} */

	.cell {
		@apply flex flex-col gap-2;
	}
</style>
