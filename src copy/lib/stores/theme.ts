import { firstValue } from '@together/shared/utils';
import * as convert from 'color-convert';
import type { RGB } from 'color-convert/conversions';
import { iter, range } from 'iteragain';
import { lerp } from 'js-utils';
import { writable } from 'svelte/store';

export type HEX = `#${string}`;
// export type ColourRGB = [r: number, g: number, b: number];
// export type ColourHSL = [h: number, s: number, l: number];
export type HTMLSize = `${number}${'px' | 'em' | 'rem'}`;

export interface Theme {
	name: string;
	colour: {
		primary: HEX;
		secondary: HEX;
		tertiary: HEX;
		success: HEX;
		warning: HEX;
		error: HEX;
		surface: HEX;
	};
	'font-family-base'?: string;
	'font-family-heading'?: string;
	'font-color-base'?: HEX;
	'font-color-dark'?: HEX;
	'rounded-base'?: HTMLSize;
	'rounded-container'?: HTMLSize;
	'border-base'?: HTMLSize;
}

// TODO: put back preference store
export const currentTheme = writable<Theme | null>(null); //preferenceStore<Theme | null>('theme', null);

currentTheme.subscribe((theme) => {
	if (theme) setTheme(theme);
});

export const themes = writable<Theme[]>([]); // preferenceStore<Theme[]>('themes', []);

function calcShades(
	middleShade: RGB | HEX,
	options: {
		numOfShades?: number;
		/** Minimun luminosity. */
		minL?: 1;
		/** Maximum luminosity. */
		maxL?: 80;
	} = {}
) {
	const [h, s, l] =
		typeof middleShade === 'string' ? convert.hex.hsl(middleShade) : convert.rgb.hsl(middleShade);
	const numOfShades = options.numOfShades ?? 10;
	const minL = options.minL ?? 1;
	const maxL = options.maxL ?? 80;
	return iter(range(numOfShades)).map((i) => convert.hsl.rgb([h, s, lerp(minL, maxL, i / 10)]));
}

const shadeSuffixes = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function setTheme(theme: Theme): void {
	for (const [color, hex] of Object.entries(theme.colour)) {
		for (const [rgb, shade] of calcShades(hex).zip(shadeSuffixes)) {
			document.documentElement.style.setProperty(`--color-${color}-${shade}`, rgb.join(' '));
		}
	}
	document.documentElement.style.setProperty(
		'--theme-font-family-base',
		theme['font-family-base'] ?? 'system-ui'
	);
	document.documentElement.style.setProperty(
		'--theme-font-family-heading',
		theme['font-family-heading'] ?? 'system-ui'
	);
	document.documentElement.style.setProperty(
		'--theme-font-color-base',
		theme['font-color-base'] ?? '0 0 0'
	);
	document.documentElement.style.setProperty(
		'--theme-font-color-dark',
		theme['font-color-dark'] ?? '255 255 255'
	);
	document.documentElement.style.setProperty(
		'--theme-rounded-base',
		theme['rounded-base'] ?? '9999px'
	);
	document.documentElement.style.setProperty(
		'--theme-rounded-container',
		theme['rounded-container'] ?? '8px'
	);
	document.documentElement.style.setProperty('--theme-border-base', theme['border-base'] ?? '1px');
}

if (import.meta.vitest) {
	const { describe, it, expect } = import.meta.vitest;

	describe('theme.ts', () => {
		it('calcShades', async () => {
			const shades = calcShades([246, 211, 45]);
			expect(shades.toArray()).toHaveLength(10);
		});

		it.skip('currentTheme & themes', async () => {
			expect(await firstValue(currentTheme)).toBeNull();
			expect(await firstValue(themes)).toHaveLength(0);
			themes.set([
				{
					name: 'test',
					colour: {
						primary: '#000000',
						secondary: '#000000',
						tertiary: '#000000',
						success: '#000000',
						warning: '#000000',
						error: '#000000',
						surface: '#000000'
					}
				}
			]);
			expect(await firstValue(themes)).toHaveLength(1);
		});
	});
}
