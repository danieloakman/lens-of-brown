# Lens of Brown website

Svelte-kit static site for [lensofbrown.com.au](https://www.lensofbrown.com.au).

Built using svelte-kit static adaptor.

# Development

- Using the [skeleton UI library](https://www.skeleton.dev) and SvelteKit.
- Instagram posts are fetched using [instaloader](https://instaloader.github.io/). These are stored in _src/lib/imgs/lens.ofbrown_ and need to be updated manually (for now), i.e. tracked by git.

## Setup

1. Install `bun`.
2. Install [instaloader](https://instaloader.github.io/installation.html#install).
3. Instal dependencies with `bun i`. This will also run the postinstall script, which downloads the latest instagram posts from @lens.ofbrown.
4. Run dev server with `bun dev`.
