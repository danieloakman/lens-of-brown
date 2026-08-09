<script lang="ts">
	import { capitalize } from 'js-utils';

	import { page } from '$app/state';
</script>

<h1 class="text-4xl text-center font-Forum">Error</h1>
{#each Object.entries(page.error || {}) as [key, value] (key)}
	<p class="text-3xl text-center font-Forum">{capitalize(key)} - {value}</p>
{/each}
