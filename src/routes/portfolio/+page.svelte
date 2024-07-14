<script lang="ts">
	import type { BasicImg } from '$types';
	import TwoImg from './TwoImg.svelte';
	import Divider from '$components/Divider.svelte';
	import { Icon } from '$lib/icons';
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
	import BottomBanner from '$components/BottomBanner.svelte';
	import Testimonial from '$components/Testimonial.svelte';
	import ForMore from '$components/ForMore.svelte';
</script>

<!-- TODO: make sure all light colored titles use the primary darker brown instead. -->

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
	<div class="flex flex-col gap-2 bg-surface-200 rounded-container-token">
		<a {href}>
			<TwoImg
				class="rounded-tl-container-token rounded-tr-container-token w-[400px] aspect-square object-cover"
				{imgs}
			/>
		</a>
		<div class="flex flex-col px-6 py-10">
			<h2 class="text-2xl font-Forum text-primary-500 pb-3">{title}</h2>
			<h3 class="text-xl pb-12">{subheading}</h3>
			<a class="flex flex-row" {href}>See More <Icon.ArrowUpRight class="w-2" /></a>
		</div>
	</div>
{/snippet}

<div class="flex flex-col gap-20 pt-20 mx-auto">
	<h3 class="text-center text-4xl font-Forum text-primary-500">Browse our Portfolio</h3>

	<div class="grid grid-cols-1 min-[820px]:grid-cols-2 min-[1240px]:grid-cols-3 self-center gap-3">
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

	<Testimonial author="Somebody" text="todo" />

	{@render divider()}

	<ForMore >
		{#snippet imgs()}
			<!-- TODO: fill with imgs that trotty wants -->
			<img src={Wombat1} class="carousel-img-sq" loading="lazy" />
			<img src={Wombat1} class="carousel-img-sq" loading="lazy" />
			<img src={Wombat1} class="carousel-img-sq" loading="lazy" />
			<img src={Wombat1} class="carousel-img-sq" loading="lazy" />
			<img src={Wombat1} class="carousel-img-sq" loading="lazy" />
			<img src={Wombat1} class="carousel-img-sq" loading="lazy" />
			<img src={Wombat1} class="carousel-img-sq" loading="lazy" />
			<img src={Wombat1} class="carousel-img-sq" loading="lazy" />
		{/snippet}
	</ForMore>

	<BottomBanner />
</div>

<style lang="postcss">
	.carousel-img-sq {
		@apply w-[300px] px-1 rounded-lg aspect-square object-cover;
	}
</style>
