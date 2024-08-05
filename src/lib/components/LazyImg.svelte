<script lang="ts">
	import { browser } from '$app/environment';
	import type { Action } from 'svelte/action';
	import type { HTMLImgAttributes } from 'svelte/elements';

	const { src, class: klass, ...rest }: Omit<HTMLImgAttributes, 'loading'> = $props();

	let loading = $state(false);
	const onload: Action<HTMLImageElement> = (img) => {
		if (img.complete) {
			loading = false;
			return;
		}
		img.onloadstart = () => {
			console.log('loading');
			loading = true;
		};
		img.addEventListener('load', () => {
			console.log('loaded');
			loading = false;
		});
	};
</script>

{#snippet placeholder()}
	<div class={'placeholder animate-pulse ' + klass}></div>
{/snippet}

<!-- {#await pSrc instanceof Promise ? pSrc : Promise.resolve(pSrc)}
	{@render placeholder()}
{:then src} -->
{#if loading}
	{@render placeholder()}
{/if}
<img
	{src}
	class={klass + (loading ? ' hidden' : '')}
	{...rest}
	loading="lazy"
	use:onload
/>
<!-- {/await} -->
