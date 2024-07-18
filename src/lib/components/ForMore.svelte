<!--
@component ForMore
@description Section that includes a link to the Instagram and a small amount of recent images.
-->
<script lang="ts">
	import { INSTAGRAM_URL } from '$constants';
	import Carousel from './Carousel.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import ImgWombat1 from '$imgs/_animals-wombat1.jpg?w=500&aspect=1:1&format=webp&any';

	interface Props extends HTMLAttributes<HTMLDivElement> {}
	const { ...rest }: Props = $props();
</script>

<div {...rest}>
	<h2 class="text-center text-3xl text-primary-500 font-Forum">For more</h2>
	<h3 class="text-center text-xl">
		Follow us on Instagram <a href={INSTAGRAM_URL} target="_blank">@lens.ofbrown</a>
	</h3>
	<Carousel class="pt-4" showButtons>
		<!-- {@render imgs()} -->
		<!--
		TODO: fill with imgs that trotty wants.
		Just get 10 most recent and NON-PINNED images and put them here.
		Eventually do this in a script and/or build step.
		-->
		<img src={ImgWombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={ImgWombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={ImgWombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={ImgWombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={ImgWombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={ImgWombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={ImgWombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={ImgWombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
	</Carousel>
</div>

<style lang="postcss">
	.carousel-img-sq {
		@apply w-[300px] px-1 rounded-lg aspect-square object-cover;
	}
</style>
