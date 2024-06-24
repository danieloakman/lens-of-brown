<script lang="ts">
	import Carousel from '$components/Carousel.svelte';
  // import { CLIENT_IMGS } from '$lib';
  
	import Img1 from '$imgs/clients/P5190160.jpg?url';
  import Img2 from '$imgs/clients/P5190601.jpg?url'
  // import Img1 from 'imgs/client/P5190160.jpg';
  // import Img2 from 'imgs/client/P5190601.jpg';
  const imgs = [
		{ src: Img1, alt: 'Family of 4 amongst Autumn leaves.' },
		{ src: Img2, alt: 'asd' }
	];
</script>

<h1 class="text-5xl text-center">Families</h1>
<Carousel {imgs} buttons/>
