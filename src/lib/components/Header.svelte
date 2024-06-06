<script lang="ts">
	import { goto } from '$app/navigation';
	import { Icon, routes } from '$lib';
	import { AppBar, LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';
	import { headerStore } from '$stores/ui';

	function canGoBack(routes: string[]): boolean {
		if (['about', 'settings'].includes(routes[0] ?? '')) return true;
		if (routes.length > 1) return true;
		return false;
	}

	function goBack(routes: string[]) {
		const current = routes.pop();
		if (!current) return;
		goto('/' + routes.join('/'));
	}

	const drawerStore = getDrawerStore();
</script>

<AppBar
	padding=""
	gap="gap-2"
	background="variant-filled-surface"
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		{#if canGoBack($routes)}
			<button
				class="btn-icon btn-sm variant-filled-primary my-0 py-0"
				on:click={() => goBack($routes)}
			>
				<Icon.ChevronLeft />
			</button>
		{/if}
	</svelte:fragment>

	<a href="/" class="text-4xl">Lens of Brown</a>

	<svelte:fragment slot="trail">
		{#if $headerStore}
			<svelte:component this={$headerStore} />
		{/if}

		<button
			class="btn-icon variant-filled-ghost w-16 p-0 m-0"
			on:click={() => ($drawerStore.open ? drawerStore.close() : drawerStore.open())}
		>
			<Icon.Menu class="text-4xl" />
		</button>
	</svelte:fragment>
</AppBar>
