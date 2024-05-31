<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-sahara.css';
	// import '../themes/trot1.postcss';

	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	// import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	// import { setTheme } from '$lib';
	// setTheme();

	import {
		AppShell,
		Drawer,
		Modal,
		Toast,
		initializeStores,
		setInitialClassState
	} from '@skeletonlabs/skeleton';
	initializeStores();

	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import DrawerContents from '$components/DrawerContents.svelte';

	import { toast } from '$utils';
	toast.init();

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { dev } from '$app/environment';

	if (dev) {
		if (!window.spy)
			// @ts-ignore
			import('rxjs-spy').then(({ create }) => {
				const spy = create();
				window.spy = spy;
			});
	}
</script>

<Toast />
<Drawer
	position="right"
	width="w-[280px] md:w-[480px]"
	padding="p-4"
	rounded="rounded-xl"
	bgBackdrop="bg-gradient-to-tr from-primary-500/50 via-tertiary-500/50 to-secondary-500/50"
>
	<DrawerContents />
</Drawer>
<Modal />

<!-- eslint-disable-next-line -->
<svelte:head>{@html '<script>(' + setInitialClassState.toString() + ')();</script>'}</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>

	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>

	<slot />
</AppShell>
