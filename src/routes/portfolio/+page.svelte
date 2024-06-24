<script lang="ts">
	import { STATIC_FILES } from '$lib';
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
	const sections: Section[] = [
		{
			title: 'Family',
			subheading: 'todo',
			href: '/portfolio/family',
			imgs: [
				{
					src: STATIC_FILES.imgs.clients['P5151059.JPG'],
					alt: 'Family of 4 amongst Autumn leaves.'
				},
				{
					src: STATIC_FILES.imgs.clients['P5152015.JPG'],
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
					src: STATIC_FILES.imgs.clients['P6020330.jpg'],
					alt: 'Ginger dog preparing to run.'
				},
				{
					src: STATIC_FILES.imgs.clients['P6020120.jpg'],
					alt: 'Ginger dog laying on back with purple flowers in background.'
				}
			]
		},
		{
			title: 'Couples',
			subheading: 'todo',
			href: '/portfolio/couples',
			imgs: [
				{
					src: STATIC_FILES.imgs.clients['P6184044.JPG'],
					alt: 'A couple in front of a lighthouse, looking at the camera.'
				},
				{
					src: STATIC_FILES.imgs.clients['P6184010.JPG'],
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
			imgs: [IMG_TODO, IMG_TODO]
		},
		{
			title: 'Landscape',
			subheading: 'todo',
			href: '/portfolio/landscape',
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

	span {
		@apply text-2xl;
	}

	.cell {
		@apply flex flex-col gap-2;
	}
</style>
