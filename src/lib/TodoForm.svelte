<script>
	// import addTodo from stores
	import { addTodo } from '../stores/todoStore.js';

	let todo = '';

	const handleSubmit = (event) => {
		addTodo(todo);
		console.log(todo);
		console.log(event);
		console.log('submitting');
		// reset Todo input
		todo = '';
	};
</script>

<form class="" on:submit|preventDefault="{handleSubmit}">
	<div class="flex flex-col">
		<label for="todo"></label>
		<input type="text" name="todo" placeholder="Buy Ice Cream" bind:value="{todo}" />
	</div>
	<button type="submit" class="">Submit</button>
</form>
