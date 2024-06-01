import type { Action } from 'svelte/action';

// export type StateFn<T extends Fn, FnName extends string = 'call'> = {
// 	[P in FnName]: (...args: Parameters<T>) => ReturnType<T> | undefined;
// } & Record<
// 	// `loading` is just an alias for `submitting`:
// 	FnName extends 'call' ? `loading` : `${FnName}Loading`,
// 	Readable<boolean>
// > &
// 	Record<FnName extends 'call' ? `submitting` : `${FnName}Submitting`, Readable<boolean>> &
// 	Record<FnName extends 'call' ? `delayed` : `${FnName}Delayed`, Readable<boolean>> &
// 	Record<FnName extends 'call' ? `timeout` : `${FnName}Timeout`, Readable<boolean>> &
// 	Record<FnName extends 'call' ? 'error' : `${FnName}Error`, Writable<Error | null>>;

// export const statefulFn = <T extends Fn, FnName extends string = 'call'>(
// 	fn: T,
// 	{
// 		name,
// 		delayMs = 2000,
// 		timeoutMs = 30000
// 	}: {
// 		name?: FnName;
// 		delayMs?: number;
// 		timeoutMs?: number;
// 	} = {}
// ): StateFn<T, FnName> => {
// 	const { start, stop, submitting, delayed, timeout } = timedState(delayMs, timeoutMs);
// 	const error = writable<Error | null>(null);

// 	const call = async (...args: Parameters<T>) => {
// 		if (get(submitting)) return;
// 		start();
// 		try {
// 			return await fn(...args);
// 		} catch (err: unknown) {
// 			error.set(err instanceof Error ? err : new Error(errorMessage(err)));
// 			// Returns undefined here.
// 		} finally {
// 			stop();
// 		}
// 	};

// 	if (name) {
// 		return {
// 			[name]: call,
// 			[name + 'Loading']: submitting,
// 			[name + 'Submitting']: submitting,
// 			[name + 'Delayed']: delayed,
// 			[name + 'Timeout']: timeout,
// 			[name + 'Error']: error
// 		} as StateFn<T, FnName>;
// 	}
// 	return { call, loading: submitting, submitting, delayed, timeout, error } as unknown as StateFn<
// 		T,
// 		FnName
// 	>;
// };

/** Disables this node when running a particular event handler. */
export const disableWhenHandling: Action<
	HTMLButtonElement | HTMLInputElement,
	{ click?: (ev: MouseEvent) => unknown; change?: (ev: Event) => unknown }
> = (node, events) => {
	// The handler functions needs to be passed in as an action param as otherwise it's not possible/too difficult to remove and re-add the event listeners with our own.
	const update = () => {
		for (const [eventName, handler] of Object.entries(events)) {
			node.addEventListener(eventName, async (e) => {
				if (node.disabled) return;
				node.disabled = true;
				try {
					await handler(e as any);
				} finally {
					node.disabled = false;
				}
			});
		}
	};
	update();
	return {
		update
	};
};
