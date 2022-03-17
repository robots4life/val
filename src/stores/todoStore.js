import { writable } from 'svelte/store';

//
// add Supabase to our Todo App ==> Tada :))
import supabase from '$lib/supabase';

export const todos = writable([]); // create an empty array of todos in the store that can be written to

//
// Load Todos from Supabase
export const loadTodos = async () => {
	const { data, error } = await supabase.from('todos').select();

	if (error) return console.log(error);

	todos.set(data);
};
loadTodos();

// Add Todo
export const addTodo = async (text, user_id) => {
	//
	// add Todo to Supabase
	const { data, error } = await supabase
		.from('todos')
		.insert([{ text, completed: false, user_id }]);
	if (error) return console.log(error);

	//
	// update the todos store with the update method
	todos.update((currentValue) => {
		//
		// update the array and re-assign it to todos
		// spread out the currentValue and add in the new value
		// const newTodos = [...currentValue, { text, completed: false, id: Date.now() }];

		//
		// add new Todo to Supabase
		const newTodos = [...currentValue, data[0]];

		// return the newly created array
		console.log(newTodos);
		return newTodos;
	});
};

// Delete Todo
export const deleteTodo = async (id) => {
	console.log('deleteTodo(id) called');
	console.log(id);

	//
	// delete Todo from Supabase
	const { error } = await supabase.from('todos').delete().match({ id });

	if (error) return console.log(error);

	//
	// filter todos based on the passed id
	// so the items that remain in the todos array are the items that do not have the todo.id value that is passed in
	//
	todos.update((currentValue) => {
		console.log(currentValue);

		const newTodos = currentValue.filter((element) => {
			//
			// filter the todos and return the todos where the todo.id is NOT the passed in id
			return element.id !== id;
		});

		console.log(newTodos);
		return newTodos;
	});
};

// Toggle Todo Completed
export const toggleTodoCompleted = async (id, currentState) => {
	console.log(id);
	//
	// update Todo completed state
	const { error } = await supabase
		.from('todos')
		.update({ completed: !currentState })
		.match({ id });

	if (error) return console.log(error);

	//
	// https://github.com/jamesqquick/svelte-kit-supabase-todo-app-with-tailwind/blob/76d1fd9a25e7a0bafb8a1d9272fcd1a6242b5a69/src/stores/todoStore.js#L18
	todos.update((todos) => {
		//
		// create index so we can later get the correct todo by that index
		let index = -1;
		//
		// iterate over the todos until the todo with the passed in id is found
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) {
				index = i;
				break;
			}
		}
		//
		// check for the found index and make sure it is not negative
		// not negative since that would mean no object with the passed id was found
		if (index !== -1) {
			//
			// last not least, set the todo.completed value to the opposite of its current value
			todos[index].completed = !todos[index].completed;
		}
		return todos;
	});
};
