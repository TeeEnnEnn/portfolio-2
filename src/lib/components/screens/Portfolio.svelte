<script lang="ts">
	import { githubUrl } from '$lib/utils';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import ExternalIcon from '$lib/assets/ExternalIcon.svelte';
</script>

<article
	class="flex h-full flex-col space-y-10 overflow-y-auto bg-dark-background p-6 text-white select-none md:space-y-12"
>
	<div class="flex flex-col space-y-2">
		<img class="h-48 w-48 self-center" src="favicon.svg" alt="TNN Logo" />
		<h1 class="text-2xl font-semibold text-white">Theophilus Nyasha Nenhanga</h1>
		<h2 class="text-lg font-medium text-gray-300">Full Stack Developer</h2>
		<p class="text-sm text-gray-400">
			I build with performance in mind to be kind to machines, and with usability in mind to be kind
			to humans.
		</p>
	</div>

	<div class=" flex items-center gap-4">
		<a
			class="flex transition-colors hover:text-blue-400"
			href={githubUrl}
			aria-label="github icon"
			target="_blank"
			rel="noopener noreferrer"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="h-6 w-6"
				aria-hidden="true"
			>
				<path
					d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
				></path>
			</svg>
		</a>
		<a
			class="flex transition-colors hover:text-blue-400"
			href="https://www.linkedin.com/in/theophilus-nenhanga/"
			aria-label="linkedin icon"
			target="_blank"
			rel="noopener noreferrer"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="h-7 w-7"
				aria-hidden="true"
			>
				<path
					d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
				></path>
			</svg>
		</a>
	</div>

	<section class=" space-y-4">
		<h3 class="border-b border-gray-600 pb-2 text-lg font-medium text-white">Experience</h3>
		<div class="space-y-4">
			<div>
				<h4 class="text-base font-medium text-white">
					Intern Web Developer
					<span class="text-gray-400"
						>@ <a
							href="https://zu.com"
							class="text-blue-400 hover:underline"
							target="_blank"
							rel="noopener noreferrer">zu</a
						></span
					>
				</h4>
				<p class="mb-2 text-xs text-gray-400">September 2024 - September 2025</p>
				<p class="mb-3 text-sm text-gray-300">
					I contributed to feature development, bug fixes, and improvements for internal tools and
					client-facing websites.
				</p>
				<p class="mb-3 text-sm text-gray-300">
					I also supported engineering initiatives, including:
				</p>
				<ul class="mb-3 list-inside list-disc text-sm text-gray-300">
					<li>Defining security standards for Drupal authentication</li>
					<li>Assisting with accessibility improvements to meet WCAG 2.1 AA standards</li>
					<li>Building internal monitoring dashboards</li>
					<li>Investigating emerging technologies (e.g. Drupal AI)</li>
				</ul>

				<p class="mb-3 text-sm text-gray-300">The main projects I worked on were:</p>
				<ul class="mb-3 list-inside list-disc text-sm text-gray-300">
					<li>
						Sandbox Mutual Insurance's <a
							href="https://sandbox.ca/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-blue-400 hover:underline">website</a
						>
						and
						<a
							href="https://portal.sandbox.ca/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-blue-400 hover:underline">client portal</a
						>
					</li>
					<li>
						Saskatchewan Cancer Agency's <a
							href="https://www.saskcancer.ca/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-blue-400 hover:underline">intranet</a
						>
					</li>
					<li>
						zu's <a
							href="https://zu.com/"
							target="_blank"
							rel="noopener noreferrer"
							class="text-blue-400 hover:underline">website</a
						>
					</li>
				</ul>

				<div class="flex flex-wrap gap-2">
					<Badge>PHP</Badge>
					<Badge>Drupal</Badge>
					<Badge>Symfony</Badge>
					<Badge>Astro</Badge>
					<Badge>Typescript</Badge>
				</div>
			</div>
		</div>
	</section>

	<section class="space-y-6">
		<h3 class="border-b border-gray-600 pb-2 text-lg font-medium text-white">Projects</h3>
		<div class="space-y-6">
			<div>
				<h4
					class="group mb-1 text-base font-medium text-white transition-all duration-150 hover:text-blue-300 hover:underline"
				>
					<a class="inline-flex items-center justify-center" href="{githubUrl}/crux-lang"
						>Crux Lang
						<ExternalIcon />
					</a>
				</h4>
				<p class="mb-3 text-sm text-gray-300">
					A custom programming language implementation based on Lox from <a
						href="https://craftinginterpreters.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-blue-400 hover:underline">Crafting Interpreters</a
					>. This project has strengthened my understanding of programming language design and
					implementation as well as key factors of performance and optimization.
				</p>
				<p class="mb-3 text-sm text-gray-300">Some features of the language include:</p>
				<ul class="mb-3 list-inside list-disc text-sm text-gray-300">
					<li>Object Oriented Programming with the use of structs and struct composition.</li>
					<li>
						Module system with <code>pub</code> keyword for public identifiers that other modules
						can <code>use</code>.
					</li>
					<li>
						<code>Result[T, E]</code> type for error handling, and <code>match</code> expressions for
						pattern matching.
					</li>
					<li>
						Mark and sweep garbage collector with object pooling as a runtime performance
						optimization.
					</li>
				</ul>
				<div class="flex flex-wrap gap-2">
					<Badge>C</Badge>
					<Badge variant="outline" class="border-gray-600 text-gray-400">Programming Language</Badge
					>
				</div>
			</div>

			<div>
				<h4
					class="group mb-1 text-base font-medium text-white transition-all duration-150 hover:text-blue-300 hover:underline"
				>
					<a
						class="inline-flex items-center justify-center"
						href="https://amacsk.itch.io/beach-defenders">Beach Defenders<ExternalIcon /></a
					>
				</h4>
				<p class="mb-3 text-sm text-gray-300">
					A pirate themed 3D tower defence game built with the Unity Engine. This game features
					procedurally generated levels with hordes of undead enemies threatening your beach. You
					are equipped with a sword and a revolver to take down the undead horde and protect your
					beach.
				</p>
				<div class="flex flex-wrap gap-2">
					<Badge>C#</Badge>
					<Badge>Unity Engine</Badge>
					<Badge variant="outline" class="border-gray-600 text-gray-400">3D Game</Badge>
				</div>
			</div>

			<div>
				<h4
					class="group mb-1 text-base font-medium text-white transition-all duration-150 hover:text-blue-300 hover:underline"
				>
					<a class="inline-flex items-center justify-center" href="{githubUrl}/flora-engine"
						>Flora Engine <ExternalIcon /></a
					>
				</h4>
				<p class="mb-3 text-sm text-gray-300">
					A lightweight immediate mode rendering UI framework built on SDL3, providing a foundation
					for creating performant Graphical User Interfaces in C.
				</p>
				<div class="flex flex-wrap gap-2">
					<Badge>C</Badge>
					<Badge>SDL3</Badge>
					<Badge variant="outline" class="border-gray-600 text-gray-400">UI Framework</Badge>
				</div>
			</div>
		</div>
	</section>

	<section class="space-y-4">
		<h3 class="border-b border-gray-600 pb-2 text-lg font-medium text-white">Bye</h3>
		<p class="inline-flex flex-wrap items-center text-sm">
			This website was built with &nbsp;<a
				href="https://svelte.dev/"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center text-blue-400 hover:underline"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 107 128"
					><title>svelte-logo</title><path
						d="M94.157 22.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282 29.608A29.92 29.92 0 0 0 8.764 49.65a31.5 31.5 0 0 0 3.108 20.231 30 30 0 0 0-4.477 11.183 31.9 31.9 0 0 0 5.448 24.116c10.402 14.887 30.942 19.297 45.791 9.835l26.083-16.624A29.92 29.92 0 0 0 98.235 78.35a31.53 31.53 0 0 0-3.105-20.232 30 30 0 0 0 4.474-11.182 31.88 31.88 0 0 0-5.447-24.116"
						style="fill:#ff3e00"
					/><path
						d="M45.817 106.582a20.72 20.72 0 0 1-22.237-8.243 19.17 19.17 0 0 1-3.277-14.503 18 18 0 0 1 .624-2.435l.49-1.498 1.337.981a33.6 33.6 0 0 0 10.203 5.098l.97.294-.09.968a5.85 5.85 0 0 0 1.052 3.878 6.24 6.24 0 0 0 6.695 2.485 5.8 5.8 0 0 0 1.603-.704L69.27 76.28a5.43 5.43 0 0 0 2.45-3.631 5.8 5.8 0 0 0-.987-4.371 6.24 6.24 0 0 0-6.698-2.487 5.7 5.7 0 0 0-1.6.704l-9.953 6.345a19 19 0 0 1-5.296 2.326 20.72 20.72 0 0 1-22.237-8.243 19.17 19.17 0 0 1-3.277-14.502 17.99 17.99 0 0 1 8.13-12.052l26.081-16.623a19 19 0 0 1 5.3-2.329 20.72 20.72 0 0 1 22.237 8.243 19.17 19.17 0 0 1 3.277 14.503 18 18 0 0 1-.624 2.435l-.49 1.498-1.337-.98a33.6 33.6 0 0 0-10.203-5.1l-.97-.294.09-.968a5.86 5.86 0 0 0-1.052-3.878 6.24 6.24 0 0 0-6.696-2.485 5.8 5.8 0 0 0-1.602.704L37.73 51.72a5.42 5.42 0 0 0-2.449 3.63 5.79 5.79 0 0 0 .986 4.372 6.24 6.24 0 0 0 6.698 2.486 5.8 5.8 0 0 0 1.602-.704l9.952-6.342a19 19 0 0 1 5.295-2.328 20.72 20.72 0 0 1 22.237 8.242 19.17 19.17 0 0 1 3.277 14.503 18 18 0 0 1-8.13 12.053l-26.081 16.622a19 19 0 0 1-5.3 2.328"
						style="fill:#fff"
					/></svg
				>
				&nbsp;Svelte</a
			>
			, and deployed on &nbsp;
			<a
				href="https://vercel.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center text-blue-400 hover:underline"
				><svg
					data-testid="geist-icon"
					height="16"
					stroke-linejoin="round"
					style="color:white"
					viewBox="0 0 16 16"
					width="16"
					><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor"
					></path></svg
				>&nbsp;Vercel</a
			>.
		</p>
		<p class="text-sm">
			The repository can be found <a
				href="{githubUrl}/portfolio-2"
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-400 hover:underline">here</a
			>
		</p>
	</section>
</article>
