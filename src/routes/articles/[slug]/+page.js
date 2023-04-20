import { error } from '@sveltejs/kit';


export async function load({ params }) {
  const key = "d52279ec3b1f488a89d76a85580c7d82"
  const res = await fetch(`https://newsapi.org/v2/everything?q=${params.slug}&apiKey=${key}`);
  const fetchedData = await res.json();
  console.log('fetched data: ', fetchedData)
  // const post = await getPostFromDatabase(params.slug);

  // if (post) {
  //     return post;
  // }
  if (fetchedData) {
    return {article: fetchedData.articles[0]}
  }

  throw error(404, 'Not found');
}