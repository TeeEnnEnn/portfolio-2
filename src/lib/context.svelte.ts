import { PersistedState } from 'runed';
import type { Component } from 'svelte';
import Portfolio from './components/screens/Portfolio.svelte';
import Settings from './components/screens/Settings.svelte';
import PortfolioIcon from './assets/portfolio.svg';
import SettingsIcon from './assets/settings.svg';
import Resume from './components/screens/Resume.svelte';
import ResumeIcon from './assets/resume.svg';

export const showTitles = new PersistedState('showTitles', 'true');
export const windowControlStyle = new PersistedState('windowControlStyle', 'windows');
export const windowControlPosition = new PersistedState('windowControlPosition', 'right');
export const activeWindowBorderColor = new PersistedState('activeWindowBorderColor', '#FF5C33');
export const activeWindowBorderWidth = new PersistedState('activeWindowBorderWidth', '2px');
export const inactiveWindowBorderColor = new PersistedState('inactiveWindowBorderColor', '#ccc');
export const inactiveWindowBorderWidth = new PersistedState('inactiveWindowBorderWidth', '2px');
export const titleBarColor = new PersistedState('titleBarColor', '#272838');
export const titleBarTextColor = new PersistedState('titleBarTextColor', '#fff');
export const showTime = new PersistedState('showTime', 'true');
export const showDate = new PersistedState('showDate', 'true');

export function resetAllSettings() {
	showTitles.current = 'true';
	windowControlStyle.current = 'windows';
	windowControlPosition.current = 'right';
	showTime.current = 'true';
	showDate.current = 'true';
	activeWindowBorderColor.current = '#FF5C33';
	activeWindowBorderWidth.current = '2px';
	inactiveWindowBorderColor.current = '#ccc';
	inactiveWindowBorderWidth.current = '2px';
	titleBarColor.current = '#272838';
	titleBarTextColor.current = '#fff';
}

export let windowMaximized = false;
export const startTop = 24;
export const endTop = 56;
export const topBarHeight = 24;
export function isTopBarVisible() {
	const isVisible = $derived(showTime.current === 'true' || showDate.current === 'true');
	return isVisible;
}

const baseWidth = 800;
const baseHeight = 600;

export const baseLeft = 100;
export const baseTop = 100;

export const minWidth = 200;
export const minHeight = 100;

export const rightOffset = 16;

export type WindowState = {
	zIndex: number;
	openState: 'minimized' | 'maximized' | 'closed' | 'open';
	name: string;
	id: number;
	icon: string;
	component: Component;
	width: number;
	height: number;
	left: number;
	top: number;
	hasFocus: boolean;
	lastLeft: number;
	lastTop: number;
	lastWidth: number;
	lastHeight: number;
	lastState: 'minimized' | 'maximized' | 'closed' | 'open';
};

export const windows: WindowState[] = $state([
	{
		zIndex: 1,
		openState: 'open',
		name: 'Portfolio',
		id: 0,
		icon: PortfolioIcon,
		component: Portfolio,
		width: 800,
		height: 600,
		left: 20,
		top: 100,
		hasFocus: true,
		lastLeft: 0,
		lastTop: 0,
		lastWidth: 0,
		lastHeight: 0,
		lastState: 'closed'
	},
	{
		zIndex: 0,
		openState: 'open',
		name: 'Settings',
		id: 1,
		icon: SettingsIcon,
		component: Settings,
		width: 400,
		height: 600,
		left: 560,
		top: 70,
		hasFocus: false,
		lastLeft: 0,
		lastTop: 0,
		lastWidth: 0,
		lastHeight: 0,
		lastState: 'closed'
	},
	{
		zIndex: 0,
		openState: 'closed',
		name: 'Resume',
		id: 2,
		icon: ResumeIcon,
		component: Resume,
		width: 400,
		height: 200,
		left: 50,
		top: 70,
		hasFocus: false,
		lastLeft: 50,
		lastTop: 70,
		lastWidth: 500,
		lastHeight: 275,
		lastState: 'closed'
	}
]);

export function setFocus(id: number) {
	for (let i = 0; i < windows.length; i++) {
		if (windows[i].id === id) {
			windows[i].hasFocus = true;
			windows[i].zIndex = windows.length;
		} else {
			windows[i].hasFocus = false;
			windows[i].zIndex = 0;
		}
	}
}

export function windowMinimize(id: number) {
	windows[id].lastState = windows[id].openState;
	windows[id].lastLeft = windows[id].left;
	windows[id].lastTop = windows[id].top;
	windows[id].lastWidth = windows[id].width;
	windows[id].lastHeight = windows[id].height;
	windows[id].openState = 'minimized';
	windowMaximized = false;
}

export function windowUnMinimize(id: number) {
	if (windows[id].lastState === 'maximized') {
		windowMaximized = true;
	} else {
		windowMaximized = false;
	}
	windows[id].openState = windows[id].lastState;
	windows[id].left = windows[id].lastLeft;
	windows[id].top = windows[id].lastTop;
	windows[id].width = windows[id].lastWidth;
	windows[id].height = windows[id].lastHeight;
}

export function windowMaximize(id: number, window: Window) {
	windows[id].openState = 'maximized';
	windows[id].lastLeft = windows[id].left;
	windows[id].lastTop = windows[id].top;
	windows[id].lastWidth = windows[id].width;
	windows[id].lastHeight = windows[id].height;
	windows[id].left = 0;
	windows[id].top = startTop;
	windows[id].width = window.innerWidth;
	windows[id].height = window.innerHeight - endTop - startTop;
	windowMaximized = true;
}

export function windowClose(id: number) {
	windows[id].openState = 'closed';
	windows[id].lastLeft = windows[id].left;
	windows[id].lastTop = windows[id].top;
	windows[id].lastWidth = windows[id].width;
	windows[id].lastHeight = windows[id].height;
	windows[id].left = 0;
	windows[id].top = 0;
	windows[id].width = 0;
	windows[id].height = 0;
	windowMaximized = false;
}

export function windowOpen(id: number) {
	windows[id].openState = 'open';
	windows[id].left = windows[id].lastLeft === 0 ? baseLeft : windows[id].lastLeft;
	windows[id].top = windows[id].lastTop === 0 ? baseTop : windows[id].lastTop;
	windows[id].width = windows[id].lastWidth === 0 ? baseWidth : windows[id].lastWidth;
	windows[id].height = windows[id].lastHeight === 0 ? baseHeight : windows[id].lastHeight;
	// give focus to the window we just opened
	setFocus(id);
}

export function windowRestore(id: number) {
	windows[id].openState = 'open';
	windows[id].left = windows[id].lastLeft;
	windows[id].top = windows[id].lastTop;
	windows[id].width = windows[id].lastWidth;
	windows[id].height = windows[id].lastHeight;
	windowMaximized = false;
}
