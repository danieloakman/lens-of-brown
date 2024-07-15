<script lang="ts">
	import BottomBanner from '$components/BottomBanner.svelte';
	import PageBody from '$components/PageBody.svelte';
	import TextInput from '$components/TextInput.svelte';
	import SelectInput from '$components/SelectInput.svelte';
	import ForMore from '$components/ForMore.svelte';
	import Divider from '$components/Divider.svelte';
</script>

<!--
TODO: Copy over as is from zenfolio. But:
Replace map pic with landscape pic.
-->

<PageBody>
	<h1 class="text-5xl text-primary-500">Contact us</h1>

	<form class="grid grid-cols-2 gap-x-4 gap-y-10" method="post" action="/contact/post">
		<TextInput name="first_name" label="First name" placeholder="First name" required type="text" />
		<TextInput name="last_name" label="Last name" placeholder="Last name" required type="text" />
		<TextInput
			class="col-span-2"
			name="email"
			label="Email"
			placeholder="Your e-mail"
			required
			type="email"
			inputmode="email"
		/>
		<!-- TODO: Create a PhoneInput -->
		<TextInput class="col-span-2" name="phone_no" label="Phone number" type="tel" required />
		<SelectInput
			class="col-span-2"
			name="shoot_type"
			label="What kind of shoot type are you interested in?"
			placeholder="Select an option"
			required
			options={[
				['portrait', 'Portrait'],
				['landscape', 'Landscape'],
				['event', 'Event'],
				['product', 'Product'],
				['other', 'Other']
			]}
		/>
		<SelectInput
			class="col-span-2"
			name="ref"
			label="How did you discover us?"
			placeholder="Select an option"
			required
			options={[
				['google', 'Google'],
				['facebook', 'Facebook'],
				['instagram', 'Instagram'],
				['friend', 'Friend'],
				['other', 'Other']
			]}
		/>
		<TextInput class="col-span-2" name="location" label="Preferred shoot locaton" type="textarea" />
		<TextInput class="col-span-2" name="comments" label="Comments" type="textarea" required />

		<button class="btn variant-filled-primary text-2xl font-Forum w-96">Send Message</button>
	</form>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<div></div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<ForMore />
</PageBody>

<BottomBanner />
