<script lang="ts">
	import { STATIC_FILES } from '$lib';
	import { iter, take } from 'iteragain';
	import TwoImg from './TwoImg.svelte';

	function random(seed: number) {
		var x = Math.sin(seed++) * 10000;
		return x - Math.floor(x);
	}
	function shuffle<T>(array: T[], seed: number): T[] {
		// TODO: refactor this
		var m = array.length,
			t,
			i;

		// While there remain elements to shuffle…
		while (m) {
			// Pick a remaining element…
			i = Math.floor(random(seed) * m--);

			// And swap it with the current element.
			t = array[m];
			array[m] = array[i] as T;
			array[i] = t as T;
			++seed;
		}

		return array;
	}
	const seed = 10;
	const imgs = take(
		shuffle(iter(Object.values(STATIC_FILES.imgs.clients) as string[]).toArray(), seed),
		12
	);
</script>

<div class="flex flex-col">
	<h1 class="p-4 text-center">See what we've been up to!</h1>

	<!-- Sections in grid: -->
	<!-- <h1>Family</h1>

	<h1>Couples</h1>

	<h1>Animals</h1>

	<h1>Events</h1>

	<h1>Portraits</h1>

	<h1>Landscape</h1> -->

	<!-- TODO once we have pics of weddings <h1>Weddings</h1> -->

	<!-- 
	TODO: On hover crossfade to another image
	2x2 on desktop, 1x4 on mobile
	Title below image square, with subheading
	 -->
	<div class="py-4 px-4 mx-auto md:px-52 grid grid-cols-1 md:grid-cols-2 gap-32">
		<div class="flex flex-col gap-4">
			<TwoImg
				class="rounded-lg w-[400px] aspect-square object-cover"
				imgs={[
					{
						src: STATIC_FILES.imgs.clients['P5151059.JPG'],
						alt: 'Family of 4 amongst Autumn leaves.'
					},
					{
						src: STATIC_FILES.imgs.clients['P5152015.JPG'],
						alt: 'Boy and girl toddlers playing with Autumn leaves.'
					}
				]}
			/>
			<h2>Family</h2>
		</div>

		<div class="flex flex-col gap-4">
			<TwoImg
				class="rounded-lg w-[400px] aspect-square object-cover"
				loading="lazy"
				imgs={[
					{
						src: STATIC_FILES.imgs.clients['P6020120.jpg'],
						alt: 'Family of 4 amongst Autumn leaves.'
					},
					{
						src: STATIC_FILES.imgs.clients['P6020330.jpg'],
						alt: 'Boy and girl toddlers playing with Autumn leaves.'
					}
				]}
			/>
			<h2>Animals</h2>
		</div>
		<!-- <img
				alt="Portfolio for lens of brown"
				src={img}
				loading="lazy"
				class="w-[400px] object-cover aspect-square rounded-lg hover-sm"
			/> -->
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply text-5xl mx-auto;
	}

	h2 {
		@apply text-4xl text-center;
	}

	h3 {
		@apply text-3xl text-center;
	}
</style>
