<script lang="ts">
	import ImgCarousel from '$components/ImgCarousel.svelte';
	import LensOfBrownLogo from '$components/LensOfBrownLogo.svelte';
	import { windowSize } from '$lib';
	import type { BasicImg } from '$types';

	// const imgs: BasicImg[] = Object.values(STATIC_FILES.imgs.clients)
	// 	.slice(0, 5)
	// 	.map((src: string) => ({ src, alt: 'Client photo' }));
</script>

<!-- <Carousel
	imgs={[
		{
			src: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg',
			alt: 'A beautiful lake'
		},
		{
			src: 'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg',
			alt: 'A beautiful green plain by the water'
		},
		// {
		// 	src: 'https://thecamerastore.com/cdn/shop/articles/GINAYEOLANDSCAPE-1_800x.jpg?v=1687296669',
		// 	alt: 'A beautiful mountain with pine trees and a river'
		// },
		// {
		// 	src: 'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg?w=1436&h=1078',
		// 	alt: 'A road and sunset'
		// },
		{
			src: 'https://photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg',
			alt: 'A desert'
		}
	]}
/> -->

<!--
TODO: main blurb

Creating snaps for keeps.

Wollongong based photography, servicing Greater Sydney and beyond. Candid, timeless images to capture your uniqueness.

-->

<div class="flex flex-col gap-2">
	<span class="text-center font-Forum">Todo</span>
	<!-- TODO: ImgCarousel doesn't appear here, find out why -->
	<!-- <ImgCarousel class="" {imgs} nextDelayMs={3000} width="500px" height="500px" /> -->
	
	<!-- <LensOfBrownLogo class="mx-auto p-4"/> -->
</div>

<!--
TODO: put bottom banner here with social icon buttons and copyright. Remove "Cookie Settings" & "User agreement" though.
Make the "Lens of Brown" title here cream and not brown.
Remove the many pictures section on mobile.
-->
