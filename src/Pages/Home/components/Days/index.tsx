import React, { useState } from 'react';
import style from './style.module.scss';
import { Card } from '../Card';
import { Tabs } from '../Tabs';
import { Weather5days, List, Weather } from '../../../../store/types/types';
import { useCustomSelector } from '../../../../hooks/store';
import { Popup } from '../../../../shared/Popup';

export const Days = ({ daysWeather }: Weather5days) => {
	const [isShow, setIsShow] = useState(false);
	const [dataPopup, setDataPopup] = useState<Weather>();
	const dayReg = new RegExp(/\d\d\d\d-\d\d-\d\d 21:00:00$/gm);

	const daysWeatherNight = useCustomSelector(state =>
		state.currentWeatherSlice7daysReducer.daysWeather.list?.filter(
			(el: any) => el.dt_txt.match(dayReg)
		)
	);

	const onClickCard = (day: Weather) => {
		setIsShow(true);
		setDataPopup(day);
	};

	const closePopup = () => {
		console.log('!!!!');
		setIsShow(false);
	};
	return (
		<>
			{isShow && <Popup closePopup={closePopup} dataPopup={dataPopup} />}
			<Tabs />
			<div className={style.days}>
				{daysWeather?.map((day, i) => {
					const arr2 = daysWeatherNight[i];
					return (
						<Card
							day={day}
							onClickCard={onClickCard}
							night={arr2}
							key={day.dt}
						/>
					);
				})}
			</div>
		</>
	);
};
