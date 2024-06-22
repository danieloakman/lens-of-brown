<script lang="ts">
	import { page } from '$app/stores';
	import { FACEBOOK_URL, INFO_EMAIL, INSTAGRAM_URL } from '$constants';
	import { Icon } from '$lib';
	import { AppBar, LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';

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
		<div class="w-16 flex flex-row ps-2 gap-1">
			<a href={INSTAGRAM_URL} target="_blank" class="btn-icon">
				<Icon.Instagram class="text-xl min-[430px]:text-2xl" />
			</a>
			<a href={FACEBOOK_URL} target="_blank" class="btn-icon">
				<Icon.Facebook class="text-xl min-[430px]:text-2xl" />
			</a>
			<a href={INFO_EMAIL} target="_blank" class="btn-icon">
				<Icon.Mail class="text-xl min-[430px]:text-2xl" />
			</a>
		</div>
	</svelte:fragment>

	<!-- TODO: centre this -->
	<a href="/" aria-current={isCurrentPage('/')} class="min-[910px]:hidden text-2xl min-[390px]:text-3xl font-Black-mango">
		Lens of Brown
	</a>

	<nav class="hidden min-[910px]:flex flex-row gap-5 items-baseline py-2">
		<a aria-current={isCurrentPage('/about')} href="/about" class="header"> About </a>
		<a aria-current={isCurrentPage('/contact')} href="/contact" class="header"> Contact </a>
		<a aria-current={isCurrentPage('/')} href="/" class="header-home"> Lens of Brown </a>
		<a aria-current={isCurrentPage('/portfolio')} href="/portfolio" class="header"> Portfolio </a>
		<a aria-current={isCurrentPage('/pricing')} href="/pricing" class="header"> Pricing </a>
	</nav>

	<svelte:fragment slot="trail">
		<button
			class="min-[910px]:hidden btn-icon w-16"
			on:click={() => ($drawerStore.open ? drawerStore.close() : drawerStore.open())}
		>
			<Icon.Menu class="text-3xl" />
		</button>

		<!-- Maybe don't use this -->
		<div class="hidden min-[910px]:flex w-16">
			<LightSwitch />
		</div>
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
