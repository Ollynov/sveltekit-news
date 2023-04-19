
<script>
  import TinyWave from '../utility-components/icons/TinyWave.svelte';
  import { favorites } from './stores';

</script>

<section class="mt-10">
  <h2 class=" flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
    <TinyWave
    />
    <span class="ml-2.5">Your Favorites</span>
  </h2>
  <ul class='mt-2 text-base leading-7 text-slate-700' >
    {#each Object.entries($favorites) as [url, title]}

      <li>
        <a class="text-pink-500 cursor-pointer" href={url}> {title}</a>
       
      </li>
    {/each}
  </ul>
</section>