<script lang="ts">
	import emblaCarouselSvelte, { type EmblaCarouselSvelteType } from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	type EmblaParams = Parameters<NonNullable<EmblaCarouselSvelteType['update']>>[number];

	const {
		class: klass = '',
		loop = false,
		autoplay = false,
		children,
		...rest
	}: HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		loop?: boolean;
		autoplay?: boolean;
	} = $props();

	const plugins: EmblaParams['plugins'] = [];
	if (autoplay) plugins.push(Autoplay());
</script>

<div class={'embla ' + klass} use:emblaCarouselSvelte={{ options: { loop }, plugins }} {...rest}>
	<div class="embla__container">
		{#if children}
			{@render children()}
		{/if}
		<!-- <div class="embla__slide"></div>
		<div class="embla__slide">Slide 2</div>
		<div class="embla__slide">Slide 3</div> -->
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	/*.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}*/
</style>
