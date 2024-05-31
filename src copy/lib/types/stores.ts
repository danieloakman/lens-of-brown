import type { MonoFn } from 'js-utils';
import type { Readable, Writable } from 'svelte/store';

export interface Reloadable<T> extends Writable<T> {
	reload(): void;
}

/** One or more `Readable`s. Use this over the svelte-asyncable package's types */
export type Stores =
	| Readable<any>
	| [Readable<any>, ...Array<Readable<any>>]
	| Array<Readable<any>>;

/** One or more values from `Readable` stores. Use this over the svelte-asyncable package's types */
export type StoresValues<T> =
	T extends Readable<infer U>
		? U
		: {
				[K in keyof T]: T[K] extends Readable<infer U> ? U : never;
			};

export type StoreSource<T extends Readable<any>> = T extends Readable<infer U> ? U : never;

export type StoreMonoFn<A, B = A> = MonoFn<Readable<A>, Readable<B>>;
