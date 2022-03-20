<script>
	// import addTodo from stores
	import { addTodo } from '../stores/todoStore.js';

	//
	// import the user from the Auth store
	//
	// the User ID is set in src/routes/__layout.svelte and stored in the auth store
	import user from '../stores/authStore';

	console.log($user.id);

	let todo = '';

	const handleSubmit = (event) => {
		//
		// pass in the user id from the auth store when creating a new Todo
		//
		// make sure to use a DOLLAR SIGN to access the reactive store value for the User ID
		addTodo(todo, $user.id);

		console.log(todo);
		console.log(event);
		console.log('submitting');

		// reset Todo input
		todo = '';
	};
</script>

<form class="text-2xl text-center text-sky-400 py-4" on:submit|preventDefault="{handleSubmit}">
	<div class="flex flex-col">
		<label for="todo"></label>
		<input
			class="text-black focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-4"
			type="text"
			name="todo"
			placeholder="Buy Ice Cream"
			bind:value="{todo}"
		/>
	</div>
	<button type="submit" class="text-white rounded bg-blue-500 hover:bg-blue-600 px-6 py-4 my-6"
		>Submit</button
	>
</form>
