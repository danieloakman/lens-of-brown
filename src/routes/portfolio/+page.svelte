<script lang="ts">
	import ImgCarousel from '$lib/components/ImgCarousel.svelte';
	import { STATIC_FILES } from '$lib';
	import { iter } from 'iteragain';

	const randImgs = iter(Object.values(STATIC_FILES.imgs.clients)).map(
		(src) =>
			({
				src,
				alt: 'an img'
			}) as { src: string; alt: string }
	);
</script>

<div class="p-4 grid grid-cols-2 gap-4">
	<ImgCarousel class="" imgs={randImgs.take(3)} />
	<ImgCarousel class="" imgs={randImgs.take(3)} />
</div>
