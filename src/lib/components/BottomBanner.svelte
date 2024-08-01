<script lang="ts">
	import { FACEBOOK_URL, INFO_EMAIL, INSTAGRAM_URL } from '$constants';
	import { Icon } from '$lib/icons';
</script>

<div class="flex flex-col gap-6 w-full bg-[#333333] justify-between">
	<h2 class="text-2xl text-center text-[rgb(255,255,255,0.4)] pt-8 font-Black-mango">
		Lens of Brown
	</h2>

	<div class="flex flex-row gap-6 ms-auto me-6">
		<a href={FACEBOOK_URL} target="_blank" class="hover-lg">
			<Icon.Facebook class="text-[rgb(255,255,255,0.4)] text-xl m-1" />
		</a>
		<a href={INSTAGRAM_URL} target="_blank" class="hover-lg">
			<Icon.Instagram class="text-[rgb(255,255,255,0.4)] text-xl m-1" />
		</a>
		<a href={INFO_EMAIL} target="_blank" class="hover-lg">
			<Icon.Mail class="text-[rgb(255,255,255,0.4)] text-xl m-1" />
		</a>
	</div>

	<h3 class="text-center sm:text-start ps-2 uppercase font-Forum text-[rgb(255,255,255,0.4)]">
		All content copyright © {new Date().getFullYear()} Lens of Brown
	</h3>
</div>
