// we are going to keep track of the user's authentication state in this store

import { writable } from 'svelte/store';

// an empty writeable means the value is "undefined"
export const user = writable();

export default user;
