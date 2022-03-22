<script>
	import '../app.css';

	import supabase from '$lib/supabase';

	import Auth from '$lib/Auth.svelte';

	import user from '../stores/authStore';

	import { loadTodos } from '../stores/todoStore';

	import Navbar from '$lib/Navbar.svelte';

	//
	// let's find out what we get back from Supabase
	console.log(supabase.auth.user());

	//
	// update the "user" property from the imported writeable store with the logged in user inside of Supabase
	user.set(supabase.auth.user());

	//
	//  what happens when the user logs in or out ?
	// https://supabase.com/docs/reference/javascript/auth-onauthstatechange
	supabase.auth.onAuthStateChange((_, session) => {
		//
		// if there is a session then set that to the user property from the authStore
		//
		// the ?. notaion is optional chaning
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
		user.set(session?.user);

		//
		// if there is a session associated with the user then we load the Todos
		if (session?.user) loadTodos();
	});
</script>

<main class="container py-4 my-4">
	<!--
		if we have a user that we check for WITH A DOLLAR SIGN since this is a reactive value from the authStore
		then we show the slot
	 -->
	{#if $user}
		<Navbar />
		<slot />
		<!--
			otherwise we just show the Auth component so that the user can sign up and /or sign in
	  	-->
	{:else}
		<Auth />
	{/if}
</main>

<style lang="postcss">
	:global(body) {
		@apply bg-sky-900;
		@apply font-sans;
	}
</style>
