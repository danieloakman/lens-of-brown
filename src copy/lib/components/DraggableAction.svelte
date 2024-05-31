<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { propIs } from 'js-utils';
	import { writable } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';

	export let axis: 'x' | 'y';
	/** In pixels (default: 56px). */
	export let dragAmount: number = 56;
	export let dragElastic: number = 0.5;
	const dispatch = createEventDispatcher<{ dragged: 'left' | 'right' | 'up' | 'down' }>();

	const dragged = writable({ x: 0, y: 0 });

	function toPoint(v: unknown): { x: number; y: number } {
		if (propIs(v, 'x', 'number') && propIs(v, 'y', 'number')) {
			return v;
		}
		throw new TypeError('Expected an object with x and y properties.');
	}
</script>

<Motion
	{dragElastic}
	drag={axis}
	dragConstraints={axis === 'x' ? { left: 0, right: 0 } : { top: 0, bottom: 0 }}
	let:motion
	onUpdate={(v) => dragged.set(toPoint(v))}
	onDragEnd={() => {
		const d = $dragged;
		if (Math.abs(d[axis]) >= dragAmount) {
			if (d.x < 0) dispatch('dragged', 'left');
			else if (d.x > 0) dispatch('dragged', 'right');
			else if (d.y < 0) dispatch('dragged', 'up');
			else if (d.y > 0) dispatch('dragged', 'down');
			else throw new Error('Could not determine direction of drag.');
		}
	}}
>
	<div class="take-no-space" use:motion {...$$restProps}>
		<slot />
	</div>
</Motion>
