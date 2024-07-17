const _IMG_SLUGS = [
	'portraits',
	'families',
	'couples',
	'landscapes',
	'weddings',
	'events',
	'animals'
] as const;

export const IMG_SLUGS: readonly string[] = _IMG_SLUGS;

export type ImgSlug = (typeof _IMG_SLUGS)[number];
