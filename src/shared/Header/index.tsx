import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import s from './style.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';
import { useCustomDispatch } from '../../hooks/store';
import { currentWeatherSlice } from '../../store/slices/currentWeatherSlice';

interface Props {}

export const Header = (props: Props) => {
	// const [theme, setTheme] = useState('light');
	const dispatch = useCustomDispatch();
	const theme = useTheme();
	const options = [
		{ value: 'moscow', label: 'Москва' },
		{ value: 'perm', label: 'Пермь' },
		{ value: 'batumi', label: 'Батуми' }
	];
	const lookTown = (town: string | undefined) => {
		console.log(town);
		dispatch(currentWeatherSlice.actions.currentTown(town));
	};

	const selectedOption = [{ value: 'chocolate', label: 'Москва' }];
	const colourStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor:
				theme.theme === Theme.DARK
					? '#4f4f4f'
					: 'rgba(71, 147, 255, 0.2)',
			width: '194px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			zIndex: '100'
		}),
		singleValue: (styles: any) => ({
			...styles,
			color: theme.theme === Theme.DARK ? '#fff' : '#000'
		})
	};
	const changeTheme = () => {
		theme.changeTheme(
			theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
		);
	};
	useEffect(() => {}, [theme.theme]);
	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<div className={s.logo}>
					<GlobalSvgSelector id="header-logo" />
				</div>
				<div className={s.title}>React weather</div>
			</div>
			<div className={s.wrapper}>
				<div className={s.change_theme} onClick={changeTheme}>
					<GlobalSvgSelector id="change-theme" />
				</div>
				<Select
					defaultValue={selectedOption}
					onChange={e => lookTown(e?.label)}
					styles={colourStyles}
					options={options}
				/>
			</div>
		</header>
	);
};
