<script lang="ts">
	import PageBody from '$components/PageBody.svelte';
	import Divider from '$components/Divider.svelte';
	import BottomBanner from '$components/BottomBanner.svelte';
	import ForMore from '$components/ForMore.svelte';
	import DanAndTrot from '$imgs/dan_and_trot2.jpg?url&w=400&aspect=1:1&imagetools';
</script>

<PageBody class="gap-20 py-20">
	<div class="flex flex-col sm:flex-row gap-10">
		<img src={DanAndTrot} alt="TODO" class="w-[400px] h-[400px] object-cover rounded-full" />
		<div class="flex flex-col gap-5">
			<h3 class="text-2xl font-Forum">Hi there!</h3>
			<h1 class="text-5xl font-Forum text-primary-500">Welcome to Lens of Brown</h1>
			<p class="text-xl">
				In the last few years I've learnt that successfully photographing a wedding requires so much
				more than good technical knowledge. It's about knowing how to be. I build trust quickly and
				effortlessly with every guest - in every situation - so I can portray them as naturally and
				authentically as possible. I can never quite decide if I'm an energetic person or a clam
				one. I hide ini the shadows to capture the gentles of moments and I'm right up there with
				the craziest on the dance floor, sucking up the energy and vibrance. These are the images
				that will keep the memories and feelings fresh fo generations to come.
			</p>
		</div>
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<div class="flex flex-col gap-5">
		<h1 class="text-center text-5xl font-Forum text-primary-500">FAQs</h1>
		<div class="bg-surface-200 w-full h-[300px]">
			<span></span>
		</div>
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<ForMore />
</PageBody>

<BottomBanner />
