<script>
	import supabase from '$lib/supabase';

	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			// the loading state starts here
			loading = true;

			console.log(email);

			// hello ? could this be any easier ?
			const { error } = await supabase.auth.signIn({ email });

			// if there is something wrong with either the email or the request
			if (error) throw error;

			// on success display an alert to the user to check their email inbox
			alert('Check your email for the login link!');
		} catch (error) {
			console.error(error);

			alert(error.error_description || error.message);
		} finally {
			// the loading state is finally finished here
			loading = false;
		}
	};
</script>

<h1 class="text-4xl font-bold text-center text-sky-100 py-4">Log in</h1>
<p class="text-2xl text-green-500 text-center my-4">Sign in via magic link with your email below</p>

<!-- https://svelte.dev/tutorial/event-modifiers preventDefault on the submit event -->
<form class="text-2xl text-center text-sky-400 py-4" on:submit|preventDefault="{handleLogin}">
	<div class="flex flex-col">
		<label for="login" class="text-3xl font-bold text-center text-sky-400 py-4"> Email </label>
		<input
			type="email"
			name="email"
			bind:value="{email}"
			placeholder="Your email"
			class="text-black focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-4"
		/>
	</div>
	<!-- while the loading state is true the submit button is disabled so that no subsequent login request can be sent to the server -->
	<button
		type="submit"
		class="text-white rounded bg-blue-500 hover:bg-blue-600 px-6 py-4 my-6 disabled:bg-red-500"
		disabled="{loading}"
	>
		Log In
	</button>
</form>
