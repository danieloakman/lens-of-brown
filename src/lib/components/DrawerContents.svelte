<script>
	import { drawerContentStore } from '$lib';
	import { getDrawerStore, LightSwitch } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
</script>

{#if $drawerStore.open}
	<div class="m-4 flex justify-between items-center">
		<LightSwitch />
	</div>
	<hr />

	{#if $drawerContentStore}
		<svelte:component this={$drawerContentStore} />
	{:else}
		<div class="flex flex-col gap-2 m-4">Drawer contents</div>
	{/if}
{/if}
