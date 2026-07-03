<script lang="ts">
	import {
		showTitles,
		windowControlPosition,
		windowControlStyle,
		showTime,
		showDate,
		activeWindowBorderColor,
		activeWindowBorderWidth,
		inactiveWindowBorderColor,
		inactiveWindowBorderWidth,
		titleBarColor,
		titleBarTextColor,
		resetAllSettings
	} from '$lib/context.svelte';

	const titlesContent = [
		{ value: 'true', label: 'Show' },
		{ value: 'false', label: 'Hide' }
	];

	const controlStyleContent = [
		{ value: 'windows', label: 'Windows' },
		{ value: 'macos', label: 'macOS' }
	];

	const controlPositionContent = [
		{ value: 'left', label: 'Left' },
		{ value: 'right', label: 'Right' }
	];

	const borderWidthContent = [
		{ value: '1px', label: '1px' },
		{ value: '2px', label: '2px' },
		{ value: '3px', label: '3px' },
		{ value: '4px', label: '4px' }
	];

	let titleValue = $state(showTitles.current);
	let controlStyleValue = $state(windowControlStyle.current);
	let controlPositionValue = $state(windowControlPosition.current);
	let showTimeValue = $state(showTime.current);
	let showDateValue = $state(showDate.current);
	let activeWindowBorderColorValue = $state(activeWindowBorderColor.current);
	let activeWindowBorderWidthValue = $state(activeWindowBorderWidth.current);
	let inactiveWindowBorderColorValue = $state(inactiveWindowBorderColor.current);
	let inactiveWindowBorderWidthValue = $state(inactiveWindowBorderWidth.current);
	let titleBarColorValue = $state(titleBarColor.current);
	let titleBarTextColorValue = $state(titleBarTextColor.current);

	let hasChanges = $derived(
		titleValue !== showTitles.current ||
			controlStyleValue !== windowControlStyle.current ||
			controlPositionValue !== windowControlPosition.current ||
			showTimeValue !== showTime.current ||
			showDateValue !== showDate.current ||
			activeWindowBorderColorValue !== activeWindowBorderColor.current ||
			activeWindowBorderWidthValue !== activeWindowBorderWidth.current ||
			inactiveWindowBorderColorValue !== inactiveWindowBorderColor.current ||
			inactiveWindowBorderWidthValue !== inactiveWindowBorderWidth.current ||
			titleBarColorValue !== titleBarColor.current ||
			titleBarTextColorValue !== titleBarTextColor.current
	);

	function updateSettings() {
		showTitles.current = titleValue;
		windowControlStyle.current = controlStyleValue;
		windowControlPosition.current = controlPositionValue;
		showTime.current = showTimeValue;
		showDate.current = showDateValue;
		activeWindowBorderColor.current = activeWindowBorderColorValue;
		activeWindowBorderWidth.current = activeWindowBorderWidthValue;
		inactiveWindowBorderColor.current = inactiveWindowBorderColorValue;
		inactiveWindowBorderWidth.current = inactiveWindowBorderWidthValue;
		titleBarColor.current = titleBarColorValue;
		titleBarTextColor.current = titleBarTextColorValue;
	}

	function resetSettings() {
		titleValue = showTitles.current;
		controlStyleValue = windowControlStyle.current;
		controlPositionValue = windowControlPosition.current;
		showTimeValue = showTime.current;
		showDateValue = showDate.current;
		activeWindowBorderColorValue = activeWindowBorderColor.current;
		activeWindowBorderWidthValue = activeWindowBorderWidth.current;
		inactiveWindowBorderColorValue = inactiveWindowBorderColor.current;
		inactiveWindowBorderWidthValue = inactiveWindowBorderWidth.current;
		titleBarColorValue = titleBarColor.current;
		titleBarTextColorValue = titleBarTextColor.current;
	}

	function clearLocalStorage() {
		resetAllSettings();
		resetSettings();
	}
</script>

<div class="flex h-full flex-col space-y-6 bg-dark-background p-4 text-gray-200 select-none">
	<h2 class="text-2xl font-semibold text-white">Settings</h2>

	<div class="flex-1 space-y-4 overflow-y-auto border-t pt-4 pr-2 *:px-1 *:py-2">
		<section class="space-y-4">
			<h3 class="border-b border-gray-200 pb-2 text-lg font-medium">Window Appearance</h3>

			<div class="space-y-2">
				<label for="titleSelect" class="block text-sm font-medium"> Window Titles </label>
				<select
					id="titleSelect"
					bind:value={titleValue}
					class="w-full border border-gray-300 bg-dark-background/85 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				>
					{#each titlesContent as content (content.value)}
						<option value={content.value}>{content.label}</option>
					{/each}
				</select>
			</div>

			<div class="space-y-2">
				<label for="controlStyleSelect" class="block text-sm font-medium"> Control Style </label>
				<select
					id="controlStyleSelect"
					bind:value={controlStyleValue}
					class="w-full border border-gray-300 bg-dark-background/85 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				>
					{#each controlStyleContent as content (content.value)}
						<option value={content.value}>{content.label}</option>
					{/each}
				</select>
			</div>

			<div class="space-y-2">
				<label for="controlPositionSelect" class="block text-sm font-medium">
					Control Position
				</label>
				<select
					id="controlPositionSelect"
					bind:value={controlPositionValue}
					class="w-full border border-gray-300 bg-dark-background/85 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				>
					{#each controlPositionContent as content (content.value)}
						<option value={content.value}>{content.label}</option>
					{/each}
				</select>
			</div>
		</section>

		<section class="space-y-4">
			<h3 class="border-b border-gray-200 pb-2 text-lg font-medium">Window Borders</h3>

			<div class="space-y-2">
				<label for="activeWindowBorderColor" class="block text-sm font-medium">
					Active Window Border Color
				</label>
				<div class="flex gap-2">
					<input
						id="activeWindowBorderColor"
						type="color"
						bind:value={activeWindowBorderColorValue}
						class="h-10 w-16 cursor-pointer border border-gray-300"
					/>
					<input
						type="text"
						bind:value={activeWindowBorderColorValue}
						class="flex-1 border border-gray-300 bg-dark-background/85 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
					/>
				</div>
			</div>

			<div class="space-y-2">
				<label for="activeWindowBorderWidth" class="block text-sm font-medium">
					Active Window Border Width
				</label>
				<select
					id="activeWindowBorderWidth"
					bind:value={activeWindowBorderWidthValue}
					class="w-full border border-gray-300 bg-dark-background/85 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				>
					{#each borderWidthContent as content (content.value)}
						<option value={content.value}>{content.label}</option>
					{/each}
				</select>
			</div>

			<div class="space-y-2">
				<label for="inactiveWindowBorderColor" class="block text-sm font-medium">
					Inactive Window Border Color
				</label>
				<div class="flex gap-2">
					<input
						id="inactiveWindowBorderColor"
						type="color"
						bind:value={inactiveWindowBorderColorValue}
						class="h-10 w-16 cursor-pointer border border-gray-300"
					/>
					<input
						type="text"
						bind:value={inactiveWindowBorderColorValue}
						class="flex-1 border border-gray-300 bg-dark-background/85 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
					/>
				</div>
			</div>

			<div class="space-y-2">
				<label for="inactiveWindowBorderWidth" class="block text-sm font-medium">
					Inactive Window Border Width
				</label>
				<select
					id="inactiveWindowBorderWidth"
					bind:value={inactiveWindowBorderWidthValue}
					class="w-full border border-gray-300 bg-dark-background/85 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				>
					{#each borderWidthContent as content (content.value)}
						<option value={content.value}>{content.label}</option>
					{/each}
				</select>
			</div>
		</section>

		<section class="space-y-4">
			<h3 class="border-b border-gray-200 pb-2 text-lg font-medium">Title Bar</h3>

			<div class="space-y-2">
				<label for="titleBarColor" class="block text-sm font-medium"> Title Bar Color </label>
				<div class="flex gap-2">
					<input
						id="titleBarColor"
						type="color"
						bind:value={titleBarColorValue}
						class="h-10 w-16 cursor-pointer border border-gray-300"
					/>
					<input
						type="text"
						bind:value={titleBarColorValue}
						class="flex-1 border border-gray-300 bg-dark-background/85 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
					/>
				</div>
			</div>

			<div class="space-y-2">
				<label for="titleBarTextColor" class="block text-sm font-medium">
					Title Bar Text Color
				</label>
				<div class="flex gap-2">
					<input
						id="titleBarTextColor"
						type="color"
						bind:value={titleBarTextColorValue}
						class="h-10 w-16 cursor-pointer border border-gray-300"
					/>
					<input
						type="text"
						bind:value={titleBarTextColorValue}
						class="flex-1 border border-gray-300 bg-dark-background/85 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
					/>
				</div>
			</div>
		</section>

		<section class="space-y-4">
			<h3 class="border-b border-gray-200 pb-2 text-lg font-medium">Desktop Display</h3>

			<div class="space-y-2">
				<label for="showTimeSelect" class="block text-sm font-medium"> Show Time </label>
				<select
					id="showTimeSelect"
					bind:value={showTimeValue}
					class="w-full border border-gray-300 bg-dark-background/85 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				>
					{#each titlesContent as content (content.value)}
						<option value={content.value}>{content.label}</option>
					{/each}
				</select>
			</div>

			<div class="space-y-2">
				<label for="showDateSelect" class="block text-sm font-medium"> Show Date </label>
				<select
					id="showDateSelect"
					bind:value={showDateValue}
					class="w-full border border-gray-300 bg-dark-background/85 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
				>
					{#each titlesContent as content (content.value)}
						<option value={content.value}>{content.label}</option>
					{/each}
				</select>
			</div>
		</section>

		<section class="space-y-4 bg-red-500/30">
			<h3 class="border-b border-gray-200 pb-2 text-lg font-medium">Reset</h3>

			<p>Reset desktop customization settings?</p>

			<button
				onclick={clearLocalStorage}
				class="flex-1 cursor-pointer bg-red-700 px-4 py-2 text-white shadow-sm transition-colors hover:bg-red-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-300"
			>
				Reset
			</button>
		</section>
	</div>

	<!-- Action Buttons -->
	<div class="mt-6 flex gap-3 border-t border-gray-200 pt-4">
		<button
			onclick={updateSettings}
			disabled={!hasChanges}
			class="flex-1 cursor-pointer bg-bright-orange/70 px-4 py-2 text-white shadow-sm transition-colors hover:bg-bright-orange/85 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-300"
		>
			Save Changes
		</button>
		<button
			onclick={resetSettings}
			disabled={!hasChanges}
			class="cursor-pointer border border-gray-300 bg-dark-background/85 px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400"
		>
			Cancel
		</button>
	</div>
</div>
