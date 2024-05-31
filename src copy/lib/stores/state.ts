import { PB, PBAuthRecordService, PBRecordService } from '@together/shared/utils';
import { once } from 'js-utils';
import { AsyncAuthStore } from 'pocketbase';

import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import type { Family, List, ListItem, Recipe, User } from '$types';
import { preferences } from '$utils';

export const pb = new PB(
	PUBLIC_POCKETBASE_URL,
	new AsyncAuthStore({
		save: async (s) => {
			await preferences.set('pb_auth', s);
		},
		initial: preferences.get('pb_auth').catch(),
		clear: async () => {
			await preferences.delete('pb_auth');
		}
	})
);

export const collections = {
	families: once(() => new PBRecordService<Family>(pb, 'families')),
	users: once(() => new PBAuthRecordService<User>(pb, 'users')),
	lists: once(() => new PBRecordService<List>(pb, 'lists')),
	listItems: once(() => new PBRecordService<ListItem>(pb, 'list_items')),
	recipes: once(() => new PBRecordService<Recipe>(pb, 'recipes'))
};
