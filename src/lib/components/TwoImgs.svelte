<!-- Displays one image, then on hover or click, display another. -->
<script lang="ts">
	import { noop } from 'js-utils';
	import type { HTMLAttributes } from 'svelte/elements';

	import type { BasicImg } from '$types';

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
	const fadeStyle = $derived(`transition: opacity ${fadeDurationMs}ms ease-out ${delayMs}ms;`);
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
	<img {...imgs[0]} class={imgClass} style="opacity: {i === 0 ? 1 : 0}; {fadeStyle}" />
	<img
		{...imgs[1]}
		class={imgClass}
		style="opacity: {i === 1 ? 1 : 0}; {fadeStyle}"
		aria-hidden="true"
	/>
</OverlayChildren>
