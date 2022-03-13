<script>
	import TodoForm from '$lib/TodoForm.svelte';
	import Todo from '$lib/Todo.svelte';

	import { todos } from '../stores/todoStore.js';
</script>

<h1 class="text-4xl font-bold text-center text-sky-100 py-4">
	Val - Full Stack SvelteKit Todo App
</h1>
<h2 class="text-3xl font-bold text-center text-sky-400 py-4">Todos</h2>

<TodoForm />

{JSON.stringify($todos)}

{#each $todos as todo}
	<Todo todo="{todo}" />
{/each}
