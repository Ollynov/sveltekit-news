<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Container from './layout/Container.svelte'
	import ArticlePreview from './articles/ArticlePreview.svelte'
	export let data;

	$: articles = data.articles
	console.log('ok here is data: ', data)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!-- <picture>
		<source srcset={welcome} type="image/webp" />
		<img src={welcome_fallback} alt="Welcome" />
	</picture> -->
	<!-- <Counter /> -->
	<div class="pb-12 pt-16 sm:pb-4 lg:pt-12">
		<Container>
			<h1 class="text-2xl font-bold leading-7 text-slate-900">
				Latest News
			</h1>
		</Container>
		<div class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
			{#each articles as article}
				<!-- <ArticlePreview article={article} /> -->
				<article
					aria-labelledby={`article-${article?.id}-title`}
					class="py-10 sm:py-12"
				>
					<!-- <Container>
						<div class="flex flex-col items-start">
							<div class="text text-3xl">
								hi
							</div>
							<h2
								id={`article-${article?.id}-title`}
								class="mt-2 text-lg font-bold text-slate-900"
							>
								<a href={`/${article?.id}`}>{article?.title}</a>
							</h2>
							<p class="mt-1 text-base leading-7 text-slate-200">
								{article?.description}
							</p>
							<p  class="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 mt-4">
								Read More
							</p>
						</div>
					</Container> -->
					<ArticlePreview article={article}/>
				</article>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	} */

</style>
