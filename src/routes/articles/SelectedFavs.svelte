
<script>
  import TinyWave from '../utility-components/icons/TinyWave.svelte';
  import remove from '$lib/images/remove-icon.svg';

  import { favorites } from './stores';

  const removeFav = (url) => {
    
    favorites.update(current => {
      if (current[url]) {
        delete current[url]
      } 
      return current;
    });
  }
</script>

<section class="mt-10">
  <h2 class=" flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
    <TinyWave
    />
    <span class="ml-2.5">Your Favorites</span>
  </h2>
  <ul class='mt-2 text-base leading-7 text-slate-700' >
    {#each Object.entries($favorites) as [url, title]}

      <li class="mt-4">
        <a class="text-slate-700 cursor-pointer text-sm" href={url}> {title}</a>
        <div class="flex flex-row mt-1">
          <button class="flex cursor-pointer items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900">
            Read More
          </button> 
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div on:click={removeFav(url)}  class="ml-3 flex flex-row cursor-pointer items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900">
              <img class="w-5 ml-0.5 " fill="#db2777" src={remove} alt="favorite" />
          </div>
        </div>
      

      </li>
    {/each}
  </ul>
</section>