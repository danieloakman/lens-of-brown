<script lang="ts">
	import Divider from '$components/Divider.svelte';
	import BottomBanner from '$components/BottomBanner.svelte';
	import ForMore from '$components/ForMore.svelte';
	import PageBody from '$components/PageBody.svelte';
	import Events1 from '$imgs/_events-sydney_opera_house1.jpg?url&w=1000&aspect=1:1&any';
	import Trot1 from '$imgs/couples-weddings_trot3.jpg?url&w=1000&aspect=1:1&any';
	import TimBear7 from '$imgs/_families-tim_bear7.jpg?url&w=1000&aspect=1:1&position=bottom&any';
	import HoneySantos from '$imgs/animals-honey_santos4.jpg?url&w=1000&aspect=1:1&position=bottom&any';
	import ImgCouples from '$imgs/_couples-dan_trot7.jpg?url&w=1000&aspect=1:1&position=bottom&any';
	import ImgMiniShoots from '$imgs/portraits-bianca_cherie6.jpg?url&w=1000&aspect=1:1&position=bottom&any';
	import { Icon } from '$lib/icons';
	import ServiceCard from '$components/ServiceCard.svelte';
</script>

<PageBody class="pt-5 sm:pt-20 pb-20">
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 self-center gap-3">
		<ServiceCard
			title="Mini Shoots"
			img={{ src: ImgMiniShoots, alt: 'todo' }}
			description={[
				'- Up to 30 mins to capture your best shots',
				'- 10 edited images',
				'- Your images delivered within a week via your online gallery'
			]}
			packages={[
				['Family', 150],
				['Couples', 150],
				['Engagement', 150],
				['Solo', 100],
				['Pets', 100]
			]}
		/>
		<ServiceCard
			title="Family Packages"
			img={{ src: TimBear7, alt: 'todo' }}
			description={[
				'Family Package 1:',
				['- 25 edited images', '- Suitable for families of up to 6'],
				'Family Package 2:',
				['- 35 edited images', '- Suitable for families of up to 8'],
				'Family Package 3:',
				['- 50 edited images', '- Suitable for extended and large families']
			]}
			packages={[
				['Family Package 1', 300],
				['Family Package 2', 400],
				['Family Package 3', 500]
			]}
		/>
		<ServiceCard
			title="Couples Packages"
			img={{ src: ImgCouples, alt: 'todo' }}
			description={[
				'- Packages available with 25-50+ edited images',
				'- Secret/hidden proposal photography services available',
				'- Pre-wedding services or on-location shoots'
			]}
			packages={[
				['Couples', 300],
				['Proposal', 500],
				['Engagement', 500]
			]}
		/>
		<ServiceCard
			title="Weddings"
			img={{ src: Trot1, alt: 'todo' }}
			pricing={([min]) => `Starts from AUD $${min}*`}
			description={[
				'- Packages available from 2 - 12 hours of photography coverage',
				'- Small elopement packages available, flexible to your budget',
				'- Sneak peek images delivered within 24 hours'
			]}
			packages={[
				['Elopements', 700],
				['Weddings', 1000]
			]}
		/>
		<ServiceCard
			title="Events"
			img={{ src: Events1, alt: 'todo' }}
			pricing={([min]) => `Starts from AUD $${min}*`}
			description={[
				'- Packages suitable for parties, corporate bookings and celebrations',
				'- Packages starting from 1 hour of coverage'
			]}
			packages={[
				['Private Event', 450],
				['Corporate Event', 600]
			]}
		/>
		<ServiceCard
			title="Animals"
			img={{ src: HoneySantos, alt: 'todo' }}
			description={[
				'Pet Package:',
				['- 20 edited images of pet(s) only'],
				'Pet Family Package:',
				['- 25 edited images of pet(s) and family']
			]}
			packages={[
				['Pet Package', 200],
				['Pet Family Package', 300]
			]}
		/>
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<div class="flex flex-col gap-10">
		<h1 class="text-4xl text-primary-500 font-Forum">What to expect when you book with us...</h1>
		<div class="grid grid-cols-[auto_1fr] gap-6 ps-6">
			{#each ['Authentic and candid images that capture your unique story.', 'Support, direction and guidance at every stage, allowing for the photoshoot to flow seamlessly.', 'Prompt delivery of your best images via secure online gallery.', 'A photography team who is understanding and accomodating of any accessiblity requirements.'] as text}
				<Icon.SquareCheckBig class="w-[44px] h-[44px]" />
				<span class="text-xl sm:text-2xl">{text}</span>
			{/each}
		</div>
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<ForMore />
</PageBody>

<BottomBanner />
