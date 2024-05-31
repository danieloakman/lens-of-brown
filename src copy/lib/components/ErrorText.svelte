<script lang="ts">
	import type { Nullish } from '$types';
	import { errorMessage } from '$utils';

	export let error: Nullish<string | string[] | Record<number, string>> | Error;
	// export let shade: 200 | 400 | 600 | 800 = 400;
	export let errorShade: `text-error-${100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}` =
		'text-error-400';

	$: message = errorMessage(error);
</script>

{#if message?.length}
	<span class={errorShade}>{message}</span>
{/if}
