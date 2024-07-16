<script lang="ts">
	import BottomBanner from '$components/BottomBanner.svelte';
	import PageBody from '$components/PageBody.svelte';
	import TextInput from '$components/TextInput.svelte';
	import ForMore from '$components/ForMore.svelte';
	import Divider from '$components/Divider.svelte';
	import { INSTAGRAM_URL, FACEBOOK_URL, INFO_EMAIL } from '$constants';
	import { dev } from '$app/environment';
	import DanAndTrot from '$imgs/dan_and_trot1.jpg?w=400&h=400&fit=cover&position=right bottom&imagetools';
	import Landscape from '$imgs/landscape1.jpg?w=400&h=300&fit=cover&imagetools';
	import { Icon } from '$lib/icons';

	// let firstName = $state('');
	// let lastName = $state('');
	// let comments = $state('');
	// const action = $derived(
	// 	`${INFO_EMAIL}?${new URLSearchParams({ subject: `${firstName} ${lastName}`, body: comments })}`
	// );
	// $inspect(action);
	let email = $state('');
	$effect(() => {
		if (email.length) email = email.trim();
	});
	let submitted = $state(false);
</script>

<!--
TODO: Copy over as is from zenfolio. But:
Replace map pic with landscape pic.
-->

<PageBody>
	<h1 class="text-5xl text-primary-500">Contact us</h1>

	<form
		class="flex flex-col gap-10"
		method="POST"
		action={dev ? '/post-test' : 'https://formspree.io/f/mkgwgqer'}
		target="_blank"
		onsubmit={() => {
			submitted = true;
		}}
	>
		<TextInput
			label="Full name"
			name="name"
			placeholder="First & last name"
			required
			type="text"
			pattern="^[a-zA-Z]+ [a-zA-Z]+$"
			disabled={submitted}
		/>
		<TextInput
			class="col-span-2"
			name="email"
			label="Email"
			placeholder="Your e-mail"
			required
			type="email"
			inputmode="email"
			pattern={'^[a-z0-9+%_\\-]+@[a-z0-9.\\-]+.[a-z]{2,4}'}
			disabled={submitted}
			bind:value={email}
		/>
		<!-- TODO: Create a PhoneInput -->
		<!-- <TextInput class="col-span-2" name="phone_no" label="Phone number" type="tel" required /> -->
		<!-- <SelectInput
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
		/> -->
		<!-- <SelectInput
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
		/> -->
		<!-- <TextInput class="col-span-2" name="location" label="Preferred shoot locaton" type="textarea" /> -->
		<TextInput
			class="col-span-2"
			label="Message"
			name="message"
			type="textarea"
			required
			disabled={submitted}
		/>

		<button class="btn variant-filled-primary text-2xl font-Forum w-52" disabled={submitted}>
			Send Message
		</button>
	</form>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<div class="bg-surface-200 py-10 ps-10 me-32">
		<img
			src={DanAndTrot}
			class="float-right w-[400px] h-[400px] opacity-60 relative -right-32"
			alt="Daniel and Sheridan laughing"
		/>
		<!-- <img src={Landscape} class=" opacity-60" alt=""/> -->
		<div class="flex flex-col gap-10">
			<h2 class="text-2xl uppercase text-primary-500 font-Forum">Locations we service</h2>
			<ul>TODO: two columns dot points list of locations we shoot at</ul>
			<h2 class="text-2xl uppercase text-primary-500 font-Forum">Contact us</h2>
			<a href={INSTAGRAM_URL} class="flex flex-row gap-2 items-center"><Icon.Instagram /> Lens.ofbrown</a>
			<a href={FACEBOOK_URL} class="flex flex-row gap-2 items-center"><Icon.Facebook /> Facebook</a>
			<a href={INFO_EMAIL} class="flex flex-row gap-2 items-center"><Icon.Mail /> EMAIL</a>
		</div>
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<ForMore />
</PageBody>

<BottomBanner />
