#! bun
import { $ } from 'bun';
import { existsSync } from 'fs';
import { copyFile } from 'fs/promises';
import { readFile } from 'fs/promises';
import { writeFile } from 'fs/promises';
import { stat } from 'fs/promises';
import { globIterate } from 'glob';
import { once, raise } from 'js-utils';
import { tmpdir } from 'os';
import { basename, join, sep } from 'path';

const checkInstaloader = once(() =>
	$`instaloader --version`.then((data) => {
		const version = data.text();
		if (!version.startsWith('4.')) {
			console.error(`instaloader version is ${version}, expected >= v4.x.x`);
			process.exit(1);
		}
	})
);

async function downloadRecentPosts({ count = 10 }: { count?: number } = {}) {
	if (process.env.CI) {
		console.log('Skipping download of recent Instagram posts in CI');
		return;
	}

	await checkInstaloader();

	const saveDir = join(import.meta.dir, '../src/lib/imgs/lens.ofbrown');
	await $`rm -rf ${saveDir} && mkdir -p ${saveDir}`;
	const tmpDir = join(tmpdir(), 'lens.ofbrown');

	// Download + 4 to account for pinned posts, which we don't want.
	await $`instaloader lens.ofbrown --no-profile-pic --count ${count + 5} --no-compress-json --no-videos --dirname-pattern "${tmpDir}"`;

	const alts: Record<string, string> = {};
	for await (const path of globIterate(`${tmpDir}${sep}*UTC.json`)) {
		const stats = await stat(path);
		if (!stats.isFile()) continue;
		if (path.endsWith('.json')) {
			const json: {
				node?: { pinned_for_users?: { username: string }[]; accessibility_caption?: string };
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
				const dest = join(saveDir, basename(src));
				await copyFile(src, dest);
				console.log(`Copied ${dest}`);

				// Add alt text
				alts[basename(src)] =
					json.node?.accessibility_caption ??
					raise(`No caption/alt text found for post ${basename(src)}`);
				break;
			}
		}
  }

  const altPath = join(saveDir, 'alts.json');
  await writeFile(altPath, JSON.stringify(alts, null, 2));
  console.log(`Wrote ${altPath}`);
}

if (import.meta.main) {
	await Promise.all([downloadRecentPosts()]);
}
