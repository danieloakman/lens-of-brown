<script lang="ts">
	import { page } from '$app/stores';
	import { iife, propIs, raise, pipe } from 'js-utils';
	import { iter, repeat, zip, pluck, toIterator } from 'iteragain';
	import type { ImgSlug } from './utils';

	const swapIndices =
		(...args: [i: number, j: number][]) =>
		<T,>(arr: T[]) => {
			const result = arr.slice();
			for (const [i, j] of args) {
				const temp = arr[i] ?? raise('Index out of bounds: ' + i);
				arr[i] = arr[j] ?? raise('Index out of bounds: ' + j);
				arr[j] = temp;
			}
			return result;
		};

	const assertImg = (obj: unknown): { default: string } => {
		if (propIs(obj, 'default', 'object') || propIs(obj, 'default', 'string'))
			return obj as unknown as { default: string };
		throw new Error('Expected object with default string property');
	};

	const process = (imgs: Record<string, unknown>, swap: [i: number, j: number][], alts: Iterable<string>): [src: string, alt: string][] => {
		const modules = iter(Object.values(imgs)).map(assertImg).pluck('default').zip(alts).map(v => swapIndices(...swap)(v) as any).toArray();
		return modules;
	}

	const slug = $page.params.slug as ImgSlug | unknown;
	let alts: IterableIterator<string> = repeat('todo', 12);
	const imgs: [src: string, alt: string][] = iife(() => {
		// **The following non-dynamic if statements are required for vite to correctly resolve the glob.**
		// To add more image directories, add more if statements.
		if (slug === 'portraits') {
			return process(
				import.meta.glob('$imgs/portraits-*.{jpg,jpeg,png,webp}', {
					eager: true,
					query: {
						enhanced: true
					}
				}),
				// TODO: put in args
			);
		}
		// if (slug === 'families')
		// 	return import.meta.glob('$imgs/families-*.{jpg,jpeg,png,webp}', {
		// 		eager: true,
		// 		query: {
		// 			enhanced: true
		// 		}
		// 	});
		// if (slug === 'couples')
		// 	return import.meta.glob('$imgs/couples-*.{jpg,jpeg,png,webp}', {
		// 		eager: true,
		// 		query: {
		// 			enhanced: true
		// 		}
		// 	});
		// if (slug === 'landscapes')
		// 	return import.meta.glob('$imgs/landscapes-*.{jpg,jpeg,png,webp}', {
		// 		eager: true,
		// 		query: {
		// 			enhanced: true
		// 		}
		// 	});
		// if (slug === 'weddings')
		// 	return import.meta.glob('$imgs/weddings-*.{jpg,jpeg,png,webp}', {
		// 		eager: true,
		// 		query: {
		// 			enhanced: true
		// 		}
		// 	});
		// if (slug === 'events')
		// 	return import.meta.glob('$imgs/events-*.{jpg,jpeg,png,webp}', {
		// 		eager: true,
		// 		query: {
		// 			enhanced: true
		// 		}
		// 	});
		// if (slug === 'animals')
		// 	return import.meta.glob('$imgs/animals-*.{jpg,jpeg,png,webp}', {
		// 		eager: true,
		// 		query: {
		// 			enhanced: true
		// 		}
		// 	});
		throw new Error(`Unknown img slug: ${slug}`);
	});
</script>

<div class="flex flex-col mx-auto">
	<!-- TODO: resize this for proper grid cols, like in the main portfolio page -->
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4 pt-20 self-center">
		{#each imgs as [src, alt]}
			<!-- {#await pSrc() then src} -->
			<enhanced:img
				src={assertImg(src).default}
				{alt}
				class="rounded-container-token max-w-[400px] md:max-w-[500px] object-cover"
				style="aspect-ratio: 0.67/1;"
				sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
			></enhanced:img>
			<!-- {/await} -->
		{/each}
	</div>
</div>

<!-- All PORTRAITS, no aspect-ratio 1/1, keep it portrait orientation. -->
<!-- On desktop: 3x3 pictures, slightly smaller gap than /portfolio between pics -->
<!-- On mobile, 2x6 pictures,  -->
