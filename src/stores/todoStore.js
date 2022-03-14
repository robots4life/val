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
	console.log('deleteTodo(id) called');
	console.log(id);

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
