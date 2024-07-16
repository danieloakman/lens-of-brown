<script lang="ts">
	import { Icon } from '$lib/icons';

	const {
		text,
		author,
		class: klass = ''
	}: { text: string; author: string; class?: string } = $props();
</script>

<div class={'flex flex-col align-middle gap-4 bg-surface-200 pb-5 ' + klass}>
	<Icon.Quote
		class="card mx-auto variant-filled-primary text-5xl rounded-[100%] p-5 w-16 h-16 relative -top-8"
	/>
	<blockquote class="flex flex-col gap-10">
		<p class="italic text-center text-3xl">{text}</p>
		<footer class="text-center text-xl text-primary-500 font-Black-Mango">
			{author}
		</footer>
	</blockquote>
</div>
