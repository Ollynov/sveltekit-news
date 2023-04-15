
<script>
  import clsx from 'clsx'
  import TinyWave from '../utility-components/icons/TinyWave.svelte';

  // let [isExpanded, setIsExpanded] = useState(false)
  let isExpanded = true;

</script>


    <section class="mt-12 hidden lg:block">
      <h2 class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <TinyWave
        />
        <span class="ml-2.5">About</span>
      </h2>
      <p
        class={clsx(
          'mt-2 text-base leading-7 text-slate-700',
          !isExpanded && 'lg:line-clamp-4'
        )}
      >
        In this show, Eric and Wes dig deep to get to the facts with guests who
        have been labeled villains by a society quick to judge, without actually
        getting the full story. Tune in every Thursday to get to the truth with
        another misunderstood outcast as they share the missing context in their
        tragic tale.
      </p>
      {#if isExpanded}
        <button
          type="button"
          class="mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          Show more
        </button>
      {/if}
    </section>