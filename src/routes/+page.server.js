// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;
import { API_KEY } from '$env/static/private';
import { mockup } from '../lib/mockups/newsapi-mock.js';

export const load = async ({ params }) => {
	const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
	const fetchedData = await res.json();
	console.log('ok fetcheddata: ', fetchedData);

	if (fetchedData?.articles) {
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
		throw error(404, 'Not found');
	}
};

export const actions = {
	default: async ({ cookies, request }) => {
		let data = await request.formData();
		let searchInput = Object.fromEntries(data).name;
		const results = await search(searchInput);
		console.log('ok results: ', results);

		return { results };
	},
};
