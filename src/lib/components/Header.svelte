<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '$lib';
	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';
	import { headerStore } from '$stores/ui.svelte';

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
		<div class=""></div>
	</svelte:fragment>

	<!-- TODO: centre this -->
	<a href="/" class="md:hidden text-3xl">Lens of Brown</a>

	<nav class="hidden md:flex flex-row gap-5 items-baseline">
		<a aria-current={isCurrentPage('/about')} href="/about" class="text-lg hover:text-tertiary-400">
			About
		</a>
		<a
			aria-current={isCurrentPage('/contact')}
			href="/contact"
			class="text-lg hover:text-tertiary-400"
		>
			Contact
		</a>
		<a
			aria-current={isCurrentPage('/')}
			href="/"
			class="text-5xl hover:text-tertiary-400"
		>
			Lens of Brown
		</a>
		<a
			aria-current={isCurrentPage('/portfolio')}
			href="/portfolio"
			class="text-lg hover:text-tertiary-400"
		>
			Portfolio
		</a>
		<a
			aria-current={isCurrentPage('/pricing')}
			href="/pricing"
			class="text-lg hover:text-tertiary-400"
		>
			Pricing
		</a>
	</nav>

	<svelte:fragment slot="trail">
		{#if $headerStore}
			<svelte:component this={$headerStore} />
		{/if}

		<button
			class="btn-icon variant-filled-ghost w-16 p-0 m-0"
			on:click={() => ($drawerStore.open ? drawerStore.close() : drawerStore.open())}
		>
			<Icon.Menu class="text-3xl" />
		</button>
	</svelte:fragment>
</AppBar>
