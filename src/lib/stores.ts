import { writable } from 'svelte/store';

export const users = writable([]);

export const login = (user: never) => {
	users.update((items) => {
		items = [...items, user];
		return items;
	});
};

export const signup = (user: never) => {
	users.update((items) => {
		items = [...items, user];
		return items;
	});
};
