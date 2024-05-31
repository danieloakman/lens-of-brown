import { toast } from '../utils/toast';
import { toReadable } from '@together/shared/utils';
import { once, propIs } from 'js-utils';
import { derived, writable } from 'svelte/store';

import { goto } from '$app/navigation';
import type { User } from '$types';

import { collections, pb } from './state';

/** The currently logged in user. Doesn't have any expanded fields.  */
export type CurrentUser = Omit<User, 'expand'>;

/** Internal auth store. */
const store = writable(pb.authStore.model as CurrentUser | null);

/** If null then is not auth'd. */
export const currentUser = toReadable(store);

export const isLoggedIn = derived(store, (u) => u != null);

export const currentUserAvatar = derived(store, (u) => {
	if (!u?.avatar) return 'default-avatar.png';
	return pb.files.getUrl(u, u.avatar);
});

const logoutIfInvalidAuth = once(async () => {
	if (
		propIs(pb.authStore.model, 'id', 'string') &&
		(pb.authStore.model.id.length !== 15 ||
			!pb.authStore.isValid ||
			!(await collections.users().userExists(pb.authStore.model.id)))
	) {
		setTimeout(() => toast.error('Your session has expired. Please log in again.'), 1);
		await logout();
	} else if (!pb.authStore.model) {
		await goto('/');
	}
});

pb.authStore.onChange(async (_auth) => {
	store.set(pb.authStore.model as CurrentUser | null);
	await logoutIfInvalidAuth();
}, true);

export async function logout() {
	pb.authStore.clear();
	await goto('/');
}

export async function login(usernameOrEmail: string, password: string) {
	return collections.users().authWithPassword(usernameOrEmail.toLowerCase(), password, {});
}

// export function loginWithProvider(provider: 'google' | 'apple') {
//   return pb.collection('users').authWithOAuth2({ provider });
// }
