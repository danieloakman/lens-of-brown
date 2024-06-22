<script lang="ts">
	import { page } from '$app/stores';
	import { FACEBOOK_URL, INFO_EMAIL, INSTAGRAM_URL } from '$constants';
	import { Icon, STATIC_FILES } from '$lib';
	import { AppBar, LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	const isCurrentPage = (href: string): 'page' | undefined =>
		href === $page.url.pathname ? 'page' : undefined;
</script>

<AppBar
	padding=""
	gap="gap-2"
	background=""
	slotDefault="place-self-center"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		<div class="w-16 flex flex-row ps-2 gap-1">
			<a href={INSTAGRAM_URL} target="_blank" class="btn-icon hover-big">
				<Icon.Instagram class="text-xl min-[430px]:text-2xl text-primary-500" />
			</a>
			<a href={FACEBOOK_URL} target="_blank" class="btn-icon hover-big">
				<Icon.Facebook class="text-xl min-[430px]:text-2xl text-primary-500" />
			</a>
			<a href={INFO_EMAIL} target="_blank" class="btn-icon hover-big">
				<Icon.Mail class="text-xl min-[430px]:text-2xl text-primary-500" />
			</a>
		</div>
	</svelte:fragment>

	<!-- <a
		href="/"
		aria-current={isCurrentPage('/')}
		class="min-[910px]:hidden"
	>
		<img
			src={STATIC_FILES.imgs['transparent-logo-sideways.png']}
			alt="Lens of Brown logo - header"
			class="h-[100px]"
		/>
	</a> -->

	<nav class="flex flex-row gap-5 items-center">
		<a aria-current={isCurrentPage('/about')} href="/about" class="header hidden min-[910px]:flex">ABOUT</a>
		<a aria-current={isCurrentPage('/contact')} href="/contact" class="header hidden min-[910px]:flex">CONTACT</a>
		<a href="/" aria-current={isCurrentPage('/')}>
			<img
				src={STATIC_FILES.imgs['transparent-logo-sideways.png']}
				alt="Lens of Brown logo - header"
				class="h-[100px]"
			/>
		</a>
		<a aria-current={isCurrentPage('/portfolio')} href="/portfolio" class="header hidden min-[910px]:flex">PORTFOLIO</a>
		<a aria-current={isCurrentPage('/pricing')} href="/pricing" class="header hidden min-[910px]:flex">PRICING</a>
	</nav>

	<svelte:fragment slot="trail">
		<button
			class="min-[910px]:hidden btn-icon w-16"
			on:click={() => ($drawerStore.open ? drawerStore.close() : drawerStore.open())}
		>
			<Icon.Menu class="text-3xl" />
		</button>

		<div class="hidden min-[910px]:flex w-16">
			<!-- <LightSwitch /> -->
		</div>
	</svelte:fragment>
</AppBar>

<style lang="postcss">
	/* Highlights current route the page is on. */
	/* TODO: need to add a little caret or nicer underline when selected */
	a[aria-current='page'] {
		@apply font-black;
	}

	.header {
		@apply text-lg font-Forum text-primary-500;
		@apply transition duration-300 ease-in-out hover:scale-110;
	}
</style>
