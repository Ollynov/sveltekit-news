<script>
	import Container from './../layout/Container.svelte'
  export let article
  // let date = new Date(article?.published)

</script>
  

<article
  aria-labelledby={`article-${article?.id}-title`}
  class="py-10 sm:py-12"
>
  <Container>
    <div class="flex flex-col items-start">
      <h2
        id={`article-${article?.id}-title`}
        class="mt-2 text-lg font-bold text-slate-900"
      >
        <a href={`/${article?.id}`}>{article?.title}</a>
      </h2>

      <!-- <FormattedDate
        date={date}
        class="order-first font-mono text-sm leading-7 text-slate-500"
      /> -->
      <p class="mt-1 text-base leading-7 text-slate-700">
        {article?.description}
      </p>
      <p  class="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 mt-4">
        Read More
      </p>
    </div>
  </Container>
</article>

<style lang="postcss">
	/* .text {
		color: green;
	} */

</style>
