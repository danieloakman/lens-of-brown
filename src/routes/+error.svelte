<script lang="ts">
	import { page } from '$app/stores';
	import { capitalize } from 'js-utils';
</script>

<h1 class="text-4xl text-center font-Forum">Error</h1>
{#each Object.entries($page.error || {}) as [key, value]}
	<p class="text-3xl text-center font-Forum">{capitalize(key)} - {value}</p>
{/each}
