<script lang="ts">
	import Backdrop from '$components/Backdrop.svelte';
	import HeadingBackdropImg from '$imgs/landscape1.jpg?w=5000&h=1000&imagetools';
</script>

<Backdrop class="w-full h-[500px]">
	{#snippet backdrop()}
		<img class="w-full h-auto object-cover" src={HeadingBackdropImg} alt="Backdrop of a wombat" />
	{/snippet}
	{#snippet children()}
		<div class="w-full h-full p-auto flex flex-col gap-5 children-text-white">
			<h3>About Lens of Brown</h3>
			<h1>our story</h1>
			<h3>Get in touch</h3>
		</div>
	{/snippet}
</Backdrop>

<style lang="postcss">
	.children-text-white > * {
		@apply text-white;
	}

	h1 {
		@apply text-5xl text-center font-Forum uppercase;
	}

	h2 {
		@apply text-3xl text-center font-Forum uppercase;
	}

	h3 {
		@apply text-xl text-center font-Forum uppercase;
	}
</style>
