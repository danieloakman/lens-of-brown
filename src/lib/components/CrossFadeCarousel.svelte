<script lang="ts">
	import type { BasicImg } from '$types';
	import { quintOut } from 'svelte/easing';
	import type { HTMLAttributes } from 'svelte/elements';
	import { crossfade } from 'svelte/transition';

	const {
		buttons = false,
		nextDelayMs = 5000,
		imgs,
		width,
		height,
		fadeDurationMs: fadeMs = 1500,
		...rest
	}: {
		buttons?: boolean;
		scrolling?: boolean;
		nextDelayMs?: number;
		width?: string;
		height?: string;
		fadeDurationMs?: number;
		imgs: BasicImg[];
	} & HTMLAttributes<HTMLDivElement> = $props();

	let i = $state(0);
	const img = $derived(imgs.at(i % imgs.length));
	const style = $derived(
		[
			['width', width],
			['height', height]
		]
			.map(([k, v]) => `${k}:${v}`)
			.join(';')
	);

	setInterval(async () => {
		i++;
	}, nextDelayMs);

	const [send, receive] = crossfade({
		duration: fadeMs,
		easing: quintOut
	});
</script>

<div {...rest}>
	{#if buttons}
		<button
			type="button"
			class="btn-icon variant-filled"
			aria-label="Previous image"
			onclick={() => i--}
		>
			<i class="fa-solid fa-arrow-left"></i>
		</button>
	{/if}

	<div class="relative">
		{#if i % 2 === 0}
			<img
				in:send={{ key: img }}
				out:receive={{ key: img }}
				loading="lazy"
				class="absolute object-cover"
				{style}
				{...img}
			/>
		{:else}
			<img
				in:send={{ key: img }}
				out:receive={{ key: img }}
				loading="lazy"
				class="absolute object-cover"
				{style}
				{...img}
			/>
		{/if}
	</div>

	{#if buttons}
		<button
			type="button"
			class="btn-icon variant-filled"
			aria-label="Next image"
			onclick={() => i++}
		>
			<i class="fa-solid fa-arrow-right"></i>
		</button>
	{/if}
</div>
