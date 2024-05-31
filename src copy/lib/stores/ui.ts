import { type Nullish, iife } from 'js-utils';
import type { ComponentType } from 'svelte';
import { screenOrientation as screenOrientationStore, windowSizeStore } from 'svelte-legos';
import { derived, writable } from 'svelte/store';

/** A store for dynamically inserting a component into the header (next to the top right drawer button). */
export const headerStore = writable<Nullish<ComponentType>>();

/**
 * A store for dynamically inserting/adding a component into the drawer. It will appear underneath the static log
 * out button and avatar, etc.
 */
export const drawerContentStore = writable<Nullish<ComponentType>>();

/** Width and height of the window. */
export const windowSize = windowSizeStore({ window });

/** The max height that the window has been resized to. */
export const maxWindowHeight = derived(
	windowSize,
	iife(
		(h = -Infinity) =>
			({ height }) =>
				(h = Math.max(h, height))
	)
);

export const screenOrientation = screenOrientationStore();

/** This is an estimate. */
export const mobileKeyboardVisible = derived(
	[windowSize, maxWindowHeight, screenOrientation],
	([{ height }, maxHeight, { isSupported, orientation }]) => {
		if (!isSupported || !orientation.includes('portrait')) return false;
		return height < maxHeight * 0.8;
	}
);
