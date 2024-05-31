import { modeCurrent, setModeCurrent } from '@skeletonlabs/skeleton';

// TODO: this line actually makes light/dark mode work. But we should just be able to use the lightswitch component from skeleton.
// So this logic should be moved to the root layout
modeCurrent.subscribe(setModeCurrent);

/**
 * @deprecated Just use skeleton's lightswitch component instead.
 * Controls whether it is the light or dark theme. `true` for light, `false` for dark.
 * */
export const lightSwitch = {
	subscribe: modeCurrent.subscribe,
	set: modeCurrent.set,
	update: modeCurrent.update,
	toggle: () => {
		modeCurrent.update((v) => !v);
	}
};
