<script lang="ts">
	import PostThumbnail from '$lib/components/PostThumbnail.svelte';
	import {resolve} from "$app/paths"

	let { data } = $props();

	const posts = $derived(data.posts);
</script>

<div class="container mx-auto max-w-prose space-y-6 px-4 py-6 sm:px-6 sm:py-8">
	<nav class="mb-6 sm:mb-8">
		<a
			href={resolve('/')}
			class="text-sm font-medium text-gray-400 transition-colors hover:text-bright-orange"
		>
			← home
		</a>
	</nav>

	<hgroup class="mb-6 sm:mb-8">
		<h1 class="text-3xl leading-snug font-bold text-bright-orange sm:text-4xl sm:leading-loose">
			Blog
		</h1>
		<p class="text-sm text-gray-400 sm:text-base">A collection of thoughts and ramblings.</p>
	</hgroup>

	<div class="h-px w-full bg-gray-400">

	</div>

	<div>
		<h2 class="text-xl font-bold text-bright-orange sm:text-2xl">Table of Contents</h2>
		<ul class="mt-4 space-y-4">
			{#each posts as post (post.id)}
				<PostThumbnail post={post}/>
			{/each}
		</ul>
	</div>
</div>
