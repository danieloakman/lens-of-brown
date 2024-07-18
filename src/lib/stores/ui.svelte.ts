import { type Nullish } from 'js-utils';
import type { Component } from 'svelte';
// import { screenOrientation as screenOrientationStore, windowSizeStore } from 'svelte-legos';
import { writable } from 'svelte/store';

/** A store for dynamically inserting a component into the header (next to the top right drawer button). */
export const headerStore = writable<Nullish<Component>>();

/**
 * A store for dynamically inserting/adding a component into the drawer
 */
export const drawerContentStore = writable<Nullish<Component>>();

export const windowSize = $state({ w: 0, h: 0 });

// /** Width and height of the window. */
// export const windowSize = windowSizeStore({ window });

// /** The max height that the window has been resized to. */
// export const maxWindowHeight = derived(
// 	windowSize,
// 	iife(
// 		(h = -Infinity) =>
// 			({ height }) =>
// 				(h = Math.max(h, height))
// 	)
// );

// export const screenOrientation = screenOrientationStore();

// /** This is an estimate. */
// export const mobileKeyboardVisible = derived(
// 	[windowSize, maxWindowHeight, screenOrientation],
// 	([{ height }, maxHeight, { isSupported, orientation }]) => {
// 		if (!isSupported || !orientation.includes('portrait')) return false;
// 		return height < maxHeight * 0.8;
// 	}
// );
