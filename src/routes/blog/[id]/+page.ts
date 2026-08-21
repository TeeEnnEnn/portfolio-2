import { getPost, getPosts } from '$lib/posts';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return getPosts().map((post) => ({ id: String(post.id) }));
}

export const load = ({ params }) => {
	const id = Number(params.id);
	if (!Number.isInteger(id) || id < 0) {
		throw error(400, `Invalid blog entry id "${params.id}"`);
	}

	const post = getPost(id);
	if (!post) throw error(404, `No blog entry found for "${params.id}"`);

	return { post };
};
