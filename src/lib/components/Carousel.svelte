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
	let rootDiv = $state<HTMLDivElement | undefined>(undefined);
	/** Number of pixels halway down the `rootDiv`. */
	const half = $derived.by(() => {
		const rect = rootDiv?.getBoundingClientRect();
		if (!rect) return 0;
		return rect.top + rect.height / 2 - 56 / 2 /* 56px is the width of the side buttons */;
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
<div class={'embla ' + klass} bind:this={rootDiv} {...rest}>
	{#if showButtons && half}
		<!-- svelte-ignore event_directive_deprecated -->
		<button
			in:fade
			class="btn btn-icon absolute z-10 variant-filled-primary text-xl w-14"
			style={`top: ${half}px; left: 10px`}
			on:click={() => emblaApi?.scrollPrev()}
		>
			<Icon.ArrowLeft />
		</button>
	{/if}

	<div
		class={'embla__viewport ' + viewportClass}
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

	{#if showButtons && half}
		<!-- svelte-ignore event_directive_deprecated -->
		<button
			in:fade
			class="btn btn-icon absolute z-20 variant-filled-primary text-xl w-14"
			style={`top: ${half}px; right: 10px`}
			on:click={() => emblaApi?.scrollNext()}
		>
			<Icon.ArrowRight />
		</button>
	{/if}
</div>

<style lang="postcss">
	/* I think because overflow is hidden, rounded borders doesn't work. */
	.embla {
		overflow: hidden;
	}
	.embla__viewport {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
</style>
