import React, { FC } from 'react';
import style from './style.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../Pages/Home/components/ThisDayInfo';
import { ThisDayItem } from '../../Pages/Home/components/ThisDayItem';
import { List, Weather, Weather5days } from '../../store/types/types';
import {
	dayTranslator,
	precipitationTranslator
} from '../../assets/translator/LanguageTranslator';
import { useCustomSelector } from '../../hooks/store';

interface IPopupProps {
	closePopup: () => void;
	dataPopup: Weather;
}

export const Popup: FC<IPopupProps> = ({ closePopup, dataPopup }) => {
	const dataPrecipitation = dataPopup.weather[0].main;
	const dataDay = dataPopup.dt_txt.substring(11, 16);
	console.log('POP', dataPopup);
	console.log('POP2', dataDay);
	const { town } = useCustomSelector(
		state => state.currentWeatherSliceReducer
	);
	const time = new Date(dataPopup.dt_txt).toDateString().substring(0, 3);
	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: `${Math.floor(
				dataPopup?.main.temp
			)}° - ощущается как ${Math.floor(dataPopup.main.feels_like)}°`
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: `${dataPopup.main.pressure} мм ртутного столба`
		},
		{
			icon_id: 'precipitation',
			name: 'Осадки',
			value: `${
				precipitationTranslator(dataPrecipitation) === null
					? 'загрузка'
					: precipitationTranslator(dataPrecipitation)
			}`
		},
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: `${Math.floor(dataPopup.wind.speed)} м/с`
		}
	];
	return (
		<>
			<div className={style.blur}></div>
			<div className={style.popup}>
				<div className={style.day}>
					<div className={style.day_temp}>
						{Math.floor(dataPopup.main.temp)}°
					</div>
					<div className={style.day_name}>{dayTranslator(time)}</div>
					<div className={style.img}>
						<GlobalSvgSelector id={dataPrecipitation} />
					</div>
					<div className={style.day_time}>
						Время:<span>{dataDay}</span>
					</div>
					<div className={style.day_city}>
						Город:<span>{town}</span>
					</div>
				</div>
				<div className={style.this_day_info}>
					{items.map((item: Item) => (
						<ThisDayItem item={item} key={item.icon_id} />
					))}
				</div>
				<div className={style.close} onClick={closePopup}>
					<GlobalSvgSelector id="close" />
				</div>
			</div>
		</>
	);
};
