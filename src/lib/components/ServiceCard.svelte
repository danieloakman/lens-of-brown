<script lang="ts">
	import type { BasicImg } from '$types';
	import { map, minmax } from 'iteragain';
	import Divider from './Divider.svelte';
	// import ReadMore from './ReadMore.svelte';

	type PricePackage = [name: string, amount: number];
	type NestedStringList = Array<string | string[]>;
	const {
		title,
		img,
		pricing = ([min, max]) => `AUD $${min} - ${max}`,
		description,
		packages
	}: {
		title: string;
		img: BasicImg;
		packages: PricePackage[];
		pricing?: (minmax: [min: number, max: number]) => string;
		description?: NestedStringList;
	} = $props();

	const { src, alt } = img;
  // TODO: add a ReadMore component to expand the description
	const expanded = $state(false);
</script>

<div class="flex flex-col gap-4 rounded-container-token bg-surface-200 max-w-[600px] pb-4">
	<img
		class="rounded-tl-container-token rounded-tr-container-token max-h-[600px] max-w-[600px] aspect-square object-cover"
		{src}
		{alt}
	/>
	<div class="flex flex-col gap-4 px-4">
		<h1 class="text-center text-3xl text-primary-500 font-Forum">{title}</h1>
		<Divider horizontal class="!border-gray-300" />
		<h2 class="text-center text-2xl font-Forum">
			{pricing(minmax(map(packages, ([, amount]) => amount)))}
		</h2>
		<Divider horizontal class="!border-gray-300" />
		{#if description}
			<div class="">
				<h2 class="text-2xl font-Forum bold">Inclusions</h2>
				<!-- TODO: if description becomes too long, add a "Read more" button that expands -->
				<ul class="text-lg pb-4">
					{#each description as item}
						{#if typeof item === 'string'}
							<li>{item}</li>
						{:else}
							<ul class="ps-4">
								{#each item as nestedItem}
									<li>{nestedItem}</li>
								{/each}
							</ul>
						{/if}
					{/each}
				</ul>
			</div>
		{/if}
		<h2 class="text-2xl font-Forum bold">Pricing - <i>starts from*</i></h2>
		<ul class="flex flex-col gap-4 px-4">
			{#each packages as [name, amount]}
				<li>
					<span class="text-xl font-Forum">{name} - ${amount}</span>
				</li>
			{/each}
		</ul>
	</div>
	<!-- <button class="btn variant-filled-primary text-3xl font-Forum w-[70%] self-center mt-auto">
    Book
  </button> -->
</div>
