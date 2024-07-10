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
</script>

{#snippet divider()}
	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />
{/snippet}

<div class="flex flex-col gap-20 pt-20">
	<Carousel
		class="text-center"
		loop={true}
		autoplay={{ stopOnMouseEnter: true, delay: 5000 }}
		showButtons={true}
	>
		<img src={Wombat1} class="carousel-img" alt="A closeup of a Wombat" />
		<img src={ShannonBrodbeck1} class="carousel-img" alt="A family portrait of 5 smiling in the sun" />
		<img src={Events2} class="carousel-img" alt="A woman infront of the Sydney Opera House" />
		<img src={Landscape2} class="carousel-img" alt="The great ocean road, Australia" />
		<img src={BiancaCherie4} class="carousel-img" alt="A boy smiling, standing and having fun" />
	</Carousel>

	<div class="w-[90%] mx-auto max-w-[500px]">
		<div class="flex flex-col gap-6">
			<h2 class="text-4xl text-primary-500 font-Forum">Creating snaps for keeps.</h2>
			<p class="text-lg font-Forum">
				Wollongong based photography, servicing Greater Sydney and beyond. Candid, timeless images
				to capture your unique story.
			</p>
		</div>
	</div>

	{@render divider()}

	<div class="grid grid-cols-3 px-10 gap-10">
		{#each range(6) as i}
			<div class="card w-full h-[250px] text-center">Pics go here</div>
		{/each}
	</div>

	{@render divider()}

	<Testimonial text={"Insert Tim's testimonial"} author={'Tim'} />

	<BottomBanner />
</div>

<!--
TODO: put bottom banner here with social icon buttons and copyright. Remove "Cookie Settings" & "User agreement" though.
Make the "Lens of Brown" title here cream and not brown.
Remove the many pictures section on mobile.
-->

<style lang="postcss">
	.carousel-img {
		aspect-ratio: 0.8/1;
		@apply w-[600px] px-1 rounded-lg;
	}
</style>
