<script lang="ts">
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import {
		AppShell,
		Drawer,
		Modal,
		Toast,
		initializeStores,
		// setInitialClassState
	} from '@skeletonlabs/skeleton';
	initializeStores();

	import Header from '$components/Header.svelte';
	// import Footer from '$components/Footer.svelte';
	import DrawerContents from '$components/DrawerContents.svelte';

	import { toast } from '$utils';
	toast.init();

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import { storePopup } from '@skeletonlabs/skeleton';
	import { windowSize } from '$stores';
	import { page } from '$app/stores';
	import { capitalize } from 'js-utils';
	import { derived } from 'svelte/store';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	const title = derived([page], ([{ route }]) => {
		if (!route.id || route.id === '/') return 'Lens of Brown';
		const firstRoute = route.id.split('/').filter(Boolean)[0];
		return `${capitalize(firstRoute)} - Lens of Brown`;
	});
</script>

<svelte:window bind:innerWidth={windowSize.w} bind:innerHeight={windowSize.h} />

<Toast />
<Drawer
	position="right"
	width="w-[200px] sm:w-[400px]"
	padding="p-0"
	rounded="rounded-none"
	bgBackdrop="bg-gradient-to-tr from-primary-500/50 via-tertiary-500/50 to-secondary-500/50"
>
	<DrawerContents />
</Drawer>
<Modal />

<!-- eslint-disable-next-line -->
<!-- <svelte:head>{@html '<script>(' + setInitialClassState.toString() + ')();</script>'}</svelte:head> -->

<svelte:head>
	<title>{$title}</title>
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
