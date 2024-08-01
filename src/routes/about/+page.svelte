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
			<p class="text-xl overflow-y-scroll mx-0 sm:mx-6 md:mx-10 lg:mx-20">
				We’re Daniel and Sheridan, the team behind Lens of Brown. We have a mutual passion for
				photography, animals and nature. Candid and natural photographs are always our goal, and we
				aim to capture authentic expression and connection. One of our favourite offerings is the
				mini-shoots, providing an affordable way to capture family memories. We hope you enjoy
				browsing our portfolio, and hope to hear from you soon.
				<br /><br /> Based in the Wollongong area, we service the Greater Sydney region and beyond.
				<!-- In the last few years I've learnt that successfully photographing a wedding requires so much more than good technical knowledge. It's about knowing how to be. I build trust quickly and effortlessly with every guest - in every situation - so I can portray them as naturally and authentically as possible. I can never quite decide if I'm an energetic person or a clam one. I hide ini the shadows to capture the gentles of moments and I'm right up there with the craziest on the dance floor, sucking up the energy and vibrance. These are the images that will keep the memories and feelings fresh fo generations to come. -->
			</p>
		</div>
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<div class="flex flex-col gap-5">
		<h1 class="text-center text-5xl font-Forum text-primary-500">FAQs</h1>
		<div class="bg-surface-200 rounded-container-token w-full p-6">
			{#snippet item(question: string, answer: Array<string | string[]>)}
				<AccordionItem>
					<svelte:fragment slot="summary">
						<h2 class="font-Forum text-2xl">{question}</h2>
					</svelte:fragment>
					<svelte:fragment slot="content">
						<ul class="text-xl">
							{#each answer as item}
								{#if typeof item === 'string'}
									<li>{item}</li>
								{:else}
									<ul class="ps-4">
										{#each item as subItem}
											<li>{subItem}</li>
										{/each}
									</ul>
								{/if}
							{/each}
						</ul>
					</svelte:fragment>
				</AccordionItem>
			{/snippet}
			<Accordion spacing="space-y-5">
				{@render item('What should we expect during our shoot?', [
					'Our aim is to capture candid and authentic images. Whilst we will provide guidance on where to stand and how to pose, it is in the movement between shots where some of the best images are captured. We will incorporate activities to encourage natural expression and movement in your images.'
				])}
				<Divider horizontal class="mx-4" />
				{@render item('Do we get to choose the location for our photo shoot?', [
					'Yes! Please discuss your location preferences with us at the time of booking. We will always do our best to accomodate. A travel fee may be applicable depending on your chosen location.',
					'', // TODO: add special char for a br
					'We also have an extensive list of recommended locations, if you would like suggestions.'
				])}
				<Divider horizontal class="mx-4" />
				{@render item('What should we wear to our shoot?', [
					'We suggest:',
					[
						'- Neutrals or plain coloured clothing',
						'- Choose a family colour scheme of a few colours, but avoid outfits that are too "matchy matchy"',
						'- Minimise bold or conflicting patterns',
						'- Avoid large logos, especially on tops',
						'- Different textures look great on camera!',
						'- Wear something comfy that allows for movement',
						'- If in doubt, reach out to us for personalised recommendations prior to your shoot'
					]
				])}
				<Divider horizontal class="mx-4" />
				{@render item('How will our photos be delivered?', [
					'Your photos will be delivered within a week via your own personal and secure online gallery. We will also provide a sneak peek within a couple of days of completing your shoot.'
				])}
				<Divider horizontal class="mx-4" />
				{@render item('What happens if it rains?', [
					'Whilst light rainfall is usually not an issue, we will always offer to reschedule in circumstances of persistent rain or adverse weather conditions.'
				])}
			</Accordion>
		</div>
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<ForMore />
</PageBody>

<BottomBanner />
