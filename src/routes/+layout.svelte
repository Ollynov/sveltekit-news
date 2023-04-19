<script>
	// import Header from './Header.svelte';
	import Wave from './layout/Wave.svelte';
	import newzy from '$lib/images/newzy.png';

	import AboutSection from './layout/About.svelte';
	import SocialLinks from './layout/SocialLinks.svelte';
	import SelectedFavs from './articles/SelectedFavs.svelte';
	import './styles.css';
	import "../app.css";
	import TinyWave from './utility-components/icons/TinyWave.svelte';


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
            src={newzy}
            alt=""
            sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
            priority
          />
          <div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl" ></div>

        </a>
        <div class="mt-10 text-center lg:mt-12 lg:text-left">
          <p class="text-xl font-bold text-slate-900">
            <a href="/">Newzy</a>
          </p>
          <p class="mt-3 text-lg font-medium leading-8 text-slate-700">
            Finally a news feed that's curated for your own interests
          </p>
        </div>
				<div class="mt-10 hidden lg:block">
					<AboutSection  />
				</div>
        <section class="mt-10">
          <h2 class="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
						<TinyWave />
            <span class="ml-2.5">Socials</span>
          </h2>
          <div class="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
					<SocialLinks />      
        </section>    
        <SelectedFavs />    
        <!-- <section class="mt-10 lg:mt-12">
          <h2 class="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
						<TinyWave />
            <span class="ml-2.5">Your Favorites</span>
          </h2>
          <div class="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
					
        </section> -->
      </div>
    </header>
    <main class="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-1 lg:border-t-0 xl:ml-120 bg-slate-50">
      <Wave />
      <div class="relative">
				<slot />
			</div>
    </main>
    <footer class="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
      <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
        <AboutSection />
        <h2 class="mt-8 flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
          <span class="ml-2.5">Hosted by</span>
        </h2>
        <div class="mt-2 flex gap-6 text-sm font-bold leading-7 text-slate-900">
          Yoshcode
        </div>
      </div>
    </footer>

  </main>
</div>

<style>

</style>



