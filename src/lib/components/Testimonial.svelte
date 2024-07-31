<script lang="ts">
	import { Icon } from '$lib/icons';

	const {
		quote,
		author,
		class: klass = '',
		quoteClass = '',
		authorClass = ''
	}: {
		quote: string;
		author: string;
		class?: string;
		quoteClass?: string;
		authorClass?: string;
	} = $props();
</script>

<div class={'flex flex-col align-middle gap-4 bg-surface-200 pb-5 ' + klass}>
	<Icon.Quote
		class="card mx-auto variant-filled-primary text-5xl rounded-[100%] p-5 w-16 h-16 relative -top-8"
	/>
	<blockquote class="flex flex-col gap-10">
		<p class={'italic text-center text-xl sm:text-2xl px-2 ' + quoteClass}>" {quote} "</p>
		<footer class={'text-center text-2xl text-primary-500 font-Black-Mango ' + authorClass}>
			{author}
		</footer>
	</blockquote>
</div>
