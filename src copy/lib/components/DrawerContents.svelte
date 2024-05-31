<script>
	import {
		logout,
		LogoutIcon,
		currentUserAvatar,
		familyRecord,
		currentTheme,
		pb,
		UpDownArrowCircleIcon,
		drawerContentStore
	} from '$lib';
	import { Avatar, getDrawerStore, LightSwitch } from '@skeletonlabs/skeleton';
	import { map, startWith } from 'rxjs';

	const drawerStore = getDrawerStore();
	const familyName = familyRecord.state$.pipe(
		map((state) => state.name),
		startWith('No family')
	);
</script>

{#if $drawerStore.open}
	<div class="m-4 flex justify-between items-center">
		<!-- <button class="btn-icon variant-filled-primary" on:click={family.reload}>
			<RefreshIcon />
		</button> -->

		<LightSwitch />

		<Avatar src={$currentUserAvatar} />

		<button
			class="btn-icon variant-filled-primary"
			on:click={() => {
				logout();
				drawerStore.close();
			}}
		>
			<LogoutIcon />
		</button>
	</div>
	<hr />

	{#if $drawerContentStore}
		<svelte:component this={$drawerContentStore} />
	{:else}
		<div class="flex flex-col gap-2 m-4">
			<span>Family: {$familyName}</span>

			<button
				class="btn varient-filled-primary"
				on:click={() => {
					currentTheme.set({
						name: 'sahara',
						colour: {
							primary: '#ff0000',
							secondary: '#00ff00',
							tertiary: '#0000ff',
							error: '#ff0000',
							warning: '#ffff00',
							success: '#00ff00',
							surface: '#dddddd'
						}
					});
					// setTheme({
					// });
				}}
			>
				Set Theme
			</button>
		</div>
	{/if}

	<UpDownArrowCircleIcon
		class={'absolute right-5 top-5 ' + (pb.realtime.isConnected ? 'text-success-500' : '')}
	/>
{/if}
