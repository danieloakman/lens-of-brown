<script lang="ts">
	import Carousel from '$components/Carousel.svelte';
	import Img1 from '$imgs/clients/P5190160.jpg?aspect=1:1&w=700&webp&imagetools';
	import Img2 from '$imgs/clients/P5190601.jpg?aspect=1:1&w=700&webp&imagetools';
</script>

<h1 class="text-5xl text-center">Families</h1>
<Carousel class="w-[600px] mx-auto">
	<img src={Img1} alt="Family of 4 amongst Autumn leaves" />
	<img src={Img2} alt="todo" />
</Carousel>

<style lang="postcss">
	img {
		@apply snap-center rounded-container-token aspect-square object-cover w-[600px];
	}
</style>
