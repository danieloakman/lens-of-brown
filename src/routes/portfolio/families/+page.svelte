<script lang="ts">
	import Carousel from '$components/Carousel.svelte';
	import Img1 from '$imgs/clients/P5190160.jpg?aspect=1:1&w=700&webp&imagetools';
	import Img2 from '$imgs/clients/P5190601.jpg?aspect=1:1&w=700&webp&imagetools';

	let carousel: Carousel | null = null;
	$effect(() => {
		console.log(carousel);
		setInterval(() => {
			carousel?.right();
		}, 5000);
	});
</script>

<div class="p-4 flex flex-col gap-4">
	<h1 class="text-5xl text-center">Families</h1>
	<Carousel
		bind:this={carousel}
		class="w-[600px] mx-auto rounded-container-token"
		innerClass="rounded-container-token"
	>
		<img src={Img1} alt="Family of 4 amongst Autumn leaves" />
		<img src={Img2} alt="todo" />
	</Carousel>
</div>

<style lang="postcss">
	img {
		@apply snap-center aspect-square object-cover w-[600px];
	}
</style>
