<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '$lib';
	import { AppBar, getDrawerStore } from '@skeletonlabs/skeleton';

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
	shadow="shadow-lg"
>
	<svelte:fragment slot="lead">
		<div class="md:hidden w-16 ps-auto"></div>
	</svelte:fragment>

	<!-- TODO: centre this -->
	<a href="/" aria-current={isCurrentPage('/')} class="md:hidden text-3xl font-Black-mango">
		Lens of Brown
	</a>

	<nav class="hidden md:flex flex-row gap-5 items-baseline py-2">
		<a aria-current={isCurrentPage('/about')} href="/about" class="header"> About </a>
		<a aria-current={isCurrentPage('/contact')} href="/contact" class="header"> Contact </a>
		<a aria-current={isCurrentPage('/')} href="/" class="header-home"> Lens of Brown </a>
		<a aria-current={isCurrentPage('/portfolio')} href="/portfolio" class="header"> Portfolio </a>
		<a aria-current={isCurrentPage('/pricing')} href="/pricing" class="header"> Pricing </a>
	</nav>

	<svelte:fragment slot="trail">
		<button
			class="md:hidden btn-icon variant-filled-ghost w-16"
			on:click={() => ($drawerStore.open ? drawerStore.close() : drawerStore.open())}
		>
			<Icon.Menu class="text-3xl" />
		</button>
	</svelte:fragment>
</AppBar>

<style lang="postcss">
	/* Highlights current route the page is on. */
	a[aria-current='page'] {
		@apply text-tertiary-400 underline;
	}

	.header {
		@apply text-lg hover:text-tertiary-400 font-Black-mango;
	}

	.header-home {
		@apply text-5xl hover:text-tertiary-400 font-Black-mango;
	}
</style>
