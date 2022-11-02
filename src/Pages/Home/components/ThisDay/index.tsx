import React from 'react';
import s from './style.module.scss';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';
import { useCustomSelector } from '../../../../hooks/store';

interface Props {
	weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
	console.log('!!!!', weather);
	const date = new Date();
	const { town } = useCustomSelector(
		state => state.currentWeatherSliceReducer
	);
	const data = weather.weather[0].main;
	const imageSelector = () => {
		if (data === 'Rain') {
			return 'rain';
		}
		if (data === 'Clouds') {
			return 'mainly_cloudy';
		}
		if (data === 'Clear') {
			return 'sun';
		}
		if (data === 'Snow') {
			return 'snow';
		}
	};
	return (
		<div className={s.this_day}>
			<div className={s.top_block}>
				<div className={s.top_block_wrapper}>
					<div className={s.this_temp}>
						{Math.floor(weather.main.temp)}°
					</div>
					<div className={s.this_day_name}>Сегодня</div>
				</div>
				{/* <GlobalSvgSelector id="sun" /> */}
				<GlobalSvgSelector id={data} />
			</div>
			<div className={s.bottom_block}>
				<div className={s.this_time}>
					Время:
					<span>
						{date.getHours()}:{date.getMinutes()}
					</span>
				</div>
				<div className={s.this_city}>
					Город:<span>{town}</span>
				</div>
			</div>
		</div>
	);
};
