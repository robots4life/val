<script>
	import supabase from '$lib/supabase';

	// log out
	const logOut = () => {
		console.log('log out');
		supabase.auth.signOut();
	};
</script>

<div class="my-4 flex justify-end">
	<button
		class="text-white rounded bg-blue-500 hover:bg-blue-600 px-6 py-4 my-6"
		on:click="{logOut}">Log out</button
	>
</div>
