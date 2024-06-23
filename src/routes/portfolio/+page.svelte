<script lang="ts">
	import { STATIC_FILES } from '$lib';
	import { iter, take } from 'iteragain';
	import TwoImg from './TwoImg.svelte';
	import { goto } from '$app/navigation';

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

	<!-- 
	TODO: On hover crossfade to another image
	2x2 on desktop, 1x4 on mobile
	Title below image square, with subheading
	 -->
	<div class="py-4 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
		<div class="cell" onclick={() => goto('/portfolio/family')}>
			<TwoImg
				class="rounded-lg w-[400px] aspect-square object-cover"
				loading="lazy"
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

		<div class="cell">
			<TwoImg
				class="rounded-lg w-[400px] aspect-square object-cover"
				loading="lazy"
				imgs={[
					{
						src: STATIC_FILES.imgs.clients['P6020120.jpg'],
						alt: 'Ginger dog preparing to run.'
					},
					{
						src: STATIC_FILES.imgs.clients['P6020330.jpg'],
						alt: 'Ginger dog laying on back with purple flowers in background.'
					}
				]}
			/>
			<h2>Animals</h2>
		</div>

		<div class="cell">
			<TwoImg
				class="rounded-lg w-[400px] aspect-square object-cover"
				loading="lazy"
				imgs={[
					{
						// TODO: swap to couples photos
						src: STATIC_FILES.imgs.clients['P6020120.jpg'],
						alt: 'Ginger dog preparing to run.'
					},
					{
						src: STATIC_FILES.imgs.clients['P6020330.jpg'],
						alt: 'Ginger dog laying on back with purple flowers in background.'
					}
				]}
			/>
			<h2>Couples</h2>
		</div>

		<div class="cell">
			<h2>Animals</h2>
		</div>

		<div class="cell">
			<h2>Events</h2>
		</div>

		<div class="cell">
			<h2>Portraits</h2>
		</div>

		<div class="cell">
			<h2>Landscape</h2>
		</div>

		<div class="cell">
			<h2>Weddings</h2>
		</div>
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

	.cell {
		@apply flex flex-col gap-4;
	}
</style>
