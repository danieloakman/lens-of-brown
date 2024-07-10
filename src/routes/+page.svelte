<script lang="ts">
	import Carousel from '$components/Carousel.svelte';
	import Wombat1 from '$imgs/wombat1.jpg?w=750&imagetools';
	import ShannonBrodbeck1 from '$imgs/shannon_brodbeck1.jpg?w=750&imagetools';
	import Events2 from '$imgs/events2.jpg?w=750&imagetools';
	import Landscape2 from '$imgs/landscape2.jpg?w=750&imagetools';
	import BiancaCherie4 from '$imgs/bianca_cherie4.jpg?w=750&imagetools';
</script>

<Carousel
	class="text-center py-20"
	loop={true}
	autoplay={{ stopOnMouseEnter: true, delay: 5000 }}
	showButtons={true}
>
	<img src={Wombat1} class="carousel-img" />
	<img src={ShannonBrodbeck1} class="carousel-img" />
	<img src={Events2} class="carousel-img" />
	<img src={Landscape2} class="carousel-img" />
	<img src={BiancaCherie4} class="carousel-img" />
</Carousel>

<!--
TODO: main blurb

Creating snaps for keeps.

Wollongong based photography, servicing Greater Sydney and beyond. Candid, timeless images to capture your uniqueness.

-->

<!--
TODO: put bottom banner here with social icon buttons and copyright. Remove "Cookie Settings" & "User agreement" though.
Make the "Lens of Brown" title here cream and not brown.
Remove the many pictures section on mobile.
-->

<!-- <div class="py-32"></div> -->

<!-- <Carousel innerClass="gap-2 pt-32">
	{#snippet children()}
		<img src={Wombat1} class="carousel-img" />
		<img src={Wombat1} class="carousel-img" />
		<img src={Wombat1} class="carousel-img" />
		<img src={Wombat1} class="carousel-img" />
		<img src={Wombat1} class="carousel-img" />
	{/snippet}
</Carousel> -->

<!-- <Carousel
	imgs={[
		{
			src: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg',
			alt: 'A beautiful lake'
		},
		{
			src: 'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg',
			alt: 'A beautiful green plain by the water'
		},
		// {
		// 	src: 'https://thecamerastore.com/cdn/shop/articles/GINAYEOLANDSCAPE-1_800x.jpg?v=1687296669',
		// 	alt: 'A beautiful mountain with pine trees and a river'
		// },
		// {
		// 	src: 'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg?w=1436&h=1078',
		// 	alt: 'A road and sunset'
		// },
		{
			src: 'https://photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg',
			alt: 'A desert'
		}
	]}
/> -->

<style lang="postcss">
	.carousel-img {
		aspect-ratio: 0.8/1;
		@apply w-[600px] px-2;
	}
</style>
