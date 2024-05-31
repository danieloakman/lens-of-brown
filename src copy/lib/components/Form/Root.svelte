<script lang="ts" generics="T extends Z.AnyZodObject">
	import type { SuperForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import type * as Z from 'zod';

	export let form: SuperForm<T>;
	export let debug: boolean = false;

	const data = form.form;
	const errors = form.errors;
</script>

<form use:form.enhance {...$$restProps} method="post">
	<slot />
</form>

{#if debug}
	<SuperDebug data={{ data: $data, errors: $errors }} />
{/if}
