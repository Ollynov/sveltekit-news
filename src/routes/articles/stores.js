import { writable } from 'svelte/store';
import { mockup } from '../../lib/mockups/newsapi-mock';

export const favorites = writable({});
export const allArticles = writable([]);
export const selectedArticle = writable(mockup.articles[0]);
