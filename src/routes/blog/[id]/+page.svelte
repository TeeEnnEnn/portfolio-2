<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();

	const post = $derived(data.post);

	const Post = $derived(post.component);

	const siteUrl = 'https://theophilusn.dev';
	const postUrl = $derived(`${siteUrl}/blog/${post.id}`);
	const title = $derived(`${post.title} — blog`);
	const keywords = $derived(post.tags.join(', '));

	const jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.description,
		datePublished: post.date,
		dateModified: post.date,
		keywords,
		mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
		author: {
			'@type': 'Person',
			name: 'Theophilus Nenhanga',
			url: siteUrl
		},
		publisher: {
			'@type': 'Person',
			name: 'Theophilus Nenhanga',
			url: siteUrl
		}
	});

	const jsonLdHtml = $derived(
		`<script type="application/ld+json">${JSON.stringify(jsonLd)}` + '</scr' + 'ipt>'
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={post.description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content="Theophilus Nenhanga" />
	<link rel="canonical" href={postUrl} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={postUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={post.description} />
	<meta property="og:site_name" content="Theophilus Nenhanga" />
	<meta property="og:locale" content="en_US" />
	<meta property="article:published_time" content={post.date} />
	{#each post.tags as tag (tag)}
		<meta property="article:tag" content={tag} />
	{/each}

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={post.description} />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdHtml}
</svelte:head>

<div class="container mx-auto max-w-prose px-4 py-6 sm:px-6 sm:py-8">
	<nav class="mb-6 sm:mb-8">
		<a
			href={resolve('/blog')}
			class="text-sm font-medium text-gray-400 transition-colors hover:text-bright-orange"
		>
			← blog
		</a>
	</nav>

	<hgroup class="mb-6 sm:mb-8">
		<h1 class="text-3xl leading-snug font-bold text-bright-orange sm:text-4xl sm:leading-loose">
			{post.title}
		</h1>
		<time class="text-sm text-gray-400 sm:text-base" datetime={post.date}
			>{new Date(post.date).toLocaleDateString('en-CA')}</time
		>
	</hgroup>

	<div class="prose max-w-none prose-invert prose-code:text-gray-100">
		<Post />
	</div>
</div>
