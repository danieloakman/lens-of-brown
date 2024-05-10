// import { windowSizeStore } from 'svelte-legos';

// export const windowSize = windowSizeStore();

export const windowSize = $state({ width: 0, height: 0 });
document.addEventListener('resize', () => {
  windowSize.width = window.innerWidth;
  windowSize.height = window.innerHeight;
});