// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';
import type { Config } from 'tailwindcss';

import { brown1 } from './src/themes';

declare const require: NodeRequire;

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {},
		fontFamily: {
			'Black-mango': 'Black-mango',
			LongTime: 'LongTime'
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton({
			themes: {
				custom: [brown1]
			}
		})
	]
} satisfies Config;

export default config;
