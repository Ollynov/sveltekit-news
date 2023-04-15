<script>
	import Header from './Header.svelte';
	import Wave from './layout/Wave.svelte';
	import './styles.css';
	import "../app.css";

</script>

<div >
	<!-- <Header /> -->

	<main>
    <header class="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
      <div class="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
        <span class="font-mono text-slate-500">Created by</span>
        <span class="mt-6 flex gap-6 font-bold text-slate-900">
          yoshcode
        </span>
      </div>
      <div class="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
        <a
          href="/"
          class="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
          aria-label="Homepage"
        >
          <img
            class="w-full"
            src={""}
            alt=""
            sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
            priority
          />
          <div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" ></div>

        </a>
        <div class="mt-10 text-center lg:mt-12 lg:text-left">
          <p class="text-xl font-bold text-slate-900">
            <a href="/">Their Side</a>
          </p>
          <p class="mt-3 text-lg font-medium leading-8 text-slate-700">
            Conversations with the most tragically misunderstood people of our
            time.
          </p>
        </div>
        <!-- <AboutSection class="mt-12 hidden lg:block" /> -->
        <section class="mt-10 lg:mt-12">
          <h2 class="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
            <!-- <TinyWaveFormIcon
              colors={['fill-indigo-300', 'fill-blue-300']}
              class="h-2.5 w-2.5"
            /> -->
            <span class="ml-2.5">Listen</span>
          </h2>
          <!-- <div class="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" /> -->
          <!-- <ul
            role="list"
            class="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
          >
            {[
              ['Spotify', SpotifyIcon],
              ['Apple Podcast', ApplePodcastIcon],
              ['Overcast', OvercastIcon],
              ['RSS Feed', RSSIcon],
            ].map(([label, Icon]) => (
              <li key={label} class="flex">
                <Link
                  href="/"
                  class="group flex items-center"
                  aria-label={label}
                >
                  <Icon class="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
                  <span class="hidden sm:ml-3 sm:block">{label}</span>
                </Link>
              </li>
            ))}
          </ul> -->
        </section>
      </div>
    </header>
    <main class="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
      <Wave />
      <div class="relative">
				<slot />

			</div>
    </main>
    <footer class="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
      <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
        <!-- <AboutSection /> -->
        <h2 class="mt-8 flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
          <!-- <PersonIcon class="h-3 w-auto fill-slate-300" /> -->
          <span class="ml-2.5">Hosted by</span>
        </h2>
        <div class="mt-2 flex gap-6 text-sm font-bold leading-7 text-slate-900">
          Yoshcode
        </div>
      </div>
    </footer>

  </main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>

<style>



	/* footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>



