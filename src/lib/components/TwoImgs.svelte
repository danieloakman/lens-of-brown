<!-- Displays one image, then on hover or click, display another. -->
<script lang="ts">
	import { noop, omit } from 'js-utils';
	import type { Snippet } from 'svelte';
	import { quintOut } from 'svelte/easing';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { crossfade, type TransitionConfig } from 'svelte/transition';

	type ImgSnippet = Snippet<
		[{ send: ReturnType<typeof crossfade>[0]; receive: ReturnType<typeof crossfade>[0] }]
	>;

	const {
		img1,
		img2,
		containerClass,
		transitionOn = 'hover',
		fadeDurationMs = 500,
		...rest
	}: Omit<HTMLImgAttributes, 'src' | 'alt'> & {
		img1: ImgSnippet;
		img2: ImgSnippet;
		containerClass?: string;
		transitionOn?: 'hover';
		fadeDurationMs?: number;
	} = $props();

	let i = $state(0);

	const [send, receive] = crossfade({
		duration: fadeDurationMs,
		easing: quintOut
	});
</script>

<div
	class={'container ' + containerClass}
	role="img"
	onfocus={noop}
	onmouseover={() => {
		if (transitionOn === 'hover') i = 1;
	}}
	onmouseleave={() => {
		if (transitionOn === 'hover') i = 0;
	}}
>
	<div class={'inner ' + rest.class}>
		{#if i === 0}
			{@render img1({ send, receive })}
		{:else}
			{@render img2({ send, receive })}
		{/if}
	</div>
</div>

<style lang="postcss">
	.container {
		display: grid;
		place-items: center;
		grid-template-areas: 'inner-div';
	}

	.inner {
		grid-area: inner-div;
	}
</style>
