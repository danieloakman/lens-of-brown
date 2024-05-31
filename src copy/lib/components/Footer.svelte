<script lang="ts">
	import { page } from '$app/stores';
	import {
		CalendarIcon,
		CheckListIcon,
		GroceryIcon,
		HomeIcon,
		MenuBookIcon,
		currentUser,
		mobileKeyboardVisible
	} from '$lib';
	import type { StoreSource } from '$types';
	import { TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import { type ComponentType } from 'svelte';

	interface Tab {
		path: string;
		icon: ComponentType;
	}
	const tabs: Tab[] = [
		{ path: '/', icon: HomeIcon },
		{ path: '/calendar', icon: CalendarIcon },
		{ path: '/lists', icon: CheckListIcon },
		{ path: '/groceries', icon: GroceryIcon },
		{ path: '/recipes', icon: MenuBookIcon }
	];

	function isSelected(path: string, p: StoreSource<typeof page>) {
		if (path === '/') return p.url.pathname === '/';
		return p.url.pathname.includes(path);
	}
</script>

{#if $currentUser != null && !$mobileKeyboardVisible}
	<TabGroup
		justify="justify-center"
		active="variant-filled-primary"
		hover="hover:variant-soft-primary"
		flex="flex-1 lg:flex-none"
		rounded=""
		border=""
		class="bg-surface-100-800-token w-full"
	>
		{#each tabs as { path, icon }}
			<TabAnchor class="flex justify-center" href={path} selected={isSelected(path, $page)}>
				<svelte:fragment slot="lead">
					<svelte:component this={icon} />
				</svelte:fragment>
			</TabAnchor>
		{/each}
	</TabGroup>
{/if}
