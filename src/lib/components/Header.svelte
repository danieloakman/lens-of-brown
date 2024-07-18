<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '$lib';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import SidewaysLogo from '$imgs/transparent-logo-sideways.png?enhanced&any';

	const drawerStore = getDrawerStore();
	const isCurrentPage = (href: string): 'page' | undefined =>
		href === $page.url.pathname ? 'page' : undefined;
</script>

<!-- TODO: fix padding for mobile -->
<div class="flex flex-row gap-2 justify-between px-16">
	<button
		class="min-[910px]:hidden btn-icon w-16"
		on:click={() => ($drawerStore.open ? drawerStore.close() : drawerStore.open())}
	>
		<Icon.Menu class="text-2xl text-primary-500" />
	</button>

	<a href="/">
		<enhanced:img
			src={SidewaysLogo}
			alt="Lens of Brown logo - header"
			class="w-[280px] px-6"
		></enhanced:img>
	</a>

	<div class="w-16 min-[910px]:hidden"></div>
	<nav class="hidden min-[910px]:flex flex-row items-center gap-12 px-8">
		<a href="/" class="header" aria-current={isCurrentPage('/')}>home</a>
		<a href="/portfolio" class="header" aria-current={isCurrentPage('/portfolio')}>portfolio</a>
		<a href="/services" class="header" aria-current={isCurrentPage('/services')}>services</a>
		<a href="/about" class="header" aria-current={isCurrentPage('/about')}>about</a>
		<a href="/contact" class="header" aria-current={isCurrentPage('/contact')}>contact</a>
	</nav>
</div>

<!-- <AppBar
	padding=""
	gap="gap-0"
	background=""
	slotDefault="place-self-center"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		<div class="w-16 flex flex-row ps-2 gap-1">
			<a href={INSTAGRAM_URL} target="_blank" class="btn-icon hover-lg">
				<Icon.Instagram class="text-xl min-[430px]:text-2xl text-primary-500" />
			</a>
			<a href={FACEBOOK_URL} target="_blank" class="btn-icon hover-lg">
				<Icon.Facebook class="text-xl min-[430px]:text-2xl text-primary-500" />
			</a>
			<a href={INFO_EMAIL} target="_blank" class="btn-icon hover-lg">
				<Icon.Mail class="text-xl min-[430px]:text-2xl text-primary-500" />
			</a>
		</div>
	</svelte:fragment>

	<nav class="flex flex-row gap-5 items-center">
		<a aria-current={isCurrentPage('/about')} href="/about" class="header hidden min-[910px]:flex"
			>ABOUT</a
		>
		<a
			aria-current={isCurrentPage('/contact')}
			href="/contact"
			class="header hidden min-[910px]:flex">CONTACT</a
		>
		<a href="/" aria-current={isCurrentPage('/')}>
			{#if windowSize.w < 410}
				<enhanced:img
					src={SidewaysLogo}
					alt="Lens of Brown logo - header"
					class="h-[70px] w-auto"
				></enhanced:img>
			{:else}
				<enhanced:img
					src={SidewaysLogo}
					alt="Lens of Brown logo - header"
					class="h-[100px] w-auto"
				></enhanced:img>
			{/if}
		</a>
		<a
			aria-current={isCurrentPage('/portfolio')}
			href="/portfolio"
			class="header hidden min-[910px]:flex">PORTFOLIO</a
		>
		<a
			aria-current={isCurrentPage('/pricing')}
			href="/pricing"
			class="header hidden min-[910px]:flex">PRICING</a
		>
	</nav>

	<svelte:fragment slot="trail">
		<button
			class="min-[910px]:hidden btn-icon w-16"
			on:click={() => ($drawerStore.open ? drawerStore.close() : drawerStore.open())}
		>
			<Icon.Menu class="text-2xl text-primary-500" />
		</button>

		<div class="hidden min-[910px]:flex w-16">
			// <LightSwitch />
		</div>
	</svelte:fragment>
</AppBar> -->

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
