<script lang="ts">
	import BottomBanner from '$components/BottomBanner.svelte';
	import PageBody from '$components/PageBody.svelte';
	import TextInput from '$components/TextInput.svelte';
	import ForMore from '$components/ForMore.svelte';
	import Divider from '$components/Divider.svelte';
	import { INSTAGRAM_URL, FACEBOOK_URL, INFO_EMAIL } from '$constants';
	import { dev } from '$app/environment';
	import { Icon } from '$lib/icons';
	import ImgDanTrot from '$imgs/couples-dan_trot1.jpg?w=400&h=400&fit=cover&position=right bottom&any';

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
			label="Your name"
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
			placeholder="Your message or inquiry. We'll be in touch soon."
			required
			disabled={submitted}
		/>

		<button class="btn variant-filled-primary text-2xl font-Forum w-52" disabled={submitted}>
			Send Message
		</button>
	</form>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<div class="bg-surface-200 locations-container">
		<img
			src={ImgDanTrot}
			class="w-[400px] max-h-[400px] opacity-60 relative offset-img"
			alt="Daniel and Sheridan laughing"
		/>
		<!-- <img src={Landscape} class=" opacity-60" alt=""/> -->
		<div class="flex flex-col gap-4">
			<h2 class="text-xl sm:text-2xl uppercase text-primary-500 font-Forum">
				Locations we service
			</h2>
			<ul>
				<li>
					- Wollongong
				</li>
				<li>
					- Greater Sydney
				</li>
				<li>
					- Southern Highlands
				</li>
				<li>
					- Shoalhaven & South Coast 
				</li>
				<li>
					- Other locations on request
				</li>
			</ul>
			<h2 class="text-xl sm:text-2xl uppercase text-primary-500 font-Forum pt-6">Contact us</h2>
			<div class="flex flex-col gap-2">
				<a href={INSTAGRAM_URL} class="icon-link"><Icon.Instagram /> @lens.ofbrown</a>
				<a href={FACEBOOK_URL} class="icon-link"><Icon.Facebook /> Facebook</a>
				<a href={INFO_EMAIL} class="icon-link"><Icon.Mail /> Email</a>
			</div>
		</div>
	</div>

	<Divider horizontal class="w-[95%] max-w-[750px] mx-auto" />

	<ForMore />
</PageBody>

<BottomBanner />

<style lang="postcss">
	ul > li {
		@apply text-xl;
	}

	.locations-container {
		@apply py-4 px-4;
	}
	.offset-img {
		@apply float-none -right-0 -top-16;
	}
	@media (min-width: 640px) {
		.locations-container {
			@apply py-10 ps-10 me-32;
		}
		.offset-img {
			@apply float-right -right-32;
		}
	}

	.icon-link {
		@apply flex flex-row gap-2 items-center text-xl;
	}
</style>
