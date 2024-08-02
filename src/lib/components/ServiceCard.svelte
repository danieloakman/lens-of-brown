<script lang="ts">
	import type { BasicImg } from '$types';
	import { map, minmax } from 'iteragain';
	import Divider from './Divider.svelte';
	import { onMount } from 'svelte';

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
		description: NestedStringList;
		pricing?: (minmax: [min: number, max: number]) => string;
	} = $props();

	const { src, alt } = img;
	let expanded = $state(false);
	let showExpandBtn = $state(false);
	let descriptionEl: HTMLUListElement;
	onMount(() => {
		// Only show the expand button if the description overflows:
		if (descriptionEl.scrollHeight > descriptionEl.clientHeight) {
			showExpandBtn = true;
			expanded = false;
		} else {
			showExpandBtn = false;
			expanded = true;
		}
	});
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
		<div class="flex flex-col gap-4 overflow-scroll max-h-[300px]">
			<h2 class="text-2xl font-Forum bold">Inclusions</h2>
			<ul
				bind:this={descriptionEl}
				class={'text-lg pb-4 ' +
					(expanded
						? ''
						: 'overflow-hidden text-ellipsi min-h-[90px] bg-gradient-to-b from-black text-transparent bg-clip-text')}
			>
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

			{#if showExpandBtn}
				<button
					class="btn mx-auto text-primary-400 underline mt-0 pt-0"
					onclick={() => (expanded = !expanded)}
				>
					{expanded ? 'Read less' : 'Read more'}
				</button>
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
	</div>
	<!-- <button class="btn variant-filled-primary text-3xl font-Forum w-[70%] self-center mt-auto">
    Book
  </button> -->
</div>
