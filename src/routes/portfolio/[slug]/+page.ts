import { error } from '@sveltejs/kit';
import { capitalize } from 'js-utils';

import { IMG_SLUGS } from './utils';

export async function load({ params }) {
	if (!IMG_SLUGS.includes(params.slug))
		error(404, { message: `"${params.slug}" portfolio not found.` });

	return {
		title: `${capitalize(params.slug)} Portfolio - Lens of Brown`,
		description: `Lens of Brown's portfolio for ${params.slug}.`
	};
}
