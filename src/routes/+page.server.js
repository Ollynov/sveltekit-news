// If we had this option on, we would only be running during build time. In other words, creating static html pages. Prerendered pages can still be interactive (with client side js). An article being a "favorite" would be a great example. Especially if we used something like firebase for the datbase, in which case we can connect to the database directly from client. Or even more simple example, if we just used localstorage, and our JS functionality to interact with the browser
// export const prerender = true;

// if we had a +page.js (client side load functions) with option export const ssr = false then we would render nothing from the server (blank html) and wait for client side JS. Another way to think of this is that prerender will only server render during the build, while SSR = false will not even server render at that time. The use case for this 2nd option is pretty rare.
// if we had this export const ssr = false option in our root +layout.js file then, because of the way that the layouts cascade, it would apply to all files. Essentially making our app an SPA

// export const csr = false; is an option when you don't need any client side javascript. Static marketing pages for example. I'm a little surprised this isn't just automatic if there are no functions on the route

import { API_KEY } from '$env/static/private';
import { mockup } from '../lib/mockups/newsapi-mock.js';

export const load = async ({ params }) => {
	const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
	const fetchedData = await res.json();
	// const fetchedData = null;
	console.log('ok here we are: running'); // for demo purposes

	if (fetchedData?.articles.length > 0) {
		return {
			articles: fetchedData.articles,
		};
	} else {
		return {
			articles: mockup.articles,
		};
	}
};

const search = async (value) => {
	const res = await fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=${API_KEY}`);
	const fetchedData = await res.json();

	if (fetchedData?.articles) {
		const firstTen = fetchedData.articles.slice(0, 10);
		return firstTen;
	} else {
		return mockup.articles;
	}
};

export const actions = {
	default: async ({ cookies, request }) => {
		let data = await request.formData();
		let searchInput = Object.fromEntries(data).name;
		const results = await search(searchInput);

		return { articles: results };
	},
};
