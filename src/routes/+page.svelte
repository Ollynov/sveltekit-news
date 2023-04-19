<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
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
		<h1 class="text-2xl font-bold leading-7 text-slate-900">
			Latest News
		</h1>
		<div class="divide-y divide-slate-200 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-200">
			{#each articles as article}
				<!-- <ArticlePreview article={article} /> -->
		
				<ArticlePreview article={article}/>
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
