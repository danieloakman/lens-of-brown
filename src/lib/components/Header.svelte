<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '$lib';
	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';
	import { headerStore } from '$stores/ui.svelte';
	import '../../app.postcss';

	const drawerStore = getDrawerStore();
	const isCurrentPage = (href: string): 'page' | undefined =>
		href === $page.url.pathname ? 'page' : undefined;
</script>

<AppBar
	padding=""
	gap="gap-2"
	background="variant-filled-surface"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		<div></div>
	</svelte:fragment>

	<a href="/" class="md:hidden text-3xl">Lens of Brown</a>

	<nav class="hidden md:flex flex-row gap-5 items-baseline">
		<a aria-current={isCurrentPage('/about')} href="/about" class="text-lg">About</a>
		<a aria-current={isCurrentPage('/contact')} href="/contact" class="text-lg">Contact</a>
		<a aria-current={isCurrentPage('/')} href="/" class="text-5xl">Lens of Brown</a>
		<a aria-current={isCurrentPage('/portfolio')} href="/portfolio" class="text-lg">Portfolio</a>
		<a aria-current={isCurrentPage('/pricing')} href="/pricing" class="text-lg">Pricing</a>
	</nav>

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
