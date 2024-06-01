<script lang="ts">
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { sleep, uniqueId } from 'js-utils';
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { writable } from 'svelte/store';

	type $$Props = HTMLAttributes<HTMLElementTagNameMap['button']> & {
		event?: Exclude<PopupSettings['event'], 'hover'>;
		placement?: PopupSettings['placement'];
		popupClass?: string;
	};

	const id = uniqueId('popup-');
	const isOpen = writable(false);
	export let event: NonNullable<$$Props['event']> = 'click'; // Can't use 'hover' with mobile.
	export let placement: PopupSettings['placement'] = 'bottom';
	/** The z-index of the popup html content */
	export let zindex = 50;

	let button: HTMLButtonElement;
	let invisible = true;
	onMount(async () => {
		// Resets the popup's visibility on mount:
		button.click();
		button.click();
		sleep(500).then(() => {
			invisible = false;
		});
	});
</script>

<button
	bind:this={button}
	type="button"
	use:popup={{
		event,
		target: id,
		placement,
		state: ({ state }) => isOpen.set(state)
	}}
	{...$$restProps}
>
	<slot name="button" />
</button>

<div class="take-no-space" class:invisible style:z-index={zindex} data-popup={id}>
	<slot name="popup" />
</div>
