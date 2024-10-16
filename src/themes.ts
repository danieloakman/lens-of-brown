import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

const font = `Cormorant, Forum, Black-mango, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`;

export const brown1: CustomThemeConfig = {
	name: 'brown1',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': font,
		'--theme-font-family-heading': font,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #91540c
		'--color-primary-50': '239 229 219', // #efe5db
		'--color-primary-100': '233 221 206', // #e9ddce
		'--color-primary-200': '228 212 194', // #e4d4c2
		'--color-primary-300': '211 187 158', // #d3bb9e
		'--color-primary-400': '178 135 85', // #b28755
		'--color-primary-500': '145 84 12', // #91540c
		'--color-primary-600': '131 76 11', // #834c0b
		'--color-primary-700': '109 63 9', // #6d3f09
		'--color-primary-800': '87 50 7', // #573207
		'--color-primary-900': '71 41 6', // #472906
		// secondary | #c57312
		'--color-secondary-50': '246 234 219', // #f6eadb
		'--color-secondary-100': '243 227 208', // #f3e3d0
		'--color-secondary-200': '241 220 196', // #f1dcc4
		'--color-secondary-300': '232 199 160', // #e8c7a0
		'--color-secondary-400': '214 157 89', // #d69d59
		'--color-secondary-500': '197 115 18', // #c57312
		'--color-secondary-600': '177 104 16', // #b16810
		'--color-secondary-700': '148 86 14', // #94560e
		'--color-secondary-800': '118 69 11', // #76450b
		'--color-secondary-900': '97 56 9', // #613809
		// tertiary | #f9f06b
		'--color-tertiary-50': '254 253 233', // #fefde9
		'--color-tertiary-100': '254 252 225', // #fefce1
		'--color-tertiary-200': '254 251 218', // #fefbda
		'--color-tertiary-300': '253 249 196', // #fdf9c4
		'--color-tertiary-400': '251 245 151', // #fbf597
		'--color-tertiary-500': '249 240 107', // #f9f06b
		'--color-tertiary-600': '224 216 96', // #e0d860
		'--color-tertiary-700': '187 180 80', // #bbb450
		'--color-tertiary-800': '149 144 64', // #959040
		'--color-tertiary-900': '122 118 52', // #7a7634
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #ed333b
		'--color-error-50': '252 224 226', // #fce0e2
		'--color-error-100': '251 214 216', // #fbd6d8
		'--color-error-200': '251 204 206', // #fbccce
		'--color-error-300': '248 173 177', // #f8adb1
		'--color-error-400': '242 112 118', // #f27076
		'--color-error-500': '237 51 59', // #ed333b
		'--color-error-600': '213 46 53', // #d52e35
		'--color-error-700': '178 38 44', // #b2262c
		'--color-error-800': '142 31 35', // #8e1f23
		'--color-error-900': '116 25 29', // #74191d
		// surface | #d9c2af
		'--color-surface-50': '249 246 243', // #f9f6f3
		'--color-surface-100': '247 243 239', // #f7f3ef
		'--color-surface-200': '246 240 235', // #f6f0eb
		'--color-surface-300': '240 231 223', // #f0e7df
		'--color-surface-400': '228 212 199', // #e4d4c7
		'--color-surface-500': '217 194 175', // #d9c2af
		'--color-surface-600': '195 175 158', // #c3af9e
		'--color-surface-700': '163 146 131', // #a39283
		'--color-surface-800': '130 116 105', // #827469
		'--color-surface-900': '106 95 86' // #6a5f56
	}
};
