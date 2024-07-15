<!-- TODO: rename route as /services -->
<script lang="ts">
	import Divider from '$components/Divider.svelte';
	import BottomBanner from '$components/BottomBanner.svelte';
	import ForMore from '$components/ForMore.svelte';
	import type { BasicImg } from '$types';
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
	import { minmax, map } from 'iteragain';

	type PricePackage = [name: string, amount: number];
	const miniShoots: PricePackage[] = [
		['Family', 150],
		['Couples', 150],
		['Engagement', 150],
		['Solo', 100],
		['Pets', 100]
	];
	// TODO: make the below lower case:
	const packages: PricePackage[] = [
		['FAMILY OR SIBLINGS', 300],
		['COUPLES', 300],
		['PROPOSAL OR ENGAGEMENT', 300],
		['WEDDINGS OR ELOPEMENTS', 700],
		['EVENTS', 450]
	];
</script>

<!--
TODO: Mini shoots, just list the packages, no nested dot points underneath. No checkbox. No "book" button.
Replace "About this service" with "What to expect" 
Family packages list: Family - starts from $300. Each item is listed like that.
-->

{#snippet serviceSection({
	title,
	img: { src, alt },
	pricing,
	description,
	minmax: _minmax = minmax(map(pricing, ([, amount]) => amount))
}: {
	title: string;
	img: BasicImg;
	pricing: PricePackage[];
	description: string;
	minmax?: [min: number, max: number];
})}
	<div class="flex flex-col gap-4 rounded-container-token bg-surface-200 h-[800px] py-4">
		<img
			class="rounded-tl-container-token rounded-tr-container-token w-[400px] aspect-square object-cover"
			{src}
			{alt}
		/>
		<div class="flex flex-col gap-4 p-4 h-[400px] overflow-y-scroll">
			<h1 class="text-center text-3xl text-primary-500 font-Forum pb-4">{title}</h1>
			<Divider horizontal />
			<h2 class="text-center text-2xl font-Forum">AUD ${_minmax[0]} - ${_minmax[1]}</h2>
			<Divider horizontal />
			<p class="text-lg h-[160px]">{description}</p>
			<h2 class="text-2xl font-Forum bold">Pricing</h2>
			<ul class="flex flex-col gap-4 px-4">
				{#each pricing as [name, amount]}
					<li>
						<span class="text-xl font-Forum">{name} - ${amount}</span>
					</li>
				{/each}
			</ul>
		</div>
		<button class="btn variant-filled-primary text-3xl font-Forum w-[70%] self-center">Book</button>
	</div>
{/snippet}

<div class="flex flex-col gap-20 pt-20 mx-auto">
	<div class="grid grid-cols-1 min-[820px]:grid-cols-2 min-[1240px]:grid-cols-3 self-center gap-3">
		{@render serviceSection({
			title: 'Mini Shoots',
			img: { src: ShannonBrodbeck1, alt: 'todo' },
			pricing: [
				['Family', 150],
				['Couples', 150],
				['Engagement', 150],
				['Solo', 100],
				['Pets', 100]
			],
			description: 'TODO fill in'
		})}
	</div>

	<ForMore />

	<BottomBanner />
</div>

<!-- <div class="flex flex-col pb-8 gap-10">
	<h1 class="text-primary-500 dark:text-primary-100 mx-auto pt-10">PRICE LIST*</h1>

	<Divider horizontal />

	<div class="flex flex-col mx-auto gap-6 p-4">
		<div class="flex flex-col gap-6">
			<h2>MINI-SHOOTS (10 EDITED IMAGES)</h2>

			<div class="flex flex-col w-full px-6 gap-4">
				{#each miniShoots as [name, amount]}
					<div class="flex flex-row justify-between">
						<span>{name}</span>
						<span><b>$</b>{amount}</span>
					</div>
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-6">
			<div class="flex flex-row justify-between items-baseline">
				<h2>PACKAGES</h2>
				<span>STARTS FROM:</span>
			</div>

			<div class="flex flex-col w-full px-6 gap-4">
				{#each packages as [name, amount]}
					<div class="flex flex-row justify-between">
						<span>{name}</span>
						<span><b>$</b>{amount}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<Divider horizontal />

	<h3 class="mx-auto">*PRICES SUBJECT TO CHANGE</h3>
</div> -->

<!--
TODO: make component for the "See more\n follow us on instagram" then some pictures. As well as the bottom banner
that contains the social icon buttons. These are reused on most pages.
-->
