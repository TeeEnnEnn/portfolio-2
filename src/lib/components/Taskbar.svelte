<script lang="ts">
	import { windows, windowOpen, windowMinimize, windowUnMinimize } from '$lib/context.svelte';

	function makeRenderSVG(icon: string): string {
		let prefixRemoved = icon.trim().replace('data:image/svg+xml,', '');
		let decoded = decodeURIComponent(prefixRemoved);
		return decoded;
	}
</script>

<div class="fixed right-2 bottom-0 left-2 my-2 flex h-12 bg-dark-background px-2 py-1">
	{#each windows as w (w.id)}
		<button
			class="group flex cursor-pointer items-center justify-center gap-2 px-4 transition-all duration-200 hover:bg-gray-400 {windows[
				w.id
			].hasFocus &&
				windows[w.id].openState !== 'closed' &&
				windows[w.id].openState !== 'minimized' &&
				'border border-bright-orange'}"
			onclick={() => {
				if (w.openState === 'open') {
					windowMinimize(w.id);
				} else if (w.openState === 'minimized') {
					windowUnMinimize(w.id);
				} else if (w.openState === 'closed') {
					windowOpen(w.id);
				}
			}}
		>
			<div
				class="flex flex-col items-center justify-center transition-all duration-100 group-active:scale-80"
			>
				<div class="h-6 w-6 text-gray-200" aria-label={w.name + ' task bar icon'}>
					{@html makeRenderSVG(w.icon)}
				</div>
				{#if (w.openState === 'open' || w.openState === 'maximized') && !w.hasFocus}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="12"
						viewBox="0 6 24 12"
						fill="none"
						stroke="gray"
						class="-mb-2 scale-150 transition-all duration-200"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"><path d="M5 12h14" /></svg
					>
				{:else if w.openState === 'minimized'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="12"
						viewBox="0 6 24 12"
						fill="none"
						stroke="gray"
						stroke-width="2"
						class="-mb-2"
						stroke-linecap="round"
						stroke-linejoin="round"><path d="M5 12h14" /></svg
					>
				{/if}
			</div>

			<span class="text-gray-200">
				{w.name}
			</span>
		</button>
	{/each}
</div>
