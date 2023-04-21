<script>
	import Search from './Search.svelte';
	import ArticlePreview from './articles/ArticlePreview.svelte';
	// import { allArticles } from './articles/stores';
	export let data; // default data that we get back from our load function (on the server) when we first land on our homepage
	import { allArticles } from './articles/stores';

	allArticles.subscribe((items) => {
		// we are subscribed to our store here, and will update the articles any time a user searches. We reverse just to visually see the difference in the case were using our mock data
		articles = items.reverse();
	});

	$: articles = data.articles;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="pb-12 pt-16 sm:pb-4 lg:pt-12">
		<h1 class="text-2xl font-bold leading-7 text-slate-900">Latest News</h1>
		<div class="w-full m-auto">
			<Search />
		</div>
		<div class="divide-y divide-slate-200 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-200">
			{#if articles}
				{#each articles as article}
					<ArticlePreview {article} />
				{/each}
			{/if}
		</div>
	</div>
</section>

<style lang="postcss">
</style>
