<script lang="ts">
	import Backdrop from '$components/Backdrop.svelte';
	import HeadingBackdropImg from '$imgs/landscape1.jpg?enhanced&imagetools';
</script>

<Backdrop class="w-full mx-auto">
	{#snippet backdrop()}
		<enhanced:img
			class="w-full h-auto object-fill"
			src={HeadingBackdropImg}
			alt="Backdrop of a wombat"
		></enhanced:img>
	{/snippet}
	{#snippet children()}
		<div class="w-full h-full flex flex-col gap-5 children-text-white">
			<h3 class="text-black min-[650px]:text-white">About Lens of Brown</h3>
			<h1 class="text-white">our story</h1>
			<a href="/contact">
				<h3 class="text-white">Get in touch</h3>
			</a>
		</div>
	{/snippet}
</Backdrop>

<div class="mx-auto p-4">
	<h3>Hello, ...</h3>
	<span>TODO</span>
</div>

<style lang="postcss">
	h1 {
		@apply text-5xl text-center font-Forum uppercase;
	}

	h2 {
		@apply text-3xl text-center font-Forum uppercase;
	}

	h3 {
		@apply text-xl text-center font-Forum uppercase;
	}

	span {
		@apply text-lg text-center;
	}
</style>
