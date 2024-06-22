<!-- Displays one image, then on hover or click, display another. -->
<script lang="ts">
	import { omit } from 'js-utils';
	import { quintOut } from 'svelte/easing';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { crossfade } from 'svelte/transition';

	interface Img {
		src: string;
		alt: string;
	}
	const { imgs, ...rest }: Omit<HTMLImgAttributes, 'src' | 'alt'> & { imgs: [Img, Img] } = $props();

	let i = $state(0);
	const img = $derived(imgs[i]);

	// const [send, receive] = crossfade({
	// 	duration: 500,
	// 	easing: quintOut
	// });
</script>

<img class={'absolute object-cover ' + rest.class} {...img} {...omit(rest, 'class')} />
<img class={'absolute object-cover' + rest.class} {...img} {...omit(rest, 'class')} />
