// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	declare module "*&any" {
		/**
		 * @description Replaces the type of the import with `any` to remove type error for using imagetools directives.
		 * @see {@link https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts} Code
		 * @see {@link https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata} Docs
		 */
		const out;
		export default out;
	}
}


/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />
export {};
