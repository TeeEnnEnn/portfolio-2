<script lang="ts">
	import Portfolio from '$lib/components/screens/Portfolio.svelte';
	import Taskbar from '$lib/components/Taskbar.svelte';
	import Topbar from '$lib/components/Topbar.svelte';
	import Window from '$lib/components/Window.svelte';
	import DesktopIcon from '$lib/components/DesktopIcon.svelte';
	import wallpaper from '$lib/assets/wallpaper.webp';
	import { githubUrl } from '$lib/utils';
	import { windows, windowOpen, setFocus } from '$lib/context.svelte';
	import { fly } from 'svelte/transition';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Theophilus Nenhanga',
		url: 'https://theophilusn.dev',
		image: 'https://theophilusn.dev/og-image.png',
		jobTitle: 'Full Stack Developer',
		description:
			'Software developer based in Saskatchewan, Canada, specializing in web applications and systems development with C.',
		address: {
			'@type': 'PostalAddress',
			addressRegion: 'Saskatchewan',
			addressCountry: 'CA'
		},
		sameAs: [githubUrl, 'https://www.linkedin.com/in/theophilus-nenhanga/'],
		knowsAbout: [
			'C',
			'TypeScript',
			'JavaScript',
			'PHP',
			'Svelte',
			'Drupal',
			'Symfony',
			'Astro',
			'Unity Engine',
			'Programming Language Design',
			'Garbage Collection',
			'Web Development',
			'Systems Programming'
		],
		hasOccupation: {
			'@type': 'Occupation',
			name: 'Full Stack Developer',
			occupationLocation: {
				'@type': 'City',
				name: 'Saskatchewan, Canada'
			}
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://theophilusn.dev'
		}
	};

	const jsonLdHtml =
		`<script type="application/ld+json">${JSON.stringify(jsonLd, null, '\t')}` + '</scr' + 'ipt>';

	function handleIconDoubleClick(id: number) {
		if (windows[id].openState === 'closed') {
			windowOpen(id);
		}
		setFocus(id);
	}
</script>

<svelte:head>
	<title>Theophilus Nenhanga - Developer Portfolio</title>
	<meta
		name="description"
		content="Theophilus Nenhanga, a software developer in Saskatchewan, Canada. I build web applications and systems software with C, TypeScript, Svelte, and more."
	/>
	<link rel="canonical" href="https://theophilusn.dev" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://theophilusn.dev" />
	<meta property="og:title" content="Theophilus Nenhanga - Developer Portfolio" />
	<meta
		property="og:description"
		content="Theophilus Nenhanga, a software developer in Saskatchewan, Canada. I build web applications and systems software with C, TypeScript, Svelte, and more."
	/>
	<meta property="og:image" content="https://theophilusn.dev/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Theophilus Nenhanga - Developer Portfolio" />

	<!-- Twitter/X Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Theophilus Nenhanga - Developer Portfolio" />
	<meta
		name="twitter:description"
		content="Theophilus Nenhanga, a software developer in Saskatchewan, Canada. I build web applications and systems software with C, TypeScript, Svelte, and more."
	/>
	<meta name="twitter:image" content="https://theophilusn.dev/og-image.png" />
	<meta name="twitter:image:alt" content="Theophilus Nenhanga - Developer Portfolio" />

	<!-- JSON-LD -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdHtml}
</svelte:head>

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
