import { Directory, Encoding, Filesystem as fs } from '@capacitor/filesystem';
import { attempt, once, safeJSONParse } from 'js-utils';

import { browser } from '$app/environment';

export async function writeFile(path: string, data: any, directory = Directory.Data) {
	if (!browser) return null;

	const result = await fs.writeFile({
		path,
		directory,
		data: typeof data === 'string' ? data : JSON.stringify(data),
		encoding: Encoding.UTF8
	});
	if (result instanceof Error) {
		console.error('writeFile err:', result);
		return null;
	}
	return result.uri;
}

export async function readFile<T = any>(
	path: string,
	directory = Directory.Data
): Promise<T | null> {
	if (!browser) return null;

	const result = await fs.readFile({
		path,
		directory,
		encoding: Encoding.UTF8
	});
	if (result instanceof Error) {
		console.error('readFile err:', result);
		return null;
	}
	return safeJSONParse(result.data.toString()) ?? (result.data as T);
}

export async function readdir(path: string, directory = Directory.Data) {
	if (!browser) return [];

	const result = await attempt(() => fs.readdir({ path, directory }));
	if (result instanceof Error) {
		console.error('readdir err:', result);
		return [];
	}
	return result.files;
}

export async function deleteFile(path: string, directory = Directory.Data) {
	if (!browser) return false;

	const result = await attempt(() => fs.deleteFile({ path, directory }));
	if (result instanceof Error) {
		console.error('deleteFile err:', result);
		return false;
	}
	return true;
}

export const checkPerms = once(async () => {
	if (!browser) return false;

	const result = await attempt(() => fs.requestPermissions());
	if (result instanceof Error) {
		console.error('checkPerms err:', result);
		return false;
	}
	return true;
});

export async function pathStats(path: string, directory = Directory.Data) {
	return fs.stat({ path, directory });
}
