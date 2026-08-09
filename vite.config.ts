import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import type { Plugin } from 'vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { defineConfig } from 'vitest/config';

/** SvelteKit forces `build.cssMinify: true`; Vite 8 maps that to lightningcss, which rejects some forms CSS. */
function forceEsbuildCssMinify(): Plugin {
	return {
		name: 'force-esbuild-css-minify',
		configResolved(config) {
			config.build.cssMinify = 'esbuild';
			for (const environment of Object.values(config.environments)) {
				environment.build.cssMinify = 'esbuild';
			}
		}
	};
}

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		forceEsbuildCssMinify(),
		(Icons as any)({
			compiler: 'svelte',
			autoInstall: true
		}),
		purgeCss()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		passWithNoTests: true
	},
	define: {
		'import.meta.vitest': undefined
	},
	optimizeDeps: {
		entries: ['iteragain', 'js-utils']
	}
	// server: {
	// 	fs: {
	// 		allow: ['static']
	// 	}
	// }
});
