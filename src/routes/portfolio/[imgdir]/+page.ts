import { error } from '@sveltejs/kit';

import { IMG_DIRS } from './utils';

export async function load({ params }) {
	if (!IMG_DIRS.includes(params.imgdir))
		error(404, { message: `"${params.imgdir}" portfolio not found.` });
	return {};
}
