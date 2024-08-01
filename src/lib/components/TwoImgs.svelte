<!-- Displays one image, then on hover or click, display another. -->
<script lang="ts">
	import type { BasicImg } from '$types';
	import { coerceHash, noop, raise } from 'js-utils';
	import { quintOut } from 'svelte/easing';
	import type { HTMLAttributes } from 'svelte/elements';
	import { crossfade } from 'svelte/transition';
	import OverlayChildren from './OverlayChildren.svelte';

	const {
		imgs,
		class: klass = '',
		imgClass = '',
		transitionOn = 'hover',
		fadeDurationMs = 500,
		delayMs = 0,
		...rest
	}: HTMLAttributes<HTMLDivElement> & {
		imgs: [BasicImg, BasicImg];
		imgClass?: string;
		transitionOn?: 'hover';
		fadeDurationMs?: number;
		delayMs?: number;
	} = $props();

	let i = $state(0);
	const img = $derived(imgs.at(i % imgs.length) ?? raise(`No image at index ${i}`));
	const key = coerceHash(imgs);

	const [send, receive] = crossfade({
		duration: fadeDurationMs,
		easing: quintOut,
		delay: delayMs
	});
</script>

<OverlayChildren
	class={klass}
	role="img"
	onfocus={noop}
	onmouseover={() => {
		if (transitionOn === 'hover') i = 1;
	}}
	onmouseleave={() => {
		if (transitionOn === 'hover') i = 0;
	}}
	{...rest}
>
	{#if i === 0}
		<img in:send={{ key }} out:receive={{ key }} {...img} class={imgClass} />
	{:else}
		<img in:send={{ key }} out:receive={{ key }} {...img} class={imgClass} />
	{/if}
</OverlayChildren>
