import { writable } from 'svelte/store';

export const todos = writable([]); // create an empty array of todos in the store that can be written to

// Add Todo
export const addTodo = (text) => {
	//
	// update the todos store with the update method
	todos.update((currentValue) => {
		//
		// update the array and re-assign it to todos
		// spread out the currentValue and add in the new value
		const newTodos = [...currentValue, { text, completed: false, id: Date.now() }];

		// return the newly created array
		console.log(newTodos);
		return newTodos;
	});
};

// Delete Todo
export const deleteTodo = (id) => {
	//
	todos.update((currentValue) => {
		//
		// filter the todos store
		const newTodos = currentValue.filter((element) => {
			//
			// return all the todos that do NOT have the passed in id
			return element.id != id;
		});
		console.log(newTodos);
		return newTodos;
	});
};
