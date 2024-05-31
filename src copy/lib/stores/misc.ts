import { iter } from 'iteragain';
import 'js-utils';
import { type Writable, derived } from 'svelte/store';

import { goto } from '$app/navigation';
import { page } from '$app/stores';
import type { Dictionary } from '$types';
import { firstValue, isObjectLike, ok, proxy, safeParseFloat, safeParseInt } from '$utils';

// import { getDrawerStore } from '@skeletonlabs/skeleton';

/** Whether or not the Skeleton UI drawer is open. */
// export const isDrawerOpen = derived(getDrawerStore(), ($drawer) => $drawer.open ?? false);

/** E.g. ['users', '[id]', 'data'] */
export const routes = derived(page, (p) => p.route.id?.split('/').filter(Boolean) ?? []);

/**
 * Allows control over the route's search params. Makes use of the `goto` function to update the URL, so it needs to be
 * created within a svelte component.
 */
export const urlSearchParams = (
	options: Parameters<typeof goto>[1] = {}
): Writable<URLSearchParams> => {
	const { subscribe } = derived(page, (p) => p?.url?.searchParams ?? new URLSearchParams());
	return {
		subscribe,
		update: (updater) =>
			firstValue({ subscribe }).then((params) => goto(`?${updater(params).toString()}`, options)),
		set: (params) => goto(`?${params.toString()}`, options)
	};
};

/** A wrapper for `urlSearchParams` so search params can be handled like an object. */
export const urlSearchParamsObj = <T extends Dictionary = Dictionary>(
	options: Parameters<typeof goto>[1] = {}
): Writable<T> => {
	return proxy(urlSearchParams(options), {
		to: (params) => {
			if (!params || !isObjectLike(params)) return {} as T;
			return Object.fromEntries(
				iter(params).map(([k, v]) => {
					if (v === 'true') return [k, true];
					if (v === 'false') return [k, false];
					if (v.includes('.')) {
						const float = safeParseFloat(v);
						if (float != null) return [k, float];
					}
					const int = safeParseInt(v);
					if (int != null) return [k, int];
					return [k, v];
				})
			) as unknown as T;
		},
		from: (obj) =>
			new URLSearchParams(
				iter(Object.entries(obj))
					.filter(([_, v]) => v !== undefined)
					.map(([k, v]) => [k, ok(v).toString()])
					.toArray()
			)
	});
};
