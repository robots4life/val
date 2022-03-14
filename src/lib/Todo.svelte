<script>
	// import the deleteTodo function from the store
	import { deleteTodo } from '../stores/todoStore.js';

	// Allow this component to accept values from the outside
	export let todo;
</script>

<li class="text-2xl list-none bg-sky-200 rounded-lg px-6 py-8 my-6">
	text: {todo.text} | index: {todo.id}

	<!--
	Check out below REPL to understand why we have to use an arrow function syntax
	for the deleteTodo(todo.id) click handler
	https://svelte.dev/repl/91499094927146a8a0dfa4a949247216?version=3.46.4
	-->
	<button on:click="{() => deleteTodo(todo.id)}">delete Todo</button>
</li>
