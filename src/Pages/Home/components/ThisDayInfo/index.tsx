import React from 'react';
import s from './style.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from '../ThisDayItem';
import { Weather } from '../../../../store/types/types';
import { idText } from 'typescript';
import { precipitationTranslator } from '../../../../assets/translator/LanguageTranslator';

interface Props {
	weather: Weather;
}
export interface Item {
	icon_id: string;
	name: string;
	value: string;
}

export const ThisDayInfo = ({ weather }: Props) => {
	const data = weather.weather[0].main;
	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: `${Math.floor(
				weather.main.temp
			)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: `${weather.main.pressure} мм ртутного столба`
		},
		{
			icon_id: 'precipitation',
			name: 'Осадки',
			value: `${
				precipitationTranslator(data) === null
					? 'загрузка'
					: precipitationTranslator(data)
			}`
		},
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: `${Math.floor(weather.wind.speed)} м/с`
		}
	];
	return (
		<div className={s.this_day_info}>
			<div className={s.this_day_info_items}>
				{items.map((item: Item) => (
					<ThisDayItem item={item} key={item.icon_id} />
				))}
			</div>
			<img className={s.cloud_img} src={cloud} alt="" />
		</div>
	);
};
