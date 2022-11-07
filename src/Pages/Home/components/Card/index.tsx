import React, { useState, FC } from 'react';
import style from './style.module.scss';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { List, Weather } from '../../../../store/types/types';
import {
	monthTranslator,
	dayTranslator
} from '../../../../assets/translator/LanguageTranslator';

interface ICardProps {
	day: Weather;
	night: Weather;
	onClickCard: (day: Weather) => void;
}

export const Card: FC<ICardProps> = ({ day, night, onClickCard }) => {
	const dataDay = day.dt_txt.substring(8, 10);
	const tempDay = Math.floor(day.main.temp);
	const tempNight = Math.floor(night.main.temp);
	const imgId = day.weather[0].main;
	const month = day.dt_txt.substring(5, 7);
	const time = new Date(day.dt_txt).toDateString().substring(0, 3);

	return (
		<>
			<div className={style.card} onClick={() => onClickCard(day)}>
				<div className={style.day}>{dayTranslator(time)}</div>
				<div className={style.day_info}>
					<div>
						{dataDay}
						{monthTranslator(month)}
					</div>
				</div>
				<div className={style.img}>
					<GlobalSvgSelector id={imgId} />
				</div>
				<div className={style.day_temp}>{tempDay}°</div>
				<div className={style.day_temp_night}>{tempNight}°</div>
				<div className={style.info}>{day.weather[0].description}</div>
			</div>
		</>
	);
};
