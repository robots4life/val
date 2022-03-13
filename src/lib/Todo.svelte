<script>
	// Allow this component to accept values from the outside
	export let todo;
</script>

<li class="text-2xl list-none bg-sky-200 rounded-lg px-6 py-8 my-6">
	text: {todo.text} | index: {todo.id}
</li>
