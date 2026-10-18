<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		type = 'normal',
		onclick,
		children
	}: {
		type?: 'normal' | 'destructive';
		onclick?: () => void;
		children: Snippet;
	} = $props();
</script>

<button
	class="px-2 py-1 {type == 'normal' ? ' hover:bg-gray-400/30' : 'hover:bg-red-400'}"
	{onclick}
>
	{@render children()}
</button>
