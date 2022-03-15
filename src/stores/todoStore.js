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

// https://stackoverflow.com/a/13964186
// const data = [
// 	{ text: 'A', completed: false, id: 1647351834882 },
// 	{ text: 'B', completed: false, id: 1647351837560 },
// 	{ text: 'C', completed: false, id: 1647351840585 }
// ];

// const result = data.filter((element) => {
// 	return element.id === 1647351837560;
// });
// console.log(result);

// Toggle Todo Completed
export const toggleTodoCompleted = (id, completed) => {
	// console.log('completeTodo(id) called');
	// console.log(id);
	// console.log(completed);

	// todos.update((currentValue) => {
	// 	console.log(currentValue);

	// 	const todoCompleted = currentValue.filter((element) => {
	// 		//
	// 		// filter the todo with the todo.id that is passed into the function
	// 		return () => {
	// 			console.log('inside filter');
	// 			if (element.id === id) {
	// 				console.log(element.completed);
	// 				element.completed = true;
	// 			}
	// 		};
	// 	});
	// 	// console.log(todoCompleted[0].completed);
	// 	// todoCompleted[0].completed = !todoCompleted[0].completed;
	// 	// console.log(todoCompleted[0].completed);

	// 	return todoCompleted;
	// });

	todos.update((todos) => {
		let index = -1;
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) {
				index = i;
				break;
			}
		}
		if (index !== -1) {
			todos[index].completed = !todos[index].completed;
		}
		return todos;
	});
};
