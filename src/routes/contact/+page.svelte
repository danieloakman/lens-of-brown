<script lang="ts">
	import BottomBanner from '$components/BottomBanner.svelte';
	import PageBody from '$components/PageBody.svelte';
	import Input from '$components/Input.svelte';
	import ForMore from '$components/ForMore.svelte';
	import Divider from '$components/Divider.svelte';
</script>

<!--
TODO: Copy over as is from zenfolio. But:
Replace map pic with landscape pic.
-->

<PageBody>
	<h1 class="text-5xl text-primary-500">Contact us</h1>
	<form class="grid grid-cols-2 gap-x-4 gap-y-10">
		<Input name="first_name" label="First name" placeholder="First name" required type="text" />
		<Input name="last_name" label="Last name" placeholder="Last name" required type="text" />
		<Input
			class="col-span-2"
			name="email"
			label="Email"
			placeholder="Your e-mail"
			required
			type="text"
		/>
		<Input class="col-span-2" name="phone_no" label="Phone number" type="tel" required />
		<Input
			name="shoot_type"
			label="What kind of shoot type are you interested in?"
			required
			type="select"
			options={[
				['portrait', 'Portrait'],
				['landscape', 'Landscape'],
				['event', 'Event'],
				['product', 'Product'],
				['other', 'Other']
			]}
		/>
	</form>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<div>
		
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<ForMore />
</PageBody>

<BottomBanner />
