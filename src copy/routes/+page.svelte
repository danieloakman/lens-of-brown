<script>
	import Auth from '$components/Auth.svelte';
	import { currentUser, toast, once } from '$lib';

	const hiTrotty = once(() => toast.success('Hello Trotty, I love you very much!'));
	$: if ($currentUser?.email.toLowerCase().includes('sheridan_brown')) hiTrotty();
</script>

{#if $currentUser == null}
	<Auth />
{:else}
	<a href="about">About</a>
	<a href="settings">Settings</a>
{/if}
