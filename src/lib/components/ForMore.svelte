<!--
@component ForMore
@description Section that includes a link to the Instagram and a small amount of recent images.
-->
<script lang="ts">
	import { INSTAGRAM_URL } from '$constants';
	import Carousel from './Carousel.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import Wombat1 from '$imgs/wombat1.jpg?url&w=400&aspect=1:1&imagetools';

	interface Props extends HTMLAttributes<HTMLDivElement> {}
	const { class: klass = '', ...rest }: Props = $props();
</script>

<div class={'mx-5 ' + klass} {...rest}>
	<h2 class="text-center text-2xl text-primary-500 font-Forum">For more</h2>
	<h3 class="text-center text-xl">
		Follow us on Instagram <a href={INSTAGRAM_URL} target="_blank">@lens.ofbrown</a>
	</h3>
	<Carousel class="pt-4" showButtons>
		<!-- {@render imgs()} -->
		<!-- TODO: fill with imgs that trotty wants -->
		<img src={Wombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={Wombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={Wombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={Wombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={Wombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={Wombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={Wombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
		<img src={Wombat1} class="carousel-img-sq" loading="lazy" alt="todo" />
	</Carousel>
</div>

<style lang="postcss">
	.carousel-img-sq {
		@apply w-[300px] px-1 rounded-lg aspect-square object-cover;
	}
</style>
