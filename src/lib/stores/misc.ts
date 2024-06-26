import { derived } from 'svelte/store';

import { page } from '$app/stores';

/** E.g. ['users', '[id]', 'data'] */
export const routes = derived(page, (p) => p.route.id?.split('/').filter(Boolean) ?? []);
