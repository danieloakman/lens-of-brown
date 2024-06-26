<script lang="ts">
	import Carousel from '$components/Carousel.svelte';
	// import { CLIENT_IMGS } from '$lib';

	// @ts-expect-error
	import Img1 from '$imgs/clients/P5190160.jpg?enhanced&aspect=1:1';
	// @ts-expect-error
	import Img2 from '$imgs/clients/P5190601.jpg?enhanced&aspect=1:1';
	import Img3 from '$imgs/clients/P5190160.jpg?url';
	import Img4 from '$imgs/clients/P5190601.jpg?url';
	// import Img1 from 'imgs/client/P5190160.jpg';
	// import Img2 from 'imgs/client/P5190601.jpg';
	// const imgs = [
	// 	{ src: Img1, alt: 'Family of 4 amongst Autumn leaves.' },
	// 	{ src: Img2, alt: 'asd' }
	// ];
	let img1: HTMLImageElement;
	let img2: HTMLImageElement;
</script>

<h1 class="text-5xl text-center">Families</h1>
<Carousel class="w-[800px] h-[800px] mx-auto">
	{#snippet imgs()}
		<!-- <img src={Img3} class="enhanced-img" />
		<img src={Img4} class="enhanced-img" /> -->

		<enhanced:img
			bind:this={img1}
			src={Img1}
			alt="Family of 4 amongst Autumn leaves"
			class="enhanced-img"
		></enhanced:img>
		<enhanced:img bind:this={img2} src={Img2} alt="todo" class="enhanced-img px-auto"
		></enhanced:img>
	{/snippet}
</Carousel>

<style lang="postcss">
	.enhanced-img {
		@apply snap-center rounded-container-token aspect-square object-cover w-[200px];
	}
</style>
