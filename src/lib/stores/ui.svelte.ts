import { type Nullish } from 'js-utils';
import type { Component } from 'svelte';
import { writable } from 'svelte/store';

/**
 * A store for dynamically inserting/adding a component into the drawer
 */
export const drawerContentStore = writable<Nullish<Component>>();

export const windowSize = $state({ w: 0, h: 0 });
