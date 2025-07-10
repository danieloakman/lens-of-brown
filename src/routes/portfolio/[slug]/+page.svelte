<script lang="ts">
	import { page } from '$app/state';
	import { iife, raise, propIs } from 'js-utils';
	import { iter, repeat } from 'iteragain';
	import type { ImgSlug } from './utils';
	import PageBody from '$components/PageBody.svelte';
	import BottomBanner from '$components/BottomBanner.svelte';
	import { scrollIntoView } from '$utils';

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

	const slug = page.params.slug as ImgSlug;
	const imgs: [src: string, alt: string][] = iife(() => {
		// **The following non-dynamic if statements are required for vite to correctly resolve the glob.**
		// To add more image directories, add more if statements.
		switch (slug) {
			case 'portraits':
				return process(
					// TODO: look into whether we could do '$imgs/*&portraits*.{jpg,jpeg,png,webp}' instead. This would mean we could have multiple `&tag` in the filename.
					import.meta.glob('$imgs/portraits-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true,
							w: 600,
							aspect: '0.67:1'
						}
					}),
					// TODO: add alt texts for all images.
					// TODO: can probably make a component that has a skeleton loading state for images.
					repeat('', 12),
					[
						[1, 3],
						[2, 5],
						[3, 8],
						[4, 6],
						[5, 11],
						[7, 8]
					]
				);
			case 'families':
				return process(
					import.meta.glob('$imgs/families-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true,
							w: 600,
							aspect: '0.67:1'
						}
					}),
					repeat('', 12),
					[
						[1, 5],
						[3, 6],
						[4, 5],
						[4, 8],
						[8, 11],
						[10, 11]
					]
				);
			case 'couples':
				return process(
					import.meta.glob('$imgs/couples-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true,
							w: 600,
							aspect: '0.67:1'
						}
					}),
					repeat('', 12),
					[
						[0, 11],
						[1, 4],
						[2, 9],
						[4, 11],
						[5, 6],
						[4, 8],
						[7, 11],
						[8, 9],
						[9, 10]
					]
				);
			case 'landscapes':
				return process(
					import.meta.glob('$imgs/landscapes-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true,
							w: 600,
							aspect: '0.67:1'
						}
					}),
					repeat('', 12),
					[]
				);
			case 'weddings':
				return process(
					import.meta.glob('$imgs/weddings-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true,
							w: 600,
							aspect: '0.67:1'
						}
					}),
					repeat('', 12),
					[]
				);
			case 'events':
				return process(
					import.meta.glob('$imgs/events-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true,
							w: 600,
							aspect: '0.67:1'
						}
					}),
					repeat('', 12),
					[
						[0, 4],
						[1, 3],
						[2, 3],
						[3, 6],
						[4, 6],
						[9, 11]
					]
				);
			case 'animals':
				return process(
					import.meta.glob('$imgs/animals-*.{jpg,jpeg,png,webp}', {
						eager: true,
						query: {
							enhanced: true,
							w: 600,
							aspect: '0.67:1'
						}
					}),
					repeat('', 12),
					[
						[0, 5],
						[1, 5],
						[2, 7],
						[3, 6],
						[7, 8]
					]
				);
			default:
				throw new Error(`Unknown img slug: ${slug}`);
		}
	});
</script>

<PageBody>
	<!-- TODO: these pictures don't resize dynamically like in /portfolio. So might just remove the enhanced part and just import a set width for all images -->
	<div use:scrollIntoView class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 self-center gap-3">
		{#each imgs as [src, alt]}
			<enhanced:img
				{src}
				{alt}
				class="rounded-container-token max-w-[310px] object-cover"
				style="aspect-ratio: 0.67/1;"
				loading="lazy"
				sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
			></enhanced:img>
		{/each}
	</div>
</PageBody>

<BottomBanner />
