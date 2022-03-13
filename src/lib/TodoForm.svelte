<script>
	// import addTodo from stores
	import { addTodo } from '../stores/todoStore.js';

	let todo = '';

	const handleSubmit = (event) => {
		addTodo(todo);
		console.log(event);
		console.log('submitting');
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
	<button type="submit" class="text-white rounded bg-blue-500 hover:bg-blue-600 py-4 px-6 my-6"
		>Submit</button
	>
</form>
