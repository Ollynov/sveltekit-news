import { error } from '@sveltejs/kit';
import { API_KEY } from '$env/static/private';
import { mockup } from '../../../lib/mockups/newsapi-mock.js';

export async function load({ params, url }) {
	const publishedAt = url.searchParams.get('publishedAt');
	const res = await fetch(`https://newsapi.org/v2/everything?q=${params.slug}&apiKey=${API_KEY}`);
	const fetchedData = await res.json();

	console.log('ok got back for individiaul article: ', fetchedData);

	if (fetchedData?.articles) {
		return { article: fetchedData.articles[0] };
	} else {
		return {
			article: mockup.articles.find((article) => article.publishedAt === publishedAt) || mockup.articles[0],
		};
	}
}
