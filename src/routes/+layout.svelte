<script lang="ts">
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import {
		AppShell,
		Drawer,
		Modal,
		Toast,
		initializeStores
		// setInitialClassState
	} from '@skeletonlabs/skeleton';
	initializeStores();

	import Header from '$components/Header.svelte';
	// import Footer from '$components/Footer.svelte';
	import DrawerContents from '$components/DrawerContents.svelte';

	import { windowSize } from '$stores';
	import { page } from '$app/stores';
	import type { Action } from 'svelte/action';

	// import { browser } from '$app/environment';
	// TODO: get this working
	// page.subscribe(() => {
	// 	if (browser) {
	// 		window?.scrollTo(0, 0);
	// 	}
	// });
</script>

<svelte:window bind:innerWidth={windowSize.w} bind:innerHeight={windowSize.h} />

<!-- <Toast /> -->
<Drawer
	position="left"
	width="w-[200px] sm:w-[33%]"
	padding="p-0"
	rounded="rounded-none"
	bgBackdrop="bg-gradient-to-tr from-primary-500/50 via-tertiary-500/50 to-secondary-500/50"
>
	<DrawerContents />
</Drawer>
<!-- <Modal /> -->

<!-- eslint-disable-next-line -->
<!-- <svelte:head>{@html '<script>(' + setInitialClassState.toString() + ')();</script>'}</svelte:head> -->

<svelte:head>
	<title>{$page.data.title}</title>
	<meta name="description" content={$page.data.description} />
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>

	<!-- <svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment> -->

	<slot />
</AppShell>
