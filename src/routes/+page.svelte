<script lang="ts">
	import Carousel from '$components/Carousel.svelte';
	import Divider from '$components/Divider.svelte';
	import BottomBanner from '$components/BottomBanner.svelte';
	import Testimonial from '$components/Testimonial.svelte';
	import ForMore from '$components/ForMore.svelte';
	import PageBody from '$components/PageBody.svelte';

	import ImgWombat1 from '$imgs/_animals-wombat1.jpg?format=webp&w=600&any';
	import ImgShannonBrodbeck1 from '$imgs/_families-shannon_brodbeck1.jpg?format=webp&w=600&any';
	import ImgEvents2 from '$imgs/_events-sydney_opera_house1.jpg?format=webp&w=600&any';
	import ImgLandscape2 from '$imgs/landscapes-great_ocean_road.jpg?format=webp&w=600&any';
	import ImgBiancaCherie4 from '$imgs/portraits-bianca_cherie4.jpg?format=webp&w=600&any';
	import { scrollIntoView } from '$utils';
</script>

{#snippet divider()}
	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />
{/snippet}

<Carousel
	class="text-center pt-20 h-min-[720px]"
	loop
	showButtons
	autoplay={{ stopOnMouseEnter: true, delay: 5000 }}
>
	<img use:scrollIntoView src={ImgWombat1} class="carousel-img" alt="A closeup of a Wombat" />
	<img
		src={ImgShannonBrodbeck1}
		class="carousel-img"
		alt="A family portrait of 5 smiling in the sun"
	/>
	<img src={ImgEvents2} class="carousel-img" alt="A woman infront of the Sydney Opera House" />
	<img src={ImgLandscape2} class="carousel-img" alt="The great ocean road, Australia" />
	<img src={ImgBiancaCherie4} class="carousel-img" alt="A boy smiling, standing and having fun" />
</Carousel>

<PageBody class="gap-20 py-20">
	<div class="w-[90%] mx-auto max-w-[500px]">
		<div class="flex flex-col gap-6">
			<h1 class="text-4xl text-primary-500 font-Forum">Creating snaps for keeps.</h1>
			<p class="text-lg font-Forum">
				Wollongong based photography, servicing Greater Sydney and beyond. Candid, timeless images
				to capture your unique story.
			</p>
		</div>
	</div>

	<div class="hidden sm:block">
		{@render divider()}
	</div>

	<!-- TODO: try to closely copy what zenfolio is doing here with the grid. -->
	<!-- <div class="hidden sm:grid md:grid-cols-4 lg:grid-cols-5 gap-5 self-center h-[1000px] img-grid">
		<img src={ImgLandscape1} class="col-span-2" />
		<img src={ImgLandscape1} class="col-span-1" />
		<img src={ImgLandscape1} class="col-span-1" />
		<img src={ImgLandscape1} class="col-span-1" />
		<img src={ImgLandscape1} class="col-span-1" />
		<img src={ImgLandscape1} class="col-span-2" />
		<img src={ImgLandscape1} class="col-span-1" />
		<img src={ImgLandscape1} class="col-span-1" />
		<img src={ImgLandscape1} class="col-span-1" />
	</div> -->

	<!-- {@render divider()} -->

	<Testimonial
		quote={"Sheridan and Daniel from Lens of Brown were fantastic to work with. We organised a family shoot with them and were a bit worried about it due to having no previous experiences of family shoots and the kids being a bit younger. We shouldn't have worried as both Sheridan and Daniel were great in explaining what they were trying to get in each photo, setting up environments that worked well for the kids and getting creative with prompts and distractions to help make them smile. Their choice of location and use of natural lighting and environment was also perfect. We got some amazing photos that we will cherish forever and couldn't have made it work without them! Highly recommend to anyone looking to get a family shoot!"}
		author={'Tim - Client'}
	/>

	{@render divider()}

	<ForMore />
</PageBody>

<BottomBanner />

<style lang="postcss">
	.carousel-img {
		aspect-ratio: 0.8/1;
		@apply w-[600px] px-1 rounded-lg object-cover;
	}

	/* .img-grid > img {
		height: 300px;
		object-fit: cover;
	} */
</style>
