<script lang="ts">
	import Divider from "$components/Divider.svelte";

</script>

<div class="flex flex-col pb-8">
	<h1 class="text-5xl text-primary-500 dark:text-primary-100 mx-auto py-10">
		PRICE &nbsp;&nbsp; LIST*
	</h1>

	<Divider horizontal width={2}/>

	<h2 class="text-3xl mx-auto">MINI-SHOOTS (10 EDITED IMAGES)</h2>

	<div>
		<div>
			<span>FAMILY</span>
			<span>$150</span>
		</div>

		<div>
			<span>COUPLES</span>
			<span>$150</span>
		</div>

		<div>
			<span>ENGAGEMENT</span>
			<span>$150</span>
		</div>

		<div>
			<span>SOLO</span>
			<span>$100</span>
		</div>

		<div>
			<span>PETS</span>
			<span>$100</span>
		</div>
	</div>

	<div class="flex flex-row justify-between">
		<h2>PACKAGES</h2>
		<span>STARTS FROM:</span>
	</div>

	<div>
		<div>
			<span>FAMILY OR SIBLINGS</span>
			<span>$300</span>
		</div>

		<div>
			<span>COUPLES</span>
			<span>$300</span>
		</div>

		<div>
			<span>PROPOSAL OR ENGAGEMENT</span>
			<span>$300</span>
		</div>

		<div>
			<span>WEDDINGS OR ELOPEMENTS</span>
			<span>$700</span>
		</div>

		<div>
			<span>EVENTS</span>
			<span>$450</span>
		</div>
	</div>

	<Divider horizontal />

  <h3 class="mx-auto">*PRICES SUBJECT TO CHANGE AT ANY TIME</h3>
</div>

<style lang="postcss">
	h1 {
		/* @apply italic; */
	}
</style>
