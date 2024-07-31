<script lang="ts">
	import { page } from '$app/stores';
	import { iife, raise, propIs } from 'js-utils';
	import { iter, repeat } from 'iteragain';
	import type { ImgSlug } from './utils';
	import PageBody from '$components/PageBody.svelte';
	import BottomBanner from '$components/BottomBanner.svelte';

	const swapIndices = <T,>(arr: T[], swaps: [i: number, j: number][]): T[] => {
		const result = arr.slice();
		for (const [i, j] of swaps) {
			const temp = result[i] ?? raise('Index out of bounds: ' + i);
			result[i] = result[j] ?? raise('Index out of bounds: ' + j);
			result[j] = temp;
		}
		return result;
	};

	const assertImg = (obj: unknown): { default: string } => {
		if (propIs(obj, 'default', 'object') || propIs(obj, 'default', 'string'))
			return obj as unknown as { default: string };
		throw new Error('Expected object with default string property');
	};

	const process = (
		imgs: Record<string, unknown>,
		alts: Iterable<string>,
		swaps: [i: number, j: number][]
	): [src: string, alt: string][] =>
		swapIndices(
			iter(Object.values(imgs)).map(assertImg).pluck('default').zip(alts).toArray(),
			swaps
		);

	const slug = $page.params.slug as ImgSlug;
	const imgs: [src: string, alt: string][] = iife(() => {
		// **The following non-dynamic if statements are required for vite to correctly resolve the glob.**
		// To add more image directories, add more if statements.
		switch (slug) {
			case 'portraits':
				return process(
					import.meta.glob('$imgs/portraits-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true
						}
					}),
					repeat('todo', 12),
					[]
				);
			case 'families':
				return process(
					import.meta.glob('$imgs/families-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true
						}
					}),
					repeat('todo', 12),
					[]
				);
			case 'couples':
				return process(
					import.meta.glob('$imgs/couples-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true
						}
					}),
					repeat('todo', 12),
					[]
				);
			case 'landscapes':
				return process(
					import.meta.glob('$imgs/landscapes-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true
						}
					}),
					repeat('todo', 12),
					[]
				);
			case 'weddings':
				return process(
					import.meta.glob('$imgs/weddings-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true
						}
					}),
					repeat('todo', 12),
					[]
				);
			case 'events':
				return process(
					import.meta.glob('$imgs/events-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true
						}
					}),
					repeat('todo', 12),
					[]
				);
			case 'animals':
				return process(
					import.meta.glob('$imgs/animals-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true
						}
					}),
					repeat('todo', 12),
					[]
				);
			default:
				throw new Error(`Unknown img slug: ${slug}`);
		}
	});
</script>

<PageBody>
	<!-- TODO: these pictures don't resize dynamically like in /portfolio. So might just remove the enhanced part and just import a set width for all images -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 self-center gap-3">
		{#each imgs as [src, alt]}
			<enhanced:img
				{src}
				{alt}
				class="rounded-container-token max-w-[310px] object-cover"
				style="aspect-ratio: 0.67/1;"
				sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
			></enhanced:img>
		{/each}
	</div>
</PageBody>

<BottomBanner />

<!-- All PORTRAITS, no aspect-ratio 1/1, keep it portrait orientation. -->
<!-- On desktop: 3x3 pictures, slightly smaller gap than /portfolio between pics -->
<!-- On mobile, 2x6 pictures,  -->
