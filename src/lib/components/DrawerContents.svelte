<script lang="ts">
	import { page } from '$app/state';
	import { drawerContentStore, Icon } from '$lib';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import Divider from './Divider.svelte';

	const drawerStore = getDrawerStore();
	const isCurrentPage = (href: string): 'page' | undefined =>
		href === page.url.pathname ? 'page' : undefined;

	const onClickNav = () => {
		drawerStore.close();
	};
</script>

{#if $drawerStore.open}
	<div
		class="m-0 px-4 h-[65px] card flex flex-row justify-between items-center varient-filled-surface rounded-none"
	>
		<!-- <LightSwitch /> -->
		<div></div>
		<!-- {#if dev}
			<span class="card p-1 m-0">{windowSize.w}, {windowSize.h}</span>
		{/if} -->
		<button class="btn btn-icon variant-filled-ghost" onclick={() => drawerStore.close()}>
			<Icon.ArrowRightToLine class="text-3xl" />
		</button>
	</div>

	<!-- <hr /> -->

	{#if $drawerContentStore}
		<svelte:component this={$drawerContentStore} />
	{:else}
		<nav class="flex flex-col gap-4 p-4">
			<a aria-current={isCurrentPage('/')} href="/" onclick={onClickNav}> Home </a>
			<Divider horizontal />
			<a aria-current={isCurrentPage('/portfolio')} href="/portfolio" onclick={onClickNav}>
				Portfolio
			</a>
			<a aria-current={isCurrentPage('/services')} href="/services" onclick={onClickNav}>
				Services
			</a>
			<a aria-current={isCurrentPage('/about')} href="/about" onclick={onClickNav}> About </a>
			<a aria-current={isCurrentPage('/contact')} href="/contact" onclick={onClickNav}> Contact </a>
		</nav>
	{/if}
{/if}

<style lang="postcss">
	a {
		@apply font-Black-mango py-2 px-6 text-xl;
	}

	/* Highlights current route the page is on. */
	a[aria-current='page'] {
		@apply font-bold underline;
	}

	a:hover {
		@apply underline variant-outline-secondary rounded-lg p-2;
	}
</style>
