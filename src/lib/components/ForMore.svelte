<!--
@component ForMore
@description Section that includes a link to the Instagram and a small amount of recent images.
-->
<script lang="ts">
	import { INSTAGRAM_URL } from '$constants';
	import Carousel from './Carousel.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { iter } from 'iteragain';
	import { memoize } from 'js-utils';
	import alts from '$imgs/lens.ofbrown/alts.json';

	const numRegex = /^\d+$/;
	const basename = memoize((path: string): string => path.split('/').pop() ?? '');
	const filename = memoize((path: string): string => basename(path).split('.')[0] ?? '');
	const parseDateNum = memoize((path: string): number => {
		if (numRegex.test(filename(path))) return parseInt(filename(path));
		const file = basename(path);
		const [date, time] = file.split('_');
		if (!time) throw new Error(`No time found in ${path}`);
		return new Date(`${date!} ${time.replace('-', ':')}`).getTime();
	});

	const imgs = iter(
		Object.entries(
			import.meta.glob('$imgs/lens.ofbrown/*.jpg', {
				eager: false,
				query: { w: 300, aspect: '1:1', format: 'webp' }
			})
		) as [string, () => Promise<{ default: any }>][]
	)
		.sort((a, b) => {
			const aDate = parseDateNum(a[0]);
			const bDate = parseDateNum(b[0]);
			return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
		})
		.map(([path, img]) => [img, (alts as any)[basename(path)]] as const);

	const { ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div {...rest}>
	<h2 class="text-center text-3xl text-primary-500 font-Forum">For more</h2>
	<h3 class="text-center text-xl">
		Follow us on Instagram @<a class="anchor" href={INSTAGRAM_URL} target="_blank">lens.ofbrown</a>
	</h3>
	<Carousel class="pt-4 h-[300px]" showButtons>
		{#each imgs as [img, alt]}
			{#await img() then src}
				<img src={src.default} class="carousel-img-sq" {alt} />
			{/await}
		{/each}
	</Carousel>
</div>

<style lang="postcss">
	.carousel-img-sq {
		@apply w-[300px] px-1 rounded-lg aspect-square object-cover;
	}
</style>
