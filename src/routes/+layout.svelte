<script lang="ts">
	import './layout.css';
	import { githubUrl } from '$lib/utils';

	let { children } = $props();

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
</script>

<svelte:head>
	<title>Theophilus Nenhanga - Developer Portfolio</title>
	<meta
		name="description"
		content="Theophilus Nenhanga, a software developer in Saskatchewan, Canada. I build web applications and systems software with C, TypeScript, Svelte, and more."
	/>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
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
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Theophilus Nenhanga" />

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
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd, null, '\t')}</script>`}
</svelte:head>
{@render children()}
