<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		id,
		children
	}: {
		id: number;
		children?: Snippet;
	} = $props();
	import TitleBarButton from './TitleBarButton.svelte';
	import {
		windows,
		showTitles,
		windowControlPosition,
		windowControlStyle,
		setFocus,
		windowMaximize,
		windowMinimize,
		windowRestore,
		windowClose,
		startTop,
		showDate,
		showTime,
		endTop,
		topBarHeight,
		minWidth,
		minHeight,
		activeWindowBorderWidth,
		activeWindowBorderColor,
		inactiveWindowBorderWidth,
		inactiveWindowBorderColor,
		titleBarColor,
		titleBarTextColor,
		isTopBarVisible,
		rightOffset
	} from '$lib/context.svelte';
	import TitleBarDot from './TitleBarDot.svelte';

	let thisWindow = $derived(windows[id]);

	let dragging = $state(false);
	let resizing = $state(false);
	let currentLeft = $derived(thisWindow.left);
	let currentTop = $derived(thisWindow.top);
	let dragStartX = $state(0);
	let dragStartY = $state(0);
	let initialLeft = $state(0);
	let initialTop = $state(0);
	let initialWidth = $state(0);
	let initialHeight = $state(0);

	function onMouseDownTitleBar(event: MouseEvent) {
		if (event.button !== 0) return;
		setFocus(id);
		dragging = true;
		dragStartX = event.clientX;
		dragStartY = event.clientY;
		initialLeft = thisWindow.left;
		initialTop = thisWindow.top;
	}

	function onMouseDownResize(event: MouseEvent) {
		if (event.button !== 0) return;
		setFocus(id);
		resizing = true;
		dragStartX = event.clientX;
		dragStartY = event.clientY;
		initialWidth = thisWindow.width;
		initialHeight = thisWindow.height;
	}

	$effect(() => {
		function onMouseMoveDragging(event: MouseEvent) {
			if (!dragging) return;

			const deltaX = event.clientX - dragStartX;
			const deltaY = event.clientY - dragStartY;

			let newLeft = initialLeft + deltaX;
			let newTop = initialTop + deltaY;

			if (newLeft < 0) {
				newLeft = 0;
			}

			if (newTop < 0) {
				newTop = 0;
			}

			if ((showDate.current === 'true' || showTime.current === 'true') && newTop < startTop) {
				newTop = startTop;
			}

			if (newLeft + thisWindow.width > window.innerWidth - rightOffset) {
				newLeft = window.innerWidth - thisWindow.width - rightOffset;
			}

			if (newTop + thisWindow.height > window.innerHeight - endTop) {
				newTop = window.innerHeight - thisWindow.height - endTop;
			}

			windows[id].left = newLeft;
			windows[id].top = newTop;

			// -rightOffset for `right-2`
			if (windows[id].left === window.innerWidth - thisWindow.width - rightOffset) {
				// console.log('You are at the right edge');
			}

			if (windows[id].top === window.innerHeight - thisWindow.height - endTop) {
				// console.log('You are at the bottom edge');
			}

			if (windows[id].left === 0) {
				// console.log('You are at the left edge');
			}

			if (isTopBarVisible() && windows[id].top === topBarHeight) {
				// console.log('You are at the top edge with a visible top bar');
			} else if (!isTopBarVisible() && windows[id].top === 0) {
				// console.log('You are at the top edge with a hidden top bar');
			}
		}

		function onMouseMoveResizing(event: MouseEvent) {
			if (!resizing) return;

			const deltaX = event.clientX - dragStartX;
			const deltaY = event.clientY - dragStartY;

			let newWidth = initialWidth + deltaX;
			let newHeight = initialHeight + deltaY;

			if (newWidth < minWidth) {
				newWidth = minWidth;
			}

			if (newHeight < minHeight) {
				newHeight = minHeight;
			}

			if (newWidth + thisWindow.left > window.innerWidth - rightOffset) {
				newWidth = window.innerWidth - thisWindow.left - rightOffset;
			}

			if (newHeight + thisWindow.top > window.innerHeight - endTop) {
				newHeight = window.innerHeight - thisWindow.top - endTop;
			}

			windows[id].width = newWidth;
			windows[id].height = newHeight;
		}

		function onMouseUpDragging() {
			if (dragging) {
				dragging = false;
			}
		}

		function onMouseUpResizing() {
			if (resizing) {
				resizing = false;
			}
		}

		if (dragging) {
			document.addEventListener('mousemove', onMouseMoveDragging);
			document.addEventListener('mouseup', onMouseUpDragging);

			return () => {
				document.removeEventListener('mousemove', onMouseMoveDragging);
				document.removeEventListener('mouseup', onMouseUpDragging);
			};
		}

		if (resizing) {
			document.addEventListener('mousemove', onMouseMoveResizing);
			document.addEventListener('mouseup', onMouseUpResizing);

			return () => {
				document.removeEventListener('mousemove', onMouseMoveResizing);
				document.removeEventListener('mouseup', onMouseUpResizing);
			};
		}
	});
</script>

<div
	class="absolute overflow-hidden bg-gray-200"
	style="
	width:{thisWindow.width}px;
	height:{thisWindow.height}px;
	left:{currentLeft}px;
	top:{currentTop}px;
	border-width:{thisWindow.hasFocus
		? activeWindowBorderWidth.current
		: inactiveWindowBorderWidth.current};
	border-color:{thisWindow.hasFocus
		? activeWindowBorderColor.current
		: inactiveWindowBorderColor.current};
	z-index:{thisWindow.zIndex};"
>
	<button
		class="absolute right-0 bottom-0 cursor-nw-resize"
		aria-label="{thisWindow.name} window resize"
		onmousedown={onMouseDownResize}
	>
		<svg
			class="text-white mix-blend-difference"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19 11V16C19 17.6569 17.6569 19 16 19H11"
				stroke="currentColor"
				stroke-width="3"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
	<div
		role="button"
		tabindex="0"
		style="background-color: {titleBarColor.current}; color: {titleBarTextColor.current}"
		class="flex h-6 w-full justify-between select-none {windowControlPosition.current === 'left' &&
			'flex-row-reverse'}"
		onmousedown={onMouseDownTitleBar}
	>
		<div class="flex items-center justify-center select-none">
			{#if showTitles.current == 'true'}
				<small class="px-2">{thisWindow.name}</small>
			{/if}
		</div>
		{#if windowControlStyle.current == 'windows'}
			<ul class="flex last:rounded-tr-sm">
				<TitleBarButton
					onclick={() => {
						windowMinimize(id);
					}}
					><svg
						width="10"
						height="10"
						viewBox="0 0 10 10"
						xmlns="http://www.w3.org/2000/svg"
						shape-rendering="crispEdges"
					>
						<line x1="0" y1="5.5" x2="10" y2="5.5" stroke="currentColor" />
					</svg></TitleBarButton
				>
				{#if windows[id].openState == 'maximized'}
					<TitleBarButton
						onclick={() => {
							windowRestore(id);
						}}
					>
						<svg
							width="10"
							height="10"
							viewBox="0 0 10 10"
							xmlns="http://www.w3.org/2000/svg"
							shape-rendering="crispEdges"
						>
							<path d="M2.5 0.5H9.5V7.5" fill="none" stroke="currentColor" />
							<rect x="0.5" y="2.5" width="7" height="7" fill="none" stroke="currentColor" />
						</svg>
					</TitleBarButton>
				{:else}
					<TitleBarButton
						onclick={() => {
							windowMaximize(id, window);
						}}
						><svg
							width="10"
							height="10"
							viewBox="0 0 10 10"
							xmlns="http://www.w3.org/2000/svg"
							shape-rendering="crispEdges"
						>
							<rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="currentColor" />
						</svg></TitleBarButton
					>
				{/if}
				<TitleBarButton
					type="destructive"
					isLast={true}
					onclick={() => {
						windowClose(id);
					}}
					><svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-width="1" />
					</svg></TitleBarButton
				>
			</ul>
		{:else}
			<ul class="mx-2 flex gap-1 py-1">
				<TitleBarDot
					color="red"
					onclick={() => {
						windowClose(id);
					}}
				/>
				<TitleBarDot
					color="amber"
					onclick={() => {
						windowMinimize(id);
					}}
				/>
				<TitleBarDot
					color="green"
					onclick={() => {
						if (windows[id].openState === 'maximized') {
							windowRestore(id);
						} else {
							windowMaximize(id, window);
						}
					}}
				/>
			</ul>
		{/if}
	</div>
	<div
		role="button"
		tabindex="0"
		class="overflow-y-auto overscroll-none"
		style="height:{thisWindow.height - topBarHeight}px;"
		onmouseup={() => {
			setFocus(id);
		}}
	>
		{@render children?.()}
	</div>
</div>
