<script lang="ts">
	import type { BasicImg } from '$types';
	import TwoImgs from '$components/TwoImgs.svelte';
	import Divider from '$components/Divider.svelte';
	import { Icon } from '$lib/icons';
	import BottomBanner from '$components/BottomBanner.svelte';
	import Testimonial from '$components/Testimonial.svelte';
	import ForMore from '$components/ForMore.svelte';
	import PageBody from '$components/PageBody.svelte';
	import ShannonBrodbeck1 from '$imgs/_families-shannon_brodbeck1.jpg?url&w=1000&aspect=1:1&any';
	import TimBear4 from '$imgs/_families-tim_bear6.jpg?url&w=1000&aspect=1:1&any';
	import Wombat1 from '$imgs/_animals-wombat1.jpg?url&w=1000&aspect=1:1&any';
	import HoneySantos4 from '$imgs/_animals-honey_santos5.jpg?url&w=1000&aspect=1:1&any';
	import ScottChurchill1 from '$imgs/couples-scott_churchill1.jpg?url&w=1000&aspect=1:1&any';
	import DanAndTrot2 from '$imgs/_couples-dan_trot6.jpg?url&w=1000&aspect=1:1&any';
	import TrotPortrait1 from '$imgs/portraits-trot1.jpg?url&w=1000&aspect=1:1&any';
	import BiancaCherie4 from '$imgs/portraits-bianca_cherie4.jpg?url&w=1000&aspect=1:1&any';
	import Landscape1 from '$imgs/landscapes-great_ocean_road.jpg?url&w=1000&aspect=1:1&any';
	import Landscape2 from '$imgs/_landscapes-montague_island.jpg?url&w=1000&aspect=1:1&any';
	import Events1 from '$imgs/_events-sydney_opera_house1.jpg?url&w=1000&aspect=1:1&any';
	import Events2 from '$imgs/events-canberra_balloons.jpg?url&w=1000&aspect=1:1&any';
</script>

<!-- TODO: make sure all light colored titles use the primary darker brown instead. -->

{#snippet divider()}
	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />
{/snippet}

{#snippet portfolioSection({
	title,
	subheading,
	href,
	imgs: [imgA, imgB]
}: {
	title: string;
	subheading: string;
	href: string;
	imgs: [BasicImg, BasicImg];
})}
	<div class="flex flex-col gap-2 bg-surface-200 rounded-container-token max-w-[600px]">
		<a {href}>
			<TwoImgs
				class="rounded-tl-container-token rounded-tr-container-token max-h-[600px] max-w-[600px] aspect-square object-cover"
			>
				{#snippet img1({ send, receive })}
					<img in:send={{ key: imgA }} out:receive={{ key: imgA }} {...imgA} />
				{/snippet}
				{#snippet img2({ send, receive })}
					<img in:send={{ key: imgB }} out:receive={{ key: imgB }} {...imgB} />
				{/snippet}
			</TwoImgs>
		</a>
		<div class="flex flex-col px-6 py-10">
			<h2 class="text-2xl font-Forum text-primary-500 pb-3">{title}</h2>
			<h3 class="text-xl pb-12">{subheading}</h3>
			<a class="flex flex-row" {href}>See More <Icon.ArrowUpRight class="w-2" /></a>
		</div>
	</div>
{/snippet}

<PageBody class="gap-20 py-20">
	<h3 class="text-center text-4xl font-Forum text-primary-500">Browse our Portfolio</h3>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 self-center gap-3">
		{@render portfolioSection({
			title: 'Families',
			href: '/portfolio/families',
			subheading: '+ siblings & little ones',
			imgs: [
				{
					src: ShannonBrodbeck1,
					alt: 'Family of 5 ...' // tODO: edit this
				},
				{
					src: TimBear4,
					alt: 'todo'
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
					alt: ''
				},
				{ src: BiancaCherie4, alt: 'todo' }
			]
		})}
		{@render portfolioSection({
			title: 'Landscapes',
			subheading: '+ cities and nature',
			href: '/portfolio/landscapes',
			imgs: [
				{
					src: Landscape2,
					alt: 'todo'
				},
				{
					src: Landscape1,
					alt: 'todo'
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
					alt: 'todo'
				},
				{
					src: HoneySantos4,
					alt: 'todo'
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
					alt: 'todo'
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
					alt: 'todo'
				},
				{
					src: Events1,
					alt: 'todo'
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

	<Testimonial author="Somebody" quote="todo" />

	{@render divider()}

	<ForMore />
</PageBody>

<BottomBanner />
