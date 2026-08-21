<script lang="ts">
	import {resolve} from "$app/paths";
	import type { Post } from "$lib/posts";

	const {post}: {post: Post} = $props();
</script>

<li>
	<a
		class="group block border border-gray-700 bg-dark-background/60 p-4 transition-colors hover:border-bright-orange duration-200 space-y-4"
		href={resolve(`/blog/${post.id}`)}
	>
		<span class="text-sm font-medium text-gray-400 ">
			{new Date(post.date).toLocaleDateString('en-CA')}
		</span>
		<h3 class="text-lg font-semibold text-gray-200 group-hover:text-bright-orange sm:text-xl duration-200">
			{post.title}
		</h3>
		<p class="text-sm text-gray-400 sm:text-base">{post.description}</p>
	</a>
</li>
