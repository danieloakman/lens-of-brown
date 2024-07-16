<script lang="ts">
	import Divider from '$components/Divider.svelte';
	import BottomBanner from '$components/BottomBanner.svelte';
	import ForMore from '$components/ForMore.svelte';
	import type { BasicImg } from '$types';
	import PageBody from '$components/PageBody.svelte';
	import ShannonBrodbeck1 from '$imgs/shannon_brodbeck1.jpg?url&w=1000&aspect=1:1&imagetools';
	import TimBear4 from '$imgs/tim_bear4.jpg?url&w=1000&aspect=1:1&imagetools';
	import Wombat1 from '$imgs/wombat1.jpg?url&w=1000&aspect=1:1&imagetools';
	import HoneySantos4 from '$imgs/animals/honey_santos4.jpg?url&w=1000&aspect=1:1&imagetools';
	import ScottChurchill1 from '$imgs/couples/scott_churchill1.jpg?url&w=1000&aspect=1:1&imagetools';
	import DanAndTrot2 from '$imgs/dan_and_trot2.jpg?url&w=1000&aspect=1:1&imagetools';
	import TrotPortrait1 from '$imgs/portraits/trot_portrait1.jpg?url&w=1000&aspect=1:1&imagetools';
	import BiancaCherie4 from '$imgs/bianca_cherie4.jpg?url&w=1000&aspect=1:1&imagetools';
	import Landscape1 from '$imgs/landscape1.jpg?url&w=1000&aspect=1:1&imagetools';
	import Landscape2 from '$imgs/landscape2.jpg?url&w=1000&aspect=1:1&imagetools';
	import Events1 from '$imgs/events1.jpg?url&w=1000&aspect=1:1&imagetools';
	import Events2 from '$imgs/events2.jpg?url&w=1000&aspect=1:1&imagetools';
	import { minmax, map } from 'iteragain';
	import { Icon } from '$lib/icons';

	type PricePackage = [name: string, amount: number];
</script>

{#snippet ServicePricing({
	title,
	img: { src, alt },
	description,
	pricing,
	minmax: _minmax = minmax(map(pricing, ([, amount]) => amount))
}: {
	title: string;
	img: BasicImg;
	pricing: PricePackage[];
	description: string;
	minmax?: [min: number, max: number];
})}
	<div class="flex flex-col gap-4 rounded-container-token bg-surface-200 max-w-[600px] pb-4">
		<img
			class="rounded-tl-container-token rounded-tr-container-token max-h-[600px] max-w-[600px] aspect-square object-cover"
			{src}
			{alt}
		/>
		<div class="flex flex-col gap-4 px-4">
			<h1 class="text-center text-3xl text-primary-500 font-Forum">{title}</h1>
			<Divider horizontal class="!border-gray-300" />
			<h2 class="text-center text-2xl font-Forum">AUD ${_minmax[0]} - ${_minmax[1]}</h2>
			<Divider horizontal class="!border-gray-300" />
			<h2 class="text-2xl font-Forum bold">What to expect</h2>
			<p class="text-lg pb-4">{description}</p>
			<!-- TODO: if description becomes too long, add a "Read more" button that expands -->
			<h2 class="text-2xl font-Forum bold">Pricing - <i>starts from*</i></h2>
			<ul class="flex flex-col gap-4 px-4">
				{#each pricing as [name, amount]}
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
{/snippet}

<PageBody class="gap-20 py-20">
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 self-center gap-3">
		{@render ServicePricing({
			title: 'Mini Shoots',
			img: { src: ShannonBrodbeck1, alt: 'todo' },
			description: 'TODO fill in',
			pricing: [
				['Family', 150],
				['Couples', 150],
				['Engagement', 150],
				['Solo', 100],
				['Pets', 100]
			]
		})}
		{@render ServicePricing({
			title: 'Family Packages',
			img: { src: TimBear4, alt: 'todo' },
			description: 'TODO fill in',
			pricing: [
				['Family', 300],
				['Siblings', 150],
				['Extended family', 50]
			]
		})}
		{@render ServicePricing({
			title: 'Couples Packages',
			img: { src: ScottChurchill1, alt: 'todo' },
			description: 'TODO fill in. TODO: Replace "Couples packages" with something better',
			pricing: [
				['Couples', 100],
				['Proposal/Engagement', 150]
			]
		})}
		{@render ServicePricing({
			title: 'Weddings',
			img: { src: '', alt: 'todo' },
			description: 'TODO fill in',
			pricing: [
				['Elopements', 700],
				['Weddings', 1000]
			]
		})}
		{@render ServicePricing({
			title: 'Events',
			img: { src: Events1, alt: 'todo' },
			description: 'TODO fill in',
			pricing: [
				['Something Small', 50],
				['A Big Group', 200],
				['A Huge Celebration', 500]
			]
		})}
		{@render ServicePricing({
			title: 'Animals',
			img: { src: HoneySantos4, alt: 'todo' },
			description: 'TODO fill in',
			pricing: [
				['Pet/s only', 100],
				['Pet/s & Owner', 200]
			]
		})}
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<div class="flex flex-col gap-10">
		<h1 class="text-5xl text-primary-500 font-Forum">What to expect when you book with us...</h1>
		<div class="grid grid-cols-[auto_1fr] gap-6 ps-6">
			{#each ['Images that you love', 'blah '.repeat(50).trimEnd(), 'something'] as text}
				<Icon.SquareCheckBig class="w-[44px] h-[44px]" />
				<span class="text-2xl">{text}</span>
			{/each}
		</div>
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<ForMore />
</PageBody>

<BottomBanner />
