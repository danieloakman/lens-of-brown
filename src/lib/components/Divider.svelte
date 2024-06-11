<script lang="ts">
	import { omit } from 'js-utils';
	const {
		horizontal = false,
		vertical = false,
		width = 2,
		...rest
	}: { vertical?: boolean; horizontal?: boolean; width?: number; class?: string } = $props();
</script>

{#if horizontal}
	<hr style={`border-top-width:${width}px`} {...rest} />
{:else if vertical}
	<span
		class={'divider-vertical w-full' + rest.class}
		style={`border-left-width:${width}px`}
		{...omit(rest, 'class')}
	>
	</span>
{:else}
	<span>Did not specify type of divider!</span>
{/if}
