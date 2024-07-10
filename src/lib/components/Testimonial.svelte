<script lang="ts">
	import { Icon } from '$lib/icons';
	const { text, author }: { text: string; author: string } = $props();
</script>

<div>
  <!-- TODO -->
	<div class="mx-auto">
		<Icon.Quote />
		<blockquote class="text-lg font-Forum">
			<p class="italic">{text}</p>
			<footer class="text-primary-500 font-Forum">{author}</footer>
		</blockquote>
	</div>
</div>
