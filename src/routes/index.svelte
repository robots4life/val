<script>
	import TodoForm from '$lib/TodoForm.svelte';
	import Todo from '$lib/Todo.svelte';

	import { todos } from '../stores/todoStore.js';

	const todosA = [
		{ text: 'A', completed: false, id: 1647250171092 },
		{ text: 'B', completed: false, id: 1647250173461 }
	];
</script>

<h1 class="text-4xl font-bold text-center text-sky-100 py-4">
	Val - Full Stack SvelteKit Todo App
</h1>
<h2 class="text-3xl font-bold text-center text-sky-400 py-4">Todos</h2>

<TodoForm />

{#each todosA as todo}
	<Todo todo="{todo}" />
{/each}

<!-- {JSON.stringify($todos)}

{#each $todos as todo}
	<Todo todo="{todo}" />
{/each} -->
