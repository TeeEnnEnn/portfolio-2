<script lang="ts">
	import '../layout.css';

	let { children } = $props();
</script>

<main class="flex min-h-dvh flex-col bg-dark-background text-gray-300">
	{@render children()}
</main>

<style>
	:global(pre) {
		overflow-x: auto;
		max-width: 100%;
	}
</style>
