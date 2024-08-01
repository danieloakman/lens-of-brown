<script lang="ts">
	import { omit } from 'js-utils';
	const {
		horizontal = false,
		vertical = false,
		width = 2,
		class: klass = ''
	}: { vertical?: boolean; horizontal?: boolean; width?: number; class?: string } = $props();
</script>

{#if horizontal}
	<hr style={`border-top-width:${width}px`} class={klass} />
{:else if vertical}
	<span class={'divider-vertical w-full ' + klass} style={`border-left-width:${width}px`}> </span>
{:else}
	<span>Did not specify type of divider!</span>
{/if}
