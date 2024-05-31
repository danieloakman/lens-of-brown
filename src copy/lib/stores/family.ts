import type { ListStoreOptions } from '@together/shared/utils';
import { derived } from 'svelte/store';

import { currentUser } from './auth';
import { urlSearchParamsObj } from './misc';
import { collections } from './state';

/** The current user's family ID. Will be empty string if they're not in a family. */
export const familyId = derived(currentUser, (u) => u?.family ?? '');

// TODO: maybe make an empty record ref that we could use here:
export const familyRecord = collections.families().recordStore(familyId);

export const recipeList = collections
	.recipes()
	.listStore(urlSearchParamsObj<ListStoreOptions>({ keepFocus: true }));

export const GROCERY_TAG = 'grocery';

export const groceryList = collections
	.listItems()
	.listStore({ filter: `tags ~ '${GROCERY_TAG}'`, sort: '-created' });
