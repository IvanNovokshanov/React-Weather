import React, { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../../../hooks/store';
import {
	fetchCurrentWeather,
	fetchCurrentWeather7days
} from '../../../../store/thunks/fetchCurrentWeather';
import { Days } from '../Days';
import { ThisDay } from '../ThisDay';
import { ThisDayInfo } from '../ThisDayInfo';

import style from './style.module.scss';
interface Props {}

export const Home = (props: Props) => {
	const dispatch = useCustomDispatch();
	const { weather } = useCustomSelector(
		state => state.currentWeatherSliceReducer
	);
	const { town } = useCustomSelector(
		state => state.currentWeatherSliceReducer
	);
	const dayReg = new RegExp(/\d\d\d\d-\d\d-\d\d 12:00:00$/gm);

	const daysWeather = useCustomSelector(state =>
		state.currentWeatherSlice7daysReducer.daysWeather.list?.filter(
			(el: any) => el.dt_txt.match(dayReg)
		)
	);

	useEffect(() => {
		dispatch(fetchCurrentWeather(town));
	}, [town]);
	useEffect(() => {
		dispatch(fetchCurrentWeather7days(town));
	}, [town]);
	return (
		<div className={style.home}>
			<div className={style.wrapper}>
				<ThisDay weather={weather} />
				<ThisDayInfo weather={weather} />
			</div>
			<Days daysWeather={daysWeather} />
		</div>
	);
};
