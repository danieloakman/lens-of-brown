#! bun
import { $ } from 'bun';
import { stat, writeFile } from 'fs/promises';
import { globIterateSync } from 'glob';
import { join, relative, sep } from 'path';

if (import.meta.main) {
	const rootPath = join(import.meta.dir, '..');
	const staticManifestPath = join(rootPath, 'src/lib/static-manifest.ts');
	const staticPath = join(rootPath, 'static');

	const json: Record<string, any> = {};
	for (const file of globIterateSync(join(rootPath, 'static/**/*'))) {
		const s = await stat(file);
		if (!s.isFile()) continue;
		const relativePath = relative(staticPath, file);
		let current = json;
		const parts = relativePath.split(sep);
		while (parts.length) {
			const part = parts.shift()!;
			if (parts.length) current = current[part] ? current[part] : (current[part] = {});
			else current[part] = relativePath;
		}
	}

	console.log(`Writing static manifest file to ${relative(rootPath, staticManifestPath)}`);

	await writeFile(
		staticManifestPath,
		`
export const STATIC_FILES = ${JSON.stringify(json, null, 2)} as const;
`.trimStart()
	);

	await $`prettier --write ${staticManifestPath}`;
}
