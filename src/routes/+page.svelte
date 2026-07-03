<script lang="ts">
	import Portfolio from '$lib/components/screens/Portfolio.svelte';
	import Taskbar from '$lib/components/Taskbar.svelte';
	import Topbar from '$lib/components/Topbar.svelte';
	import Window from '$lib/components/Window.svelte';
	import DesktopIcon from '$lib/components/DesktopIcon.svelte';
	import wallpaper from '$lib/assets/wallpaper.webp';
	import { windows, windowOpen, setFocus } from '$lib/context.svelte';
	import { fly } from 'svelte/transition';

	function handleIconDoubleClick(id: number) {
		if (windows[id].openState === 'closed') {
			windowOpen(id);
		}
		setFocus(id);
	}
</script>

<main class="relative hidden h-screen max-h-screen overflow-hidden lg:block">
	<h1 class="sr-only">Theophilus Nenhanga - Full Stack Developer</h1>
	<div class="absolute inset-0 bg-blue-400 blur-md brightness-50" style="z-index: 0;">
		<img
			src={wallpaper}
			alt="Desktop Wallpaper"
			class="pointer-events-none h-full w-full object-cover"
		/>
	</div>
	<Topbar />
	<div
		class="absolute right-0 bottom-14 left-0 grid auto-cols-[100px] grid-rows-[repeat(auto-fill,100px)] gap-2 p-4"
		style="top: 24px; z-index: 1;"
	>
		{#each windows as w (w.id)}
			<DesktopIcon icon={w.icon} name={w.name} onDoubleClick={() => handleIconDoubleClick(w.id)} />
		{/each}
	</div>

	<div class="absolute inset-0 right-2 left-2" style="z-index: 10; pointer-events: none;">
		{#each windows as w (w.id)}
			{#if w.openState === 'open' || w.openState === 'maximized'}
				<div
					style="pointer-events: auto;"
					in:fly={{ duration: 350, x: -window.innerWidth / 2, y: window.innerHeight }}
					out:fly={{ duration: 500, x: -window.innerWidth / 2, y: window.innerHeight }}
				>
					<Window id={w.id}>
						{#if w.component}
							<w.component />
						{/if}
					</Window>
				</div>
			{/if}
		{/each}
	</div>

	<Taskbar />
</main>

<main class="lg:hidden">
	<Portfolio />
</main>
