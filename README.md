# Full Stack SvelteKit Todo App

There are two branches.

**<a href="https://github.com/robots4life/val/tree/local">`local`</a>** is the first part of the app where the Todos are stored in a SvelteKit store.

https://www.youtube.com/watch?v=YipaPr4Aex8

**<a href="https://github.com/robots4life/val/tree/supabase">`supabase`</a>** is the second part of the app where everything runs on Supabase including User Authentication via Magic Link.

Both apps are styled with Tailwind CSS.

https://www.youtube.com/watch?v=YqIyET7XKIQ
</br>
</br>

**2022-03-10 `npm ls`**

```shell
val@0.0.1 /shared/httpd/val
├── @sveltejs/adapter-auto@1.0.0-next.31
├── @sveltejs/kit@1.0.0-next.295
├── env-cmd@10.1.0
├── eslint-config-prettier@8.5.0
├── eslint-plugin-svelte3@3.4.1
├── eslint@7.32.0
├── prettier-plugin-svelte@2.6.0
├── prettier@2.5.1
└── svelte@3.46.4
```

</br>
</br>

## local

### 1.

Install Tailwind CSS with SvelteKit.

https://tailwindcss.com/docs/guides/sveltekit

`npm install -D tailwindcss postcss autoprefixer`

`npx tailwindcss init tailwind.config.cjs -p`

returns

```shell
Created Tailwind CSS config file: tailwind.config.cjs
Created PostCSS config file: postcss.config.js
```

`mv postcss.config.js postcss.config.cjs`

</br>

`tailwind.config.cjs`

```js
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
};
```

</br>

`src/app.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

</br>

`src/routes/index.svelte`

```html
<h1 class="text-3xl font-bold underline">Val - Full Stack SvelteKit Todo App</h1>
```

### 2.

Apply global styles to the `body` element.

`src/routes/__layout.svelte`

```html
<style lang="postcss">
	:global(body) {
		@apply bg-sky-900;
		@apply text-sky-100;
	}
</style>
```

### 3.

Build a basic form and style with Tailwind CSS.

`src/lib/TodoForm.svelte`

```html
<form class="text-2xl text-center text-sky-400 py-4">
	<div class="flex flex-col">
		<label for="todo"></label>
		<input
			class="text-black focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-4"
			type="text"
			name="todo"
			placeholder="Buy Ice Cream"
		/>
	</div>
	<button type="submit" class="text-white rounded bg-blue-500 hover:bg-blue-600 py-4 px-6 my-6">
		Submit
	</button>
</form>
```

### 4.

Create a store and some helper functions for the Todos.

`src/stores/todoStore.js`

```js
import { writable } from 'svelte/store';

// create an empty array of todos in the store that can be written to
export const todos = writable([]);
```

</br>

Create the addTodo function.

`src/stores/todoStore.js`

```js
export const addTodo = (text) => {
	//
	// update the todos store with the update method
	todos.update((currentValue) => {
		//
		// update the array and re-assign it to todos
		// spread out the currentValue and add in the new value
		const newTodos = [...currentValue, { text, completed: false, id: Date.now() }];

		// return the newly created array
		return newTodos;
	});
};
```

### 5.

Add Todo to store.

`lib/TodoForm.svelte`

```js
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
```

### 6.

Show Todos imported from store on Index page.

`routes/index.svelte`

```html
<script>
	import TodoForm from '$lib/TodoForm.svelte';

	// import the Todos from the store
	import { todos } from '../stores/todoStore.js';
</script>

<h1>Val - Full Stack SvelteKit Todo App</h1>
<h2>Todos</h2>

<TodoForm />

<!-- here are the Todos from the store -->
<!-- NOTE THE $ IN FRONT OF THE todos!! -->
<!-- this will enable us to access the writeable store that is reactive and hence updates its values on defined events -->
{JSON.stringify($todos)}
```

### 7.

Show Todo with a Todo component.

`src/lib/Todo.svelte`

```html
<script>
	// Allow this component to accept values from the outside
	export let todo;
</script>

<li>text: {todo.text} | index: {todo.id}</li>
```

</br>

`src/routes/index.svelte`

```js
<script>
	import TodoForm from '$lib/TodoForm.svelte';

	// import the Todos from the store
	import { todos } from '../stores/todoStore.js';
</script>

<h1>Val - Full Stack SvelteKit Todo App</h1>
<h2>Todos</h2>

<TodoForm />

{JSON.stringify($todos)}

{#each $todos as todo}

	// Feed the Todo component's exported property "todo"
	// with the values from the imported writeable Todos store
	<Todo todo="{todo}" />

{/each}
```
