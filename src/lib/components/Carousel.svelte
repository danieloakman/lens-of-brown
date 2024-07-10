<script lang="ts">
	import type { EmblaCarouselType } from 'embla-carousel';
	import emblaCarouselSvelte, { type EmblaCarouselSvelteType } from 'embla-carousel-svelte';
	import Autoplay, { type AutoplayOptionsType } from 'embla-carousel-autoplay';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { Icon } from '$lib/icons';
	import { fade } from 'svelte/transition';

	type EmblaParams = Parameters<NonNullable<EmblaCarouselSvelteType['update']>>[number];
	let emblaApi: EmblaCarouselType | undefined;

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
	{#if showButtons}
		<div class="inner me-auto z-10 ps-2">
			<button
				in:fade
				class="btn btn-icon variant-filled-primary text-xl w-14"
				on:click={() => emblaApi?.scrollPrev()}
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

	{#if showButtons}
		<div class="inner ms-auto z-10 pe-2">
			<button
				in:fade
				class="btn btn-icon variant-filled-primary text-xl w-14"
				on:click={() => emblaApi?.scrollNext()}
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
</style>
