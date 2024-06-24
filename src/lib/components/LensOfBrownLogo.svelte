<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import Divider from "./Divider.svelte";
  import AndroidChromeLogo from '$static/android-chrome-512x512.png';

  const {
    ...rest
  }: {} & HTMLAttributes<HTMLDivElement> = $props();
</script>

<!-- <img src={STATIC_FILES.imgs["logo-sideways-on-white.png"]} alt="asdd" /> -->

<div {...rest}>
  <div class="flex flex-row">
    <img src={AndroidChromeLogo} width="95px" alt="Lens of Brown logo"/>
    <div class="flex flex-col gap-2">
      <span class="text-4xl font-Black-mango text-center mx-6">lens of</span>  
      <Divider horizontal />
      <span class="text-4xl font-Black-mango font-bold text-center mx-6">BROWN</span>
    </div>
  </div>
</div>