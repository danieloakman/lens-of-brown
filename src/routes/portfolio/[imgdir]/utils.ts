const _IMG_DIRS = [
	'portraits',
	'families',
	'couples',
	'landscapes',
	'weddings',
	'events',
	'animals'
] as const;

export const IMG_DIRS: readonly string[] = _IMG_DIRS;

export type ImgDir = typeof _IMG_DIRS[number];