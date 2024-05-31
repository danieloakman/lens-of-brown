<script lang="ts">
	import { VisibilityOnIcon, VisibilityOffIcon } from '$icons';

	export let value = '';
	export let visible = false;
	$: type = visible ? 'text' : 'password';
	export let disabled = false;
	export let label = 'Password';
</script>

<label class="label">
	<span>{label}</span>
	<div class="input-group input-group-divider grid-cols-[1fr_auto]">
		<input bind:value {...{ type }} {disabled} />
		<button type="button" class="btn" on:click={() => (visible = !visible)}>
			{#if visible}
				<VisibilityOnIcon />
			{:else}
				<VisibilityOffIcon />
			{/if}
		</button>
	</div>
</label>
