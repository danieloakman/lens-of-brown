<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	const { children, class: klass = '', ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={'flex flex-col mx-auto gap-20 py-20 max-w-[1250px] px-5 ' + klass} {...rest}>
	{#if children}
		{@render children()}
	{/if}
</div>
