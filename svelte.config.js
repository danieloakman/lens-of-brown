import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true,
			trailingSlash: 'always'
		}),
		alias: {
			$components: './src/lib/components',
			$icons: './src/lib/icons',
			// $services: './src/lib/services',
			$stores: './src/lib/stores',
			$types: './src/lib/types',
			$utils: './src/lib/utils',
			$constants: './src/lib/constants.ts'
		}
	}
};

export default config;
