<script>
	// import { allArticles } from "./articles/stores";
	// let value;
	// export let data;

	// $: articles = data
</script>

<!-- <form on:submit|preventDefault={search} class="relative max-w-lg mt-8 mx-auto flex flex-row"> -->
<form method="POST" class="relative max-w-lg mt-8 mx-auto flex flex-row">
	<label for="name" class="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">Type anything...</label>
	<input
		type="text"
		name="name"
		id="name"
		class="block px-4 w-full rounded-l-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
	/>
	<!-- <input bind:value type="text" name="name" id="name" class="block px-4 w-full rounded-l-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-pink-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"> -->
	<button
		type="button"
		class="relative inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
	>
		Search
	</button>
</form>
