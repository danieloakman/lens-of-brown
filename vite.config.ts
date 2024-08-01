import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		(Icons as any)({
			compiler: 'svelte',
			autoInstall: true
		}),
		purgeCss()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
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
