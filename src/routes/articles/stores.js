import { writable } from 'svelte/store';

export const favorites = writable({});
export const allArticles = writable([]);
export const selectedArticle = writable();
