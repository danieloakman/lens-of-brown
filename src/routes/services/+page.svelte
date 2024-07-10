<!-- TODO: rename route as /services -->
<script lang="ts">
	import Divider from '$components/Divider.svelte';

	type PricePackage = [name: string, amount: number];
	const miniShoots: PricePackage[] = [
		['Family', 150],
		['Couples', 150],
		['Engagement', 150],
		['Solo', 100],
		['Pets', 100]
	];
	// TODO: make the below lower case:
	const packages: PricePackage[] = [
		['FAMILY OR SIBLINGS', 300],
		['COUPLES', 300],
		['PROPOSAL OR ENGAGEMENT', 300],
		['WEDDINGS OR ELOPEMENTS', 700],
		['EVENTS', 450]
	];
</script>

<!--
TODO: Mini shoots, just list the packages, no nested dot points underneath. No checkbox. No "book" button.
Replace "About this service" with "What to expect" 
Family packages list: Family - starts from $300. Each item is listed like that.
-->

<div class="flex flex-col pb-8 gap-10">
	<h1 class="text-primary-500 dark:text-primary-100 mx-auto pt-10">PRICE LIST*</h1>

	<Divider horizontal />

	<div class="flex flex-col mx-auto gap-6 p-4">
		<div class="flex flex-col gap-6">
			<h2>MINI-SHOOTS (10 EDITED IMAGES)</h2>

			<div class="flex flex-col w-full px-6 gap-4">
				{#each miniShoots as [name, amount]}
					<div class="flex flex-row justify-between">
						<span>{name}</span>
						<span><b>$</b>{amount}</span>
					</div>
				{/each}
			</div>
		</div>

		<div class="flex flex-col gap-6">
			<div class="flex flex-row justify-between items-baseline">
				<h2>PACKAGES</h2>
				<span>STARTS FROM:</span>
			</div>

			<div class="flex flex-col w-full px-6 gap-4">
				{#each packages as [name, amount]}
					<div class="flex flex-row justify-between">
						<span>{name}</span>
						<span><b>$</b>{amount}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- <div class="mx-auto card card-hover flex flex-row justify-between gap-2">
		<a href="https://www.instagram.com/lens.ofbrown" class="p-2 text-xs sm:text-sm md:text-base" target="_blank"> LENS.OFBROWN </a>
		<Divider vertical class="p-0 m-0" width={1} />
		<a href="mailto: info@lensofbrown.com.au" class="p-2 text-xs sm:text-sm md:text-base" target="_blank">
			INFO@LENSOFBROWN.COM.AU
		</a>
	</div> -->

	<Divider horizontal />

	<h3 class="mx-auto">*PRICES SUBJECT TO CHANGE</h3>
</div>

<!--
TODO: make component for the "See more\n follow us on instagram" then some pictures. As well as the bottom banner
that contains the social icon buttons. These are reused on most pages.
-->

<style lang="postcss">
	h1 {
		@apply text-5xl font-Forum;
	}

	h2 {
		@apply text-3xl font-Forum;
	}

	h3 {
		@apply text-xl font-Forum;
	}

	span {
		@apply text-xl font-Forum;
	}
</style>
