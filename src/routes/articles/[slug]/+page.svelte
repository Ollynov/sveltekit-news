<script>
  // export let article;
  export let data;

  $: article = data.article

  console.log('ok got data: ', data)
</script>



<article class="py-16 lg:py-36">
  <div class='lg:px-8'>
    <div class="lg:max-w-4xl">
      <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
        <header class="flex flex-col">
          <div class="flex items-center gap-6">
            <div class="flex flex-col">
              <h1 class="mt-2 text-4xl font-bold text-slate-900">
                {article.title}
              </h1>
              <!-- <FormattedDate
                date={date}
                class="order-first font-mono text-sm leading-7 text-slate-500"
              /> -->
            </div>
          </div>
          <p class="prose mt-8 font-medium leading-8 text-slate-700">
            {article.description}
          </p>
        </header>
        <hr class="my-12 border-gray-200" />
        <div
          class="prose prose-slate mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"
        >
          {@html article.content}
        </div>
      </div>
    </div>
  </div>
</article>


<!-- dangerouslySetInnerHTML={{ __html: article.content }} -->
