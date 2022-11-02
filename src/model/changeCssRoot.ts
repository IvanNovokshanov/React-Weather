import { Theme } from '../context/ThemeContext';

export function changeCssRoot(theme: Theme) {
	const root = document.querySelector(':root') as HTMLElement;
	const componentsTheme = [
		'body-background',
		'components-background',
		'card-background',
		'card-box-shadow',
		'text-color'
	];
	componentsTheme.forEach(el =>
		root.style.setProperty(`--${el}-default`, `var(--${el}-${theme})`)
	);
}
