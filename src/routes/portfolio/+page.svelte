<script lang="ts">
	import type { BasicImg } from '$types';
	import TwoImg from './TwoImg.svelte';
	import Divider from '$components/Divider.svelte';

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

	import ShannonBrodbeck1 from '$imgs/shannon_brodbeck1.jpg?url&w=400&aspect=1:1&imagetools';
	import TimBear4 from '$imgs/tim_bear4.jpg?url&w=400&aspect=1:1&imagetools';
	import Wombat1 from '$imgs/wombat1.jpg?url&w=400&aspect=1:1&imagetools';
	import HoneySantos4 from '$imgs/animals/honey_santos4.jpg?url&w=400&aspect=1:1&imagetools';
	import ScottChurchill1 from '$imgs/couples/scott_churchill1.jpg?url&w=400&aspect=1:1&imagetools';
	import DanAndTrot2 from '$imgs/dan_and_trot2.jpg?url&w=400&aspect=1:1&imagetools';
	import TrotPortrait1 from '$imgs/portraits/trot_portrait1.jpg?url&w=400&aspect=1:1&imagetools';
	import BiancaCherie4 from '$imgs/bianca_cherie4.jpg?url&w=400&aspect=1:1&imagetools';
	import Landscape1 from '$imgs/landscape1.jpg?url&w=400&aspect=1:1&imagetools';
	import Landscape2 from '$imgs/landscape2.jpg?url&w=400&aspect=1:1&imagetools';
	import Events1 from '$imgs/events1.jpg?url&w=400&aspect=1:1&imagetools';
	import Events2 from '$imgs/events2.jpg?url&w=400&aspect=1:1&imagetools';

	const sections: Section[] = [
		{
			title: 'Families',
			subheading: '+ siblings & little ones',
			href: '/portfolio/families',
			imgs: [
				{
					src: ShannonBrodbeck1,
					alt: 'Family of 5 ...' // tODO: edit this
				},
				{
					src: TimBear4,
					alt: 'todo'
				}
			]
			// TODO: 12 photos:
			// shannon_brodbeck1
		},
		{
			title: 'Portraits',
			subheading: '+ headshots',
			href: '/portfolio/portraits',
			imgs: [
				{
					src: TrotPortrait1,
					alt: ''
				},
				{ src: BiancaCherie4, alt: 'todo' }
			] // TODO: bianc_cherie4
		},
		{
			title: 'Landscapes',
			subheading: '+ cities and nature',
			href: '/portfolio/landscapes',
			imgs: [
				{
					src: Landscape2,
					alt: 'todo'
				},
				{
					src: Landscape1,
					alt: 'todo'
				}
			]
		},
		{
			title: 'Animals',
			subheading: '+ pets & natives',
			href: '/portfolio/animals',
			imgs: [
				// TODO: Swap wombat1 and honey_santos4 in here:
				{
					src: Wombat1,
					alt: 'todo'
				},
				{
					src: HoneySantos4,
					alt: 'todo'
				}
			]
		},
		{
			title: 'Couples',
			subheading: '+ engagements & proposals',
			href: '/portfolio/couples',
			imgs: [
				{
					src: DanAndTrot2,
					alt: 'todo'
				},
				{
					src: ScottChurchill1,
					alt: 'A couple in front of a lighthouse, looking at each other.'
				}
			]
		},
		{
			title: 'Events',
			subheading: '+ special occasions',
			href: '/portfolio/events',
			imgs: [
				{
					src: Events2,
					alt: 'todo'
				},
				{
					src: Events1,
					alt: 'todo'
				}
			]
		}
		// {
		// 	title: 'Weddings',
		// 	subheading: 'todo',
		// 	href: '/portfolio/weddings',
		// 	imgs: [IMG_TODO, IMG_TODO]
		// }
	];
</script>

<!-- TODO: make sure all light colored titles use the primary darker brown instead. -->

<div class="flex flex-col">
	<div class="flex flex-col gap-10 mx-auto pb-4 pt-10 px-12">
		<div>
			<h3 class="uppercase italic">A peek through the</h3>
			<h2 class="uppercase text-primary-500 ps-24">Lens of Brown...</h2>
		</div>

		<!-- <Divider horizontal /> -->

		<div class="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-10">
			{#each sections as { title, imgs, subheading, href }}
				<a class="cell" {href}>
					<TwoImg class="rounded-container-token w-[400px] aspect-square object-cover" {imgs} />
					<h2 class="text-center">{title}</h2>
					<h3 class="text-center">{subheading}</h3>
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	/* TODO: Swap all h2's to h1s and adjust their text size */
	h1 {
		@apply text-5xl font-Forum;
	}

	h2 {
		@apply text-4xl font-Forum;
	}

	h3 {
		@apply text-3xl font-Forum;
	}

	/* span {
		@apply text-2xl;
	} */

	.cell {
		@apply flex flex-col gap-2;
	}
</style>
