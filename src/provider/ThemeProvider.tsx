import React, { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from '../context/ThemeContext';
import { changeCssRoot } from '../model/changeCssRoot';
import { storage } from '../model/storage';

interface Props {
	children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
	const [theme, setTheme] = useState<Theme>(
		storage.getItem('theme') || Theme.LIGHT
	);
	changeCssRoot(theme);
	function changeTheme(theme: Theme) {
		storage.setItem('theme', theme);
		setTheme(theme);
		changeCssRoot(theme);
	}
	return (
		<ThemeContext.Provider
			value={{
				theme,
				changeTheme
			}}
			{...props}
		>
			{children}
		</ThemeContext.Provider>
	);
};
