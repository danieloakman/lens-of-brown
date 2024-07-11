<!--
@component ForMore
@description Section that includes a link to the Instagram and a small Carousel of images.
-->
<script lang="ts">
	import { INSTAGRAM_URL } from '$constants';
	import type { Snippet } from 'svelte';
	import Carousel from './Carousel.svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		imgs: Snippet;
	}
	const { imgs, ...rest }: Props = $props();
</script>

<div {...rest}>
	<h2 class="text-center text-2xl text-primary-500 font-Forum">For more</h2>
	<h3 class="text-center text-xl">
		Follow us on Instagram <a href={INSTAGRAM_URL} target="_blank">@lens.ofbrown</a>
	</h3>
	<Carousel class="pt-4" showButtons>
		{@render imgs()}
	</Carousel>
</div>
