// we are going to keep track of the user's authentication state in this store

import { writable } from 'svelte/store';

export const user = writable(false);
