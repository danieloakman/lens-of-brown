import { error } from '@sveltejs/kit';

import { IMG_SLUGS } from './utils';

export async function load({ params }) {
	if (!IMG_SLUGS.includes(params.slug))
		error(404, { message: `"${params.slug}" portfolio not found.` });
	return {};
}
