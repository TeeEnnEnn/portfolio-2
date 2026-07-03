<script lang="ts">
	const resumeUrl = 'TheophilusNenhanga-Resume-0626.pdf';
</script>

<article
	class="flex h-full flex-col items-center space-y-10 overflow-y-auto bg-dark-background p-6 text-white select-none md:space-y-12"
>
	<h2 class="text-2xl">Resume Download</h2>

	<a href={resumeUrl} download={resumeUrl}>
		<button
			class="cursor-pointer border border-gray-400 px-3 py-1.5 transition-all duration-250 hover:border-white"
			>Download</button
		>
	</a>

	<p>Thank you for taking the time to look at my resume!</p>
</article>
