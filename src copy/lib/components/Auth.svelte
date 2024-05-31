<script lang="ts">
	import { errorMessage, login, raise, statefulFn, toast, pb } from '$lib';
	import { ProgressRadial, focusTrap } from '@skeletonlabs/skeleton';
	import PasswordInput from './PasswordInput.svelte';
	import { map, startWith } from 'rxjs';
	import { dev } from '$app/environment';
	let username = '';
	let password = '';

	const { call: submit, loading } = statefulFn(() =>
		login(username, password).catch((err) => {
			const msg = errorMessage(err) || raise(err);
			toast.error(msg);
			password = '';
		})
	);

	$: username = username.trim();
	$: password = password.trim();

	let focusOnForm = false;
	setTimeout(() => (focusOnForm = true), 1000);
	const connection$ = pb.healthChecker$.pipe(
		map((v) => v.code === 200),
		startWith(false)
	);
</script>

<!-- Auth card looks weird in landscape mode. Maybe just lock orientation to portrait only. -->
<div class="card p-4 m-4 relative -bottom-1/4">
	<form class="flex flex-col gap-4" on:submit|preventDefault use:focusTrap={focusOnForm}>
		<label class="label">
			<span>Username or Email</span>
			<input
				bind:value={username}
				disabled={$loading}
				class="input"
				type="text"
				placeholder=""
				inputmode="email"
			/>
		</label>

		<PasswordInput disabled={$loading} bind:value={password} />

		<button
			disabled={$loading || !username.length || !password.length}
			on:click={submit}
			type="submit"
			class="btn variant-filled-primary w-full"
		>
			Log in
			{#if $loading}
				<ProgressRadial width="w-6" />
			{/if}
		</button>
	</form>

	{#if dev}
		<span>Connection to DB: {$connection$}</span>
	{/if}
</div>
