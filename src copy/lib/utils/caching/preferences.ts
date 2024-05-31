import { Preferences } from '@capacitor/preferences';
import { InMemoryCache, constant } from 'js-utils';

import { browser } from '$app/environment';
import type { DataCache } from '$types';
import { safeJSONParse } from '$utils';

class PreferencesCache implements DataCache<unknown> {
	get size(): Promise<number> {
		return Preferences.keys().then((v) => v.keys.length);
	}

	async get<T = unknown>(key: string): Promise<T | null> {
		const { value } = await Preferences.get({ key });
		return safeJSONParse(value ?? '');
	}

	set(key: string, value: any) {
		return Preferences.set({
			key,
			value: typeof value !== 'string' ? JSON.stringify(value) : value
		})
			.then(constant(true))
			.catch(constant(false));
	}

	delete(key: string): Promise<boolean> {
		return Preferences.remove({ key }).then(constant(true)).catch(constant(false));
	}

	has(key: string): Promise<boolean> {
		return Preferences.get({ key })
			.then((v) => !!v.value)
			.catch(constant(false));
	}

	clear(): Promise<boolean> {
		return Preferences.clear().then(constant(true)).catch(constant(false));
	}

	async *keys() {
		yield* (await Preferences.keys()).keys;
	}
}

/** A cache that stores data using Capacitor's preferences API. */
export const preferences: DataCache<unknown> = browser
	? new PreferencesCache()
	: new InMemoryCache();
