<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '$lib';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import SidewaysLogo from '$imgs/transparent-logo-sideways.png?enhanced&any';

	const drawerStore = getDrawerStore();
	const isCurrentPage = (href: string): 'page' | undefined =>
		href === $page.url.pathname ? 'page' : undefined;
</script>

<div class="flex flex-row gap-2 justify-between px-4 lg:px-16 sm:py-4">
	<button
		class="lg:hidden btn-icon w-16"
		on:click={() => ($drawerStore.open ? drawerStore.close() : drawerStore.open())}
		aria-label="Open the navigation menu"
	>
		<Icon.Menu class="text-2xl text-primary-500" />
	</button>

	<a href="/" aria-label="Home">
		<enhanced:img
			src={SidewaysLogo}
			alt="Lens of Brown logo - header"
			class="max-w-[234px] max-h-[100px]"
		></enhanced:img>
	</a>

	<div class="w-16 lg:hidden"></div>
	<nav class="hidden lg:flex flex-row items-center gap-12 px-8">
		<a href="/" class="header" aria-current={isCurrentPage('/')}>home</a>
		<a href="/portfolio" class="header" aria-current={isCurrentPage('/portfolio')}>portfolio</a>
		<a href="/services" class="header" aria-current={isCurrentPage('/services')}>services</a>
		<a href="/about" class="header" aria-current={isCurrentPage('/about')}>about</a>
		<a href="/contact" class="header" aria-current={isCurrentPage('/contact')}>contact</a>
	</nav>
</div>

<style lang="postcss">
	/* Highlights current route the page is on. */
	/* TODO: need to add a little caret or nicer underline when selected */
	a[aria-current='page'] {
		@apply font-black transition duration-300 ease-in-out hover:brightness-125;
	}

	a img:hover {
		@apply transition duration-300 ease-in-out hover:brightness-125;
	}

	.header {
		@apply text-lg font-Forum text-primary-500 uppercase;
		@apply transition duration-300 ease-in-out hover:scale-110;
	}
</style>
