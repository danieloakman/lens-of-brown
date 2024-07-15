<script lang="ts">
	import BottomBanner from '$components/BottomBanner.svelte';
	import PageBody from '$components/PageBody.svelte';
	import TextInput from '$components/TextInput.svelte';
	import SelectInput from '$components/SelectInput.svelte';
	import ForMore from '$components/ForMore.svelte';
	import Divider from '$components/Divider.svelte';
	import { INSTAGRAM_URL, FACEBOOK_URL, INFO_EMAIL } from '$constants';
	import DanAndTrot from '$imgs/dan_and_trot1.jpg?w=400&h=400&fit=cover&position=right bottom&imagetools';
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

	<div class="bg-surface-200 p-10">
		<img
			src={DanAndTrot}
			class="float-right w-[400px] h-[400px] opacity-60 relative -right-32"
			alt=""
		/>
		<div class="flex flex-col gap-10">
			<h2 class="text-2xl uppercase text-primary-500 font-Forum">Locations we service</h2>
			<ul>TODO: two columns dot points list of locations we shoot at</ul>
			<h2 class="text-2xl uppercase text-primary-500 font-Forum">Contact us</h2>
			<a href={INSTAGRAM_URL}>Lens.ofbrown</a>
			<a href={FACEBOOK_URL}>Facebook</a>
			<a href={INFO_EMAIL}>EMAIL</a>
		</div>
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<ForMore />
</PageBody>

<BottomBanner />
