<script lang="ts">
	import PageBody from '$components/PageBody.svelte';
	import Divider from '$components/Divider.svelte';
	import BottomBanner from '$components/BottomBanner.svelte';
	import ForMore from '$components/ForMore.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import ImgDanTrot from '$imgs/_couples-dan_trot8.jpg?enhanced&aspect=1:1&any';
</script>

<PageBody class="gap-20 py-20">
	<div class="flex flex-col sm:flex-row gap-10">
		<div class="self-center">
			<enhanced:img
				src={ImgDanTrot}
				alt="Daniel and Sheridan standing together infront of pine trees"
				class="max-w-[300px] sm:max-w-[400px] aspect-square object-cover rounded-full self-center"
			></enhanced:img>
		</div>
		<div class="flex flex-col gap-5 max-h-[400px]">
			<!-- <h3 class="text-2xl font-Forum">Hi there!</h3> -->
			<h1 class="text-5xl font-Forum text-primary-500 text-center">
				Welcome to <br /> Lens of Brown
			</h1>
			<p class="text-xl overflow-y-scroll">
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
		<div class="bg-surface-200 rounded-container-token w-full p-6">
			{#snippet item(question: string, answer: string)}
				<AccordionItem>
					<svelte:fragment slot="summary">
						<h2 class="font-Forum text-2xl">{question}</h2>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<p class="text-xl">{answer}</p>
					</svelte:fragment>
				</AccordionItem>
			{/snippet}
			<!-- TODO: add in some of these from the insta -->
			<Accordion spacing="space-y-5">
				{@render item('What should we expect during our shoot?', 'todo')}
				<Divider horizontal class="mx-4" />
				{@render item('Do we get to choose the location for our photo shoot?', 'todo')}
				<Divider horizontal class="mx-4" />
				{@render item('What should we wear to our shoot?', 'todo')}
				<Divider horizontal class="mx-4" />
				{@render item('How will our photos be delivered?', 'todo')}
				<Divider horizontal class="mx-4" />
				{@render item('What happens if it rains?', 'todo')}
			</Accordion>
		</div>
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<ForMore />
</PageBody>

<BottomBanner />
