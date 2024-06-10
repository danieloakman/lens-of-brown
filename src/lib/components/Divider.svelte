<script lang="ts">
	const {
		horizontal = true,
		vertical = false,
		width = 2
	}: { vertical?: boolean; horizontal?: boolean; width?: number } = $props();
</script>

{#if horizontal}
  <hr style={`border-top-width:${width}px`}/>
{:else if vertical}
	<span class="divider-vertical" style={`height:${width}px`}></span>
{/if}
