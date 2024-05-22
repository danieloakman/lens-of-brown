import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vitest/config';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

export default defineConfig({
	plugins: [
		sveltekit(),
		(Icons as any)({
			compiler: 'svelte',
			autoInstall: true
		}),
		purgeCss()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
