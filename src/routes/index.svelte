<script>
	import TodoForm from '$lib/TodoForm.svelte';
	import Todo from '$lib/Todo.svelte';

	import { todos } from '../stores/todoStore.js';
</script>

<h1 class="">Val - Full Stack SvelteKit Todo App</h1>
<h2 class="">Todos</h2>

<TodoForm />

{JSON.stringify($todos)}

{#each $todos as todo}
	<Todo todo="{todo}" />
{/each}
