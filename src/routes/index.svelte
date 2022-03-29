<script>
	import TodoForm from '$lib/TodoForm.svelte';
	import Todo from '$lib/Todo.svelte';

	import { todos } from '../stores/todoStore.js';
</script>

<h1>Todo</h1>

<hr />
<TodoForm />

{JSON.stringify($todos)}

{#each $todos as todo}
	<Todo todo="{todo}" />
{/each}
