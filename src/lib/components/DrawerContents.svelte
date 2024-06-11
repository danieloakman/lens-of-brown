<script>
	import { dev } from '$app/environment';
	import { drawerContentStore, windowSize, Icon } from '$lib';
	import { getDrawerStore, LightSwitch } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
</script>

{#if $drawerStore.open}
	<div class="m-4 flex flex-row justify-between items-center h-8">
		<LightSwitch />
		<!-- {#if dev}
			<span class="card p-1 m-0">{windowSize.w}, {windowSize.h}</span>
		{/if} -->
		<button class="btn btn-icon variant-filled-ghost" on:click={() => drawerStore.close()}>
			<Icon.ArrowRightToLine class="text-3xl" />
		</button>
	</div>

	<hr />

	{#if $drawerContentStore}
		<svelte:component this={$drawerContentStore} />
	{:else}
		<!-- TODO: put vertical nav here: -->
		<div>
			<!-- <a href="/" class="btn-ghost">Home</a> -->
		</div>
	{/if}
{/if}
