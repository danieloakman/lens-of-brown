<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	const {
		prices,
		...rest
	}: { prices: [title: string, amount: number][] } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div {...rest}>
	{#each prices as [title, amount]}
		<div class="flex flex-row justify-between">
			<span>{title}</span>
			<span>${amount}</span>
		</div>
	{/each}
</div>
