<script lang="ts">
	import { STATIC_FILES } from '$lib';
	import { iter, take } from 'iteragain';

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
		15
	);
</script>

<div class="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
	{#each imgs as img}
		<img alt="Portfolio image for lens of brown" src={img} />
	{/each}
</div>
