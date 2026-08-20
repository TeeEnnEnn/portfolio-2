<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<meta property="og:site_name" content="Theophilus Nenhanga" />
	<meta property="og:locale" content="en_US" />
</svelte:head>
{@render children()}
