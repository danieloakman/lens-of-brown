<script lang="ts">
	import { goto } from '$app/navigation';
	import { ChevronLeftIcon, MenuIcon, MenuOpenIcon, currentUser, routes, capitalize } from '$lib';
	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';
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

{#if $currentUser != null}
	<AppBar padding="p-2" gap="gap-2">
		<svelte:fragment slot="lead">
			{#if canGoBack($routes)}
				<button
					class="btn-icon btn-sm variant-filled-primary my-0 py-0"
					on:click={() => goBack($routes)}
				>
					<ChevronLeftIcon />
				</button>
			{/if}
		</svelte:fragment>

		{#if !$routes.length}
			<span>Home</span>
		{:else}
			<ol class="flex flex-row gap-1">
				{#each $routes as route, i}
					<li>{capitalize(route)}</li>
					{#if i < $routes.length - 1}
						<li class="text-primary-500" aria-hidden>/</li>
					{/if}
				{/each}
			</ol>
		{/if}

		<!-- {$page.route.id} -->

		<svelte:fragment slot="trail">
			{#if $headerStore}
				<svelte:component this={$headerStore} />
			{/if}

			<button
				class="btn-icon variant-filled-primary"
				on:click={() => ($drawerStore.open ? drawerStore.close() : drawerStore.open())}
			>
				{#if $drawerStore.open}
					<MenuOpenIcon />
				{:else}
					<MenuIcon />
				{/if}
			</button>
		</svelte:fragment>
	</AppBar>
{/if}
