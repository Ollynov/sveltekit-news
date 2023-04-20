import { error } from '@sveltejs/kit';
import { API_KEY } from '$env/static/private';


export async function load({ params }) {
  const res = await fetch(`https://newsapi.org/v2/everything?q=${params.slug}&apiKey=${API_KEY}`);
  const fetchedData = await res.json();
  
  if (fetchedData) {
    return {article: fetchedData.articles[0]}
  }

  throw error(404, 'Not found');
}
