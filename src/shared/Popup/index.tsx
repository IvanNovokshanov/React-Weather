import React, { FC } from 'react';
import style from './style.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../Pages/Home/components/ThisDayInfo';
import { ThisDayItem } from '../../Pages/Home/components/ThisDayItem';
import { List, Weather, Weather5days } from '../../store/types/types';
import { precipitationTranslator } from '../../assets/translator/LanguageTranslator';

interface IPopupProps {
	closePopup: () => void;
	dataPopup: Weather;
}

export const Popup: FC<IPopupProps> = ({ closePopup, dataPopup }) => {
	console.log('IVANNNN', dataPopup.weather[0].main);
	const dataPrecipitation = dataPopup.weather[0].main;

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
					<div className={style.day_temp}>20°</div>
					<div className={style.day_name}>Среда</div>
					<div className={style.img}>
						<GlobalSvgSelector id="sun" />
					</div>
					<div className={style.day_time}>
						Время:<span>21:24</span>
					</div>
					<div className={style.day_city}>
						Город:<span>Пермь</span>
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
