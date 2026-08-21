import { getPosts } from '$lib/posts';
import type { PageServerLoad } from '../$types';
export const prerender = true;

export const load: PageServerLoad = () => {
	const posts = getPosts().map((post) => ({
		id: post.id,
		title: post.title,
		date: post.date,
		description: post.description,
		tags: post.tags
	}));
	return {
		posts: posts
	};
};
