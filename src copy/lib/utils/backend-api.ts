import { errorMessage, firstValue } from '@together/shared/utils';

import { goto } from '$app/navigation';
import { PUBLIC_BACKEND_API_ENDPOINT } from '$env/static/public';
import { collections, familyRecord } from '$stores';
import type { BaseRecord, Recipe } from '$types';

import { statefulFn } from './misc';
import { toast } from './toast';

/** Sends a webpage to the backend for web-scraping a recipe out of it. */
export const parseAndAddRecipeFromUrl = statefulFn(
	async (url: string) => {
		const rawRecipe: Omit<Recipe, keyof BaseRecord> = await fetch(
			`${PUBLIC_BACKEND_API_ENDPOINT}/parse/webpage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ url })
			}
		).then(async (res) => {
			if (res.ok) return res.json();
			throw new Error(await res.text());
		});
		const recipe = await firstValue(collections.recipes().create(rawRecipe));
		await familyRecord.set({ 'recipes+': recipe.id });
		toast.success(`"${recipe.name}" added!`, {
			action: {
				label: 'Show',
				response: () => goto(`/recipes/${recipe.id}`)
			}
		});
	},
	{ delayMs: 3000, timeoutMs: 30000 }
);
parseAndAddRecipeFromUrl.error.subscribe((err) => {
	if (err) {
		toast.error('Failed to add recipe: ' + errorMessage(err));
	}
});
