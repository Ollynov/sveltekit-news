<script>
  export let article
  import heart from '$lib/images/heart-icon.svg';
  import heartFilled from '$lib/images/heart-icon-filled.svg';
  import { favorites } from './stores.js';

  // let date = new Date(article?.published)
  
  let favorite = false;
  const toggleFav = () => {
    favorite = !favorite;
    
    favorites.update(current => {
      if (current[article.url]) {
        delete current[article.url]
      } else {
        current[article.url] = article.title;
      }
      return current;
    });
  }

</script>
  

<article
  aria-labelledby={`article-${article?.id}-title`}s
  class="py-10 sm:py-12"
>
    <div class="flex flex-col md:flex-row w-full md:w-8/12 ml-10 md:ml-18 xl:ml-20">
      <div class="md:mr-4 xl:mr-6 w-2/3 md:w-1/3 mb-4 md:mb-0">
        <img
          src={article.urlToImage}
          alt=""
          class="w-full"
        />
      </div>

      <div class="flex flex-col items-start w-2/3">
        <h2
          id={`article-${article?.id}-title`}
          class="text-lg font-bold text-slate-900"
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
        <div class="flex flex-row">
          <p class="flex cursor-pointer items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 mt-4">
            Read More
          </p>          
          <div on:click={toggleFav}  class="ml-8 flex flex-row cursor-pointer items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 mt-4">
            <span>Favorite</span>
            <span>
              {#if favorite}
                <img class="w-5 ml-0.5 " fill="#db2777" src={heartFilled} alt="favorite" />
              {:else}
                <img class="w-5 ml-0.5 " fill="#db2777" src={heart} alt="favorite" />
              {/if}
            </span>
          </div>
        </div>

      </div>
    </div>

</article>

<style lang="postcss">
	/* .text {
		color: green;
	} */

</style>
