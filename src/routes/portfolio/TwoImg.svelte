<!-- Displays one image, then on hover or click, display another. -->
<script lang="ts">
	import { noop, omit } from 'js-utils';
	import { quintOut } from 'svelte/easing';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { crossfade } from 'svelte/transition';

	interface Img {
		src: string;
		alt: string;
	}
	const {
		imgs,
		containerClass,
		transitionOn = 'hover',
		fadeDurationMs = 500,
		...rest
	}: Omit<HTMLImgAttributes, 'src' | 'alt'> & {
		imgs: [Img, Img];
		containerClass?: string;
		transitionOn?: 'hover';
		fadeDurationMs?: number;
	} = $props();

	let i = $state(0);
	const img = $derived(imgs.at(i % imgs.length));
	// const img = $derived.by(() => {
	// 	if (transitionOn === 'hover') return hover ? imgs[1] : imgs[0];
	// 	console.warn(`"${transitionOn}" is not a valid transitionOn value`);
	// 	return imgs[0];
	// });

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
	{#if i === 0}
		<img
			in:send={{ key: img }}
			out:receive={{ key: img }}
			class={'inner ' + rest.class}
			{...img}
			{...omit(rest, 'class')}
		/>
	{:else}
		<img
			in:send={{ key: img }}
			out:receive={{ key: img }}
			class={'inner ' + rest.class}
			{...img}
			{...omit(rest, 'class')}
		/>
	{/if}
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
