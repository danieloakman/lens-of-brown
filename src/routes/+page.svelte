<script lang="ts">
	import Carousel from '$components/Carousel.svelte';
	import Divider from '$components/Divider.svelte';
	import BottomBanner from '$components/BottomBanner.svelte';
	import Testimonial from '$components/Testimonial.svelte';
	import { range } from 'iteragain';

	import Wombat1 from '$imgs/wombat1.jpg?w=750&imagetools';
	import ShannonBrodbeck1 from '$imgs/shannon_brodbeck1.jpg?w=750&imagetools';
	import Events2 from '$imgs/events2.jpg?w=750&imagetools';
	import Landscape2 from '$imgs/landscape2.jpg?w=750&imagetools';
	import BiancaCherie4 from '$imgs/bianca_cherie4.jpg?w=750&imagetools';
	import ForMore from '$components/ForMore.svelte';
	import PageBody from '$components/PageBody.svelte';
</script>

{#snippet divider()}
	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />
{/snippet}

<Carousel class="text-center pt-20" loop showButtons autoplay={{ stopOnMouseEnter: true, delay: 5000 }}>
	<img src={Wombat1} class="carousel-img" alt="A closeup of a Wombat" />
	<img
		src={ShannonBrodbeck1}
		class="carousel-img"
		alt="A family portrait of 5 smiling in the sun"
	/>
	<img src={Events2} class="carousel-img" alt="A woman infront of the Sydney Opera House" />
	<img src={Landscape2} class="carousel-img" alt="The great ocean road, Australia" />
	<img src={BiancaCherie4} class="carousel-img" alt="A boy smiling, standing and having fun" />
</Carousel>

<PageBody class="gap-20 py-20">
	<div class="w-[90%] mx-auto max-w-[500px]">
		<div class="flex flex-col gap-6">
			<h2 class="text-4xl text-primary-500 font-Forum">Creating snaps for keeps.</h2>
			<p class="text-lg font-Forum">
				Wollongong based photography, servicing Greater Sydney and beyond. Candid, timeless images
				to capture your unique story.
			</p>
		</div>
	</div>

	<div class="hidden sm:block">
		{@render divider()}
	</div>

	<div class="hidden sm:grid grid-cols-3 px-5 gap-10">
		{#each range(6) as i}
			<div class="card w-full h-[250px] text-center">Pics go here</div>
		{/each}
	</div>

	{@render divider()}

	<Testimonial text={"Insert Tim's testimonial"} author={'Tim'} />

	{@render divider()}

	<ForMore />
</PageBody>

<BottomBanner />

<style lang="postcss">
	.carousel-img {
		aspect-ratio: 0.8/1;
		@apply w-[600px] px-1 rounded-lg object-cover;
	}
</style>
