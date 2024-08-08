<script lang="ts">
	import type { BasicImg } from '$types';
	import TwoImgs from '$components/TwoImgs.svelte';
	import Divider from '$components/Divider.svelte';
	import BottomBanner from '$components/BottomBanner.svelte';
	import Testimonial from '$components/Testimonial.svelte';
	import ForMore from '$components/ForMore.svelte';
	import PageBody from '$components/PageBody.svelte';
	import ShannonBrodbeck1 from '$imgs/_families-shannon_brodbeck1.jpg?format=webp&w=1000&aspect=1:1&any';
	import TimBear4 from '$imgs/_families-tim_bear6.jpg?format=webp&w=1000&aspect=1:1&any';
	import Wombat1 from '$imgs/_animals-wombat1.jpg?format=webp&w=1000&aspect=1:1&any';
	import HoneySantos4 from '$imgs/_animals-honey_santos5.jpg?format=webp&w=1000&aspect=1:1&any';
	import ScottChurchill1 from '$imgs/couples-scott_churchill1.jpg?format=webp&w=1000&aspect=1:1&any';
	import DanAndTrot2 from '$imgs/_couples-dan_trot6.jpg?format=webp&w=1000&aspect=1:1&any';
	import TrotPortrait1 from '$imgs/portraits-trot1.jpg?format=webp&w=1000&aspect=1:1&any';
	import BiancaCherie4 from '$imgs/portraits-bianca_cherie4.jpg?format=webp&w=1000&aspect=1:1&any';
	import Landscape1 from '$imgs/landscapes-great_ocean_road.jpg?format=webp&w=1000&aspect=1:1&any';
	import Landscape2 from '$imgs/_landscapes-montague_island.jpg?format=webp&w=1000&aspect=1:1&any';
	import Events1 from '$imgs/_events-sydney_opera_house1.jpg?format=webp&w=1000&aspect=1:1&any';
	import Events2 from '$imgs/events-canberra_balloons.jpg?format=webp&w=1000&aspect=1:1&any';
	import { scrollIntoView } from '$lib';
</script>

{#snippet divider()}
	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />
{/snippet}

{#snippet portfolioSection({
	title,
	subheading,
	href,
	imgs
}: {
	title: string;
	subheading: string;
	href: string;
	imgs: [BasicImg, BasicImg];
})}
	<div class="flex flex-col gap-2 bg-surface-200 rounded-container-token max-w-[600px]">
		<a {href}>
			<TwoImgs
				class="max-h-[600px] max-w-[600px] "
				imgClass="rounded-tl-container-token rounded-tr-container-token aspect-square object-cover"
				{imgs}
			/>
		</a>
		<div class="flex flex-col px-6 py-10">
			<h2 class="text-2xl font-Forum text-primary-500 pb-3">{title}</h2>
			<h3 class="text-xl pb-12">{subheading}</h3>
			<a class="flex flex-row" {href}>See More... <!-- <Icon.ArrowUpRight class="w-2" /> --></a>
		</div>
	</div>
{/snippet}

<PageBody class="gap-20 py-20">
	<h3 use:scrollIntoView class="text-center text-4xl font-Forum text-primary-500">
		Browse our Portfolio
	</h3>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 self-center gap-3">
		{@render portfolioSection({
			title: 'Families',
			href: '/portfolio/families',
			subheading: '+ siblings & little ones',
			imgs: [
				{
					src: ShannonBrodbeck1,
					alt: 'Family of 5 standing in the sun, smiling. Parents are behind the kids. The kids are in front, with the oldest in the middle.'
				},
				{
					src: TimBear4,
					alt: 'Family of 4 standing in the sun infront of an autumn tree. The younger boy is smiling and having fun being cheeky.'
				}
			]
		})}
		{@render portfolioSection({
			title: 'Portraits',
			href: '/portfolio/portraits',
			subheading: '+ headshots',
			imgs: [
				{
					src: TrotPortrait1,
					alt: "A lovely portrait of a beautiful blonde woman wearing glasses. She's wearing a black top infront of a sunny and forested background."
				},
				{ src: BiancaCherie4, alt: 'A toddler boy smiling in a green grassy scene.' }
			]
		})}
		{@render portfolioSection({
			title: 'Landscapes',
			subheading: '+ cities and nature',
			href: '/portfolio/landscapes',
			imgs: [
				{
					src: Landscape2,
					alt: 'Montague island, with grassy hills and the ocean in the background.'
				},
				{
					src: Landscape1,
					alt: 'The Great Ocean Road, with the ocean on the left and a cliff on the right.'
				}
			]
		})}
		{@render portfolioSection({
			title: 'Animals',
			subheading: '+ pets & natives',
			href: '/portfolio/animals',
			imgs: [
				// TODO: Swap wombat1 and honey_santos4 in here:
				{
					src: Wombat1,
					alt: 'A closeup portrait of a wombat, looking off the left. Extremely cute.'
				},
				{
					src: HoneySantos4,
					alt: 'A golden fluffy dog about to leap and start playing and runnign around.'
				}
			]
		})}
		{@render portfolioSection({
			title: 'Couples',
			subheading: '+ engagements & proposals',
			href: '/portfolio/couples',
			imgs: [
				{
					src: DanAndTrot2,
					alt: 'A couple standing in front of a grassy scene of pine trees. A golden shining sun on the right. Both are very happy and in love.'
				},
				{
					src: ScottChurchill1,
					alt: 'A couple in front of a lighthouse, looking at each other.'
				}
			]
		})}
		{@render portfolioSection({
			title: 'Events',
			subheading: '+ special occasions',
			href: '/portfolio/events',
			imgs: [
				{
					src: Events2,
					alt: '4 hot air balloons in the sky, with the moon rising in the background.'
				},
				{
					src: Events1,
					alt: 'The Sydney Opera House, with a woman standing infront of it.'
				}
			]
		})}
		<!-- {@render portfolioSection({
			title: 'Weddings',
			href: '/portfolio/weddings',
			subheading: '+ elopements',
			imgs: [
				{
					src: ShannonBrodbeck1,
					alt: 'todo'
				},
				{
					src: TimBear4,
					alt: 'todo'
				}
			]
		})} -->
	</div>

	{@render divider()}

	<Testimonial
		author="Jill - Client"
		quote="We absolutely loved our photos from Lens of Brown! Their use of creative prompts gave us such fun, natural photos of our family. The photoshoot was so easy and we didn't have to worry about a thing."
	/>

	{@render divider()}

	<ForMore />
</PageBody>

<BottomBanner />
