import { writable } from 'svelte/store';

import { browser } from '$app/environment';

export const windowSize = writable({ width: 0, height: 0 });
if (browser) {
	windowSize.set({ width: window.innerWidth, height: window.innerHeight });
	window.addEventListener('resize', () =>
		windowSize.set({ width: window.innerWidth, height: window.innerHeight })
	);
}
