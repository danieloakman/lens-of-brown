import type { Action } from 'svelte/action';

export * from 'js-utils';

/**
 * @description A svelte action that will scroll the element into view on load.
 */
export const scrollIntoView: Action<HTMLElement> = (node) => node.scrollIntoView();
