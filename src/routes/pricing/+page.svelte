<script lang="ts">
	import Divider from '$components/Divider.svelte';

	type PricePackage = [name: string, amount: number];
	const miniShoots: PricePackage[] = [
		['FAMILY', 150],
		['COUPLES', 150],
		['ENGAGEMENT', 150],
		['SOLO', 100],
		['PETS', 100]
	];
	const packages: PricePackage[] = [
		['FAMILY OR SIBLINGS', 300],
		['COUPLES', 300],
		['PROPOSAL OR ENGAGEMENT', 300],
		['WEDDINGS OR ELOPEMENTS', 700],
		['EVENTS', 450]
	];
</script>

<div class="flex flex-col pb-8 gap-10">
	<h1 class="text-primary-500 dark:text-primary-100 mx-auto pt-10">
		PRICE &nbsp;&nbsp; LIST*
	</h1>

	<Divider horizontal />

	<div class="flex flex-col mx-auto gap-6">
		<div class="flex flex-col gap-6">
			<h2>MINI-SHOOTS (10 EDITED IMAGES)</h2>

			<div class="flex flex-col w-full px-6 gap-4">
				{#each miniShoots as [name, amount]}
					<div class="flex flex-row justify-between">
						<span class="text-lg">{name}</span>
						<span class="text-lg"><b>$</b>{amount}</span>
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
						<span class="text-lg">{name}</span>
						<span class="text-lg"><b>$</b>{amount}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="mx-auto p-6 card flex flex-row justify-between gap-2">
		<span>LENS.OFBROWN</span>
		<Divider vertical width={2} />
		<span>INFO@LENSOFBROWN.COM.AU</span>
	</div>

	<Divider horizontal />

	<h3 class="mx-auto">*PRICES SUBJECT TO CHANGE</h3>
</div>

<style lang="postcss">
	h1 {
		@apply text-5xl
	}
	h2 {
		@apply text-3xl
	}
</style>
