<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {}
	const { children, class: klass = '', ...rest }: Props = $props();
</script>

<div class={'flex flex-col mx-auto gap-20 py-20 sm:w-[80%] max-w-[1250px] ' + klass} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</div>
