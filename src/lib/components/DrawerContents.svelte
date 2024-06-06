<script>
	import { dev } from '$app/environment';
	import { drawerContentStore, windowSize } from '$lib';
	import { getDrawerStore, LightSwitch } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
</script>

{#if $drawerStore.open}
	<div class="m-4 flex flex-row justify-between items-center">
		<LightSwitch />
		{#if dev}
			<span class="card p-1 m-0">{windowSize.w}, {windowSize.h}</span>
		{/if}
	</div>
	<hr />

	{#if $drawerContentStore}
		<svelte:component this={$drawerContentStore} />
	{:else}
		<div class="flex flex-col gap-2 m-4">Drawer contents</div>
	{/if}
{/if}
