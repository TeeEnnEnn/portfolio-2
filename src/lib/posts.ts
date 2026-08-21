import type { Component } from 'svelte';

export type Post = {
	id: number;
	title: string;
	date: string;
	description: string;
	tags: string[];
	component: Component;
};

type PostMeta = { title: string; date: string; description: string; tags: string[] };

const modules = import.meta.glob('../content/blog/*.svx', {
	eager: true,
	import: 'default'
}) as Record<string, Component>;

const metadata = import.meta.glob('../content/blog/*.svx', {
	eager: true,
	import: 'metadata'
}) as Record<string, PostMeta>;

const raw = import.meta.glob('../content/blog/*.svx', {
	eager: true,
	query: '?raw',
	import: 'default'
}) as Record<string, string>;

function excerptFrom(rawSource: string): string {
	const body = rawSource.replace(/^---[\s\S]*?---/, '').trim();
	const paragraph = body.split(/\n{2,}/).find((block) => !block.startsWith('#') && block.trim());
	return (paragraph ?? '').trim().slice(0, 160);
}

const posts: Post[] = Object.entries(metadata)
	.map(([path, meta]) => ({
		id: 0,
		title: meta.title,
		date: meta.date,
		description: meta.description || excerptFrom(raw[path]),
		tags: meta.tags ?? [],
		component: modules[path]
	}))
	.sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title))
	.map((post, index) => ({ ...post, id: index }));

export function getPosts(): Post[] {
	return [...posts].reverse();
}

export function getPost(id: number): Post | undefined {
	return posts.find((post) => post.id === id);
}
