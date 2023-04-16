// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = (async ({ params }) => {

  const key = "d52279ec3b1f488a89d76a85580c7d82"
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`);
  const fetchedData = await res.json();

  return { 
    articles: fetchedData.articles
  }
})
