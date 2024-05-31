import { InMemoryCache } from 'js-utils';

import { browser } from '$app/environment';
import type { DataCache } from '$types';
import {
	deleteFile,
	pathStats,
	readFile,
	readdir,
	safeCall,
	safeJSONParse,
	writeFile
} from '$utils';

class FSCache implements DataCache<unknown> {
	get size(): Promise<number> {
		return readdir('').then((files) => files.length);
	}

	async get<T = unknown>(key: string): Promise<T | null> {
		const result = await safeCall(async () => readFile(key));
		return result ? safeJSONParse(result) : null;
	}

	delete(key: string): Promise<boolean> {
		return deleteFile(key);
	}

	async set(key: string, value: unknown): Promise<boolean> {
		return Boolean(await writeFile(key, value));
	}

	async has(key: string): Promise<boolean> {
		const stats = await pathStats(key);
		return stats.type === 'file';
	}

	async clear(): Promise<boolean> {
		try {
			for await (const path of this.keys()) {
				await this.delete(path);
			}
			return true;
		} catch (err) {
			console.error('Failed to clear cache:', err);
			return false;
		}
	}

	async *keys(): AsyncIterableIterator<string> {
		const paths = await readdir('');
		for (const path of paths) {
			if (path.type !== 'file') continue;
			yield path.name;
		}
	}
}

/** A cache that reads and writes from the devices file system. */
export const fsCache: DataCache<unknown> = browser ? new FSCache() : new InMemoryCache();
