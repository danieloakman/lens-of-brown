<!--
@component Carousel
@description A carousel component that uses Embla Carousel and Embla Carousel Svelte.
@note Do not use `<enhanced:img>` here. Use `<img>` instead. Enhanced imgs create a picture element wrapping the img,
which we cannot assign attributes to and breaks the css required for the carousel.
-->
<script lang="ts">
	import type { EmblaCarouselType } from 'embla-carousel';
	import emblaCarouselSvelte, { type EmblaCarouselSvelteType } from 'embla-carousel-svelte';
	import Autoplay, { type AutoplayOptionsType } from 'embla-carousel-autoplay';
	import type { HTMLAttributes } from 'svelte/elements';
	import { untrack, type Snippet } from 'svelte';
	import { Icon } from '$lib/icons';
	import { fade } from 'svelte/transition';

	type EmblaParams = Parameters<NonNullable<EmblaCarouselSvelteType['update']>>[number];
	let emblaApi = $state<EmblaCarouselType | undefined>();
	let slides = $state<{ inView: number[]; notInView: number[] }>({ inView: [1], notInView: [1] });
	const canScrollNext = $derived.by(() => slides.notInView.length && emblaApi?.canScrollNext());
	const canScrollPrev = $derived.by(() => slides.notInView.length && emblaApi?.canScrollPrev());

	$effect(() => {
		const cb = (e: EmblaCarouselType) =>
			untrack(() => {
				slides = { inView: e.slidesInView(), notInView: e.slidesNotInView() };
			});
		emblaApi?.on('scroll', cb);
		return () => {
			emblaApi?.off('scroll', cb);
		};
	});

	const {
		class: klass = '',
		viewportClass = '',
		containerClass = '',
		loop = false,
		autoplay,
		showButtons = false,
		children,
		...rest
	}: HTMLAttributes<HTMLDivElement> & {
		children?: Snippet;
		loop?: boolean;
		autoplay?: AutoplayOptionsType;
		showButtons?: boolean;
		viewportClass?: string;
		containerClass?: string;
	} = $props();

	const plugins: EmblaParams['plugins'] = [];
	if (autoplay) plugins.push(Autoplay(autoplay));
</script>

<!-- svelte-ignore event_directive_deprecated -->
<div class={'embla ' + klass} {...rest}>
	{#if showButtons && canScrollPrev}
		<div class="inner me-auto z-10 ps-2">
			<button
				in:fade
				out:fade
				class="btn-side"
				on:click={() => emblaApi?.scrollPrev()}
				aria-label="Carousel left button"
			>
				<Icon.ArrowLeft />
			</button>
		</div>
	{/if}

	<div
		class={'inner embla__viewport ' + viewportClass}
		use:emblaCarouselSvelte={{ options: { loop }, plugins }}
		on:emblaInit={(event) => {
			emblaApi = event.detail;
		}}
	>
		<div class={'embla__container ' + containerClass}>
			{#if children}
				{@render children()}
			{/if}
		</div>
	</div>

	{#if showButtons && canScrollNext}
		<div class="inner ms-auto z-10 pe-2">
			<button
				in:fade
				out:fade
				class="btn-side"
				on:click={() => emblaApi?.scrollNext()}
				aria-label="Carousel right button"
			>
				<Icon.ArrowRight />
			</button>
		</div>
	{/if}
</div>

<style lang="postcss">
	/* I think because overflow is hidden, rounded borders doesn't work. */
	.embla {
		display: grid;
		place-items: center;
		grid-template-areas: 'inner-div';
	}
	.inner {
		grid-area: inner-div;
	}
	.embla__viewport {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}

	.btn-side {
		@apply btn btn-icon variant-filled-primary text-xl w-12 opacity-75;
	}
</style>
