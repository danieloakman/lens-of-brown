#! bun
import { $ } from 'bun';
import { existsSync } from 'fs';
import { copyFile, readFile, stat, writeFile } from 'fs/promises';
import { globIterateSync } from 'glob';
import { iter } from 'iteragain';
import { raise } from 'js-utils';
import { tmpdir } from 'os';
import { basename, join, sep } from 'path';

const BROWSER = 'vivaldi';

function parseDate(path: string) {
	const [date, time] = basename(path).split('_');
	return new Date(`${date!}T${time!.replaceAll('-', ':')}`);
}

/** Saves N most recent posts and their alt text to a directory. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function instaloaderDownload({ dest, count = 10 }: { count?: number; dest: string }) {
	const tmpDir = join(tmpdir(), 'instaloader-lens.ofbrown');

	const password = (await $`pass instagram.com | head -n1`.text()).trim();

	// No longer works after instagram api changes:
	// Download + 5 to account for pinned posts, which we don't want.
	await $`instaloader --no-profile-pic --count ${count + 5} --no-compress-json --no-videos --fast-update --dirname-pattern "${tmpDir}" --login danoaky -password ${password} lens.ofbrown`;

	const jsonPaths = iter(globIterateSync(`${tmpDir}${sep}*UTC.json`))
		.map((path) => ({
			path,
			date: parseDate(path)
		}))
		.sort((a, b) => b.date.getTime() - a.date.getTime())
		.slice(0, count)
		.map((v) => v.path);

	const alts: Record<string, string> = {};
	for (const path of jsonPaths) {
		const stats = await stat(path);
		if (!stats.isFile()) continue;
		if (path.endsWith('.json')) {
			const json: {
				node?: {
					pinned_for_users?: { username: string }[];
					accessibility_caption?: string;
					caption?: string;
				};
			} = await readFile(path, 'utf-8').then(JSON.parse);

			// Don't copy pinned posts
			if (json.node?.pinned_for_users?.some((user) => user.username === 'lens.ofbrown')) continue;

			// Attempt to find the first (if in a carousel) or only image for that post, then copy it to the saveDir:
			for (const imgPath of [
				() => path.replace('.json', '.jpg'),
				() => path.replace('.json', '_1.jpg'),
				() => raise(`No image found for ${path}`)
			]) {
				const src = imgPath();
				if (!existsSync(src)) continue;
				const destPath = join(dest, basename(src));
				await copyFile(src, destPath);
				console.log(`Copied ${destPath}`);

				// Add alt text
				alts[basename(src)] =
					json.node?.accessibility_caption ??
					(json.node?.caption
						? 'Lens of Brown Instagram post: ' + json.node?.caption
						: raise(`No caption/alt text found for post ${basename(src)}`));
				break;
			}
		}
	}

	const altPath = join(dest, 'alts.json');
	await writeFile(altPath, JSON.stringify(alts, null, 2));
	console.log(`Wrote ${altPath}`);
}

async function downloadRecentPosts({ count = 10 }: { count?: number } = {}) {
	if (process.env.CI) {
		console.log('Skipping download of recent Instagram posts in CI');
		return;
	}

	const saveDir = join(import.meta.dir, '../src/lib/imgs/lens.ofbrown');
	await $`rm -rf ${saveDir} && mkdir -p ${saveDir}`;
	const tmpDir = join(tmpdir(), 'lens.ofbrown');

	// Download + 5 to account for pinned posts, which we don't want.
	await $`gallery-dl --cookies-from-browser ${BROWSER} --range '1-${count + 6}' -d ${tmpDir} --write-metadata --write-info-json --write-tags https://www.instagram.com/lens.ofbrown/`;

	await iter(globIterateSync(`${tmpDir}${sep}**${sep}*.jpg`))
		.map(async (path) => {
			const stats = await stat(path);
			if (!stats.isFile()) return;

			const destPath = join(saveDir, basename(path));
			await copyFile(path, destPath);
			console.log(`Copied ${path} -> ${destPath}`);
		})
		.promiseAll();

	// TODO: add alt text somehow with gallery-dl
	console.log('Writing empty alts.json');
	await writeFile(join(saveDir, 'alts.json'), '{}');
}

if (import.meta.main) await Promise.all([downloadRecentPosts()]);
