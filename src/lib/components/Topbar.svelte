<script lang="ts">
	import { showDate, showTime } from '$lib/context.svelte';
	let time = $state(new Date().toLocaleTimeString());
	let date = $state(new Date().toLocaleDateString());

	$effect(() => {
		let interval = setInterval(() => {
			time = new Date().toLocaleTimeString();
			date = new Date().toLocaleDateString();
		}, 100);
		return () => {
			clearInterval(interval);
		};
	});
</script>

{#if showDate.current == 'true' || showTime.current == 'true'}
	<div
		class="fixed right-2 left-2 z-20 my-2 flex h-4 items-center justify-center bg-dark-background text-gray-200 select-none"
	>
		<button class="px-4 text-center text-sm">
			{#if showDate.current == 'true'}
				{date}
			{/if}
			{#if showTime.current == 'true'}
				{time}
			{/if}
		</button>
	</div>
{/if}
