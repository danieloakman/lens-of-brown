<script lang="ts">
	import Divider from '$components/Divider.svelte';
	import BottomBanner from '$components/BottomBanner.svelte';
	import ForMore from '$components/ForMore.svelte';
	import type { BasicImg } from '$types';
	import PageBody from '$components/PageBody.svelte';
	import ShannonBrodbeck1 from '$imgs/_families-shannon_brodbeck1.jpg?url&w=1000&aspect=1:1&any';
	import TimBear4 from '$imgs/_families-tim_bear6.jpg?url&w=1000&aspect=1:1&any';
	import Wombat1 from '$imgs/_animals-wombat1.jpg?url&w=1000&aspect=1:1&any';
	import ScottChurchill1 from '$imgs/couples-scott_churchill1.jpg?url&w=1000&aspect=1:1&any';
	import DanAndTrot2 from '$imgs/_couples-dan_trot6.jpg?url&w=1000&aspect=1:1&any';
	import TrotPortrait1 from '$imgs/portraits-trot1.jpg?url&w=1000&aspect=1:1&any';
	import BiancaCherie4 from '$imgs/portraits-bianca_cherie4.jpg?url&w=1000&aspect=1:1&any';
	import Landscape1 from '$imgs/landscapes-great_ocean_road.jpg?url&w=1000&aspect=1:1&any';
	import Landscape2 from '$imgs/_landscapes-montague_island.jpg?url&w=1000&aspect=1:1&any';
	import Events1 from '$imgs/_events-sydney_opera_house1.jpg?url&w=1000&aspect=1:1&any';
	import Trot1 from '$imgs/weddings-trot3.jpg?url&w=1000&aspect=1:1&any';
	import Events2 from '$imgs/events-canberra_balloons.jpg?url&w=1000&aspect=1:1&any';
	import AmandaMartin4 from '$imgs/_families_amanda-martin4.jpg?url&w=1000&aspect=1:1&any';
	import TimBear7 from '$imgs/_families-tim_bear7.jpg?url&w=1000&aspect=1:1&position=bottom&any';
	import HoneySantos from '$imgs/animals-honey_santos4.jpg?url&w=1000&aspect=1:1&position=bottom&any';
	import ImgCouples from '$imgs/_couples-dan_trot7.jpg?url&w=1000&aspect=1:1&position=bottom&any';
	import ImgMiniShoots from '$imgs/portraits-bianca_cherie6.jpg?url&w=1000&aspect=1:1&position=bottom&any';
	import { minmax, map } from 'iteragain';
	import { Icon } from '$lib/icons';

	// TODO: Add optional list underneath price package
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
	description?: string;
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
			{#if description}
				<h2 class="text-2xl font-Forum bold">Inclusions</h2>
				<!-- TODO: if description becomes too long, add a "Read more" button that expands -->
				<!-- TODO: make this a <li> -->
				<ul class="text-lg pb-4">
					{#each description.split('\n') as part}
						<li>{part}</li>
					{/each}
				</ul>
			{/if}
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

<PageBody class="pt-5 sm:pt-20 pb-20">
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 self-center gap-3">
		{@render ServicePricing({
			title: 'Mini Shoots',
			img: { src: ImgMiniShoots, alt: 'todo' },
			description:
				'- Up to 30 mins to capture your best shots\n- 10 edited images\n- Your images delivered within a week via your online gallery',
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
			img: { src: TimBear7, alt: 'todo' },
			// TODO: put these as a nested list
			description:
				'Family Package 1: 25 edited images, suitable for families of up to 6\nFamily Package 2: 35 edited images, suitable for families of up to 8\nFamily Package 3: 50 edited images, suitable for extended and large families',
			pricing: [
				['Family Package 1', 300],
				['Family Package 2', 400],
				['Family Package 3', 500]
			]
		})}
		{@render ServicePricing({
			title: 'Couples Packages',
			img: { src: ImgCouples, alt: 'todo' },
			description:
				'- Packages available with 25-50+ edited images\n- Secret/hidden proposal photography services available\n- Pre-wedding services or on-location shoots',
			// description: 'Couples: 25 edited images\nPropasal: 30-40 edited images, secret/hidden photography services available\nEngagement: 50 edited images',
			pricing: [
				['Couples', 300],
				['Proposal', 500],
				['Engagement', 500]
			]
		})}
		{@render ServicePricing({
			title: 'Weddings',
			img: { src: Trot1, alt: 'todo' },
			description:
				'- Packages availabe from 2 - 12 hours of photography coverage \n- Small elopement packages available, flexible to your budget\n- Sneak peek images delivered within 24 hours',
			pricing: [
				// TODO: Replace with heading, "Starts from $min*"
				['Elopements', 700],
				['Weddings', 1000]
			]
		})}
		{@render ServicePricing({
			title: 'Events',
			img: { src: Events1, alt: 'todo' },
			description:
				'- Packages suitable for parties, corporate bookings and celebrations\n- Packages starting from 1 hour of coverage',
			pricing: [
				['Private Event', 450],
				['Corporate Event', 600]
			]
		})}
		{@render ServicePricing({
			title: 'Animals',
			img: { src: HoneySantos, alt: 'todo' },
			// TODO: Put these as a nested list
			description: 'Pet Package: 20 edited images of pet(s) only\nPet Family Package: 25 edited images of pet(s) and family',
			pricing: [
				['Pet Package', 200],
				['Pet Family Package', 300]
			]
		})}
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<div class="flex flex-col gap-10">
		<h1 class="text-4xl text-primary-500 font-Forum">What to expect when you book with us...</h1>
		<div class="grid grid-cols-[auto_1fr] gap-6 ps-6">
			{#each ['Authentic and candid images that capture your unique story.', 'Support, direction and guidance at every stage, allowing for the photoshoot to flow seamlessly.', 'Prompt delivery of your best images via secure online gallery.', 'A photography team who is understanding and accomodating of any accessiblity requirements.'] as text}
				<Icon.SquareCheckBig class="w-[44px] h-[44px]" />
				<span class="text-xl sm:text-2xl">{text}</span>
			{/each}
		</div>
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<ForMore />
</PageBody>

<BottomBanner />
