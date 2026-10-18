<script lang="ts">
	import { asset } from '$app/paths';
	import { slide } from 'svelte/transition';

	const resumeUrl = asset('Resume-Theophilus-Nenhanga-102026.pdf');
	let viewResume = $state(false);
</script>

<article
	class="flex h-full flex-col space-y-4 overflow-y-auto bg-dark-background p-6 text-white select-none md:space-y-6"
>
	<h2 class="text-2xl">Resume Download</h2>

	<p class="border-t pt-6">View or download my resume</p>

	{#if viewResume}
		<!-- #toolbar=0&navpanes=0 only hide the toolbar in Chromium's PDF viewer; Firefox's
		     built-in PDF.js viewer ignores them and always shows its toolbar (it only supports
		     #page/#zoom/#pagemode etc). -->
		<div class="min-h-0 flex-1">
			<iframe
				transition:slide
				class="h-full w-full border-0"
				title="Resume Preview"
				src={resumeUrl + '#toolbar=0&navpanes=0'}
			></iframe>
		</div>
	{/if}

	<div class="flex gap-4">
		<button
			aria-expanded={viewResume}
			class="cursor-pointer border border-gray-400 px-3 py-1.5 transition-all duration-250 hover:border-white"
			onclick={() => {
				viewResume = !viewResume;
			}}
		>
			{viewResume ? 'Close Preview' : 'Open Preview'}
		</button>
		<a
			class="w-min cursor-pointer border border-gray-400 px-3 py-1.5 whitespace-nowrap transition-all duration-250 hover:border-white"
			href={resumeUrl}
			download={resumeUrl}>Download</a
		>
	</div>
</article>
