import React, { useState } from 'react';
import style from './style.module.scss';
import { Card } from '../Card';
import { Tabs } from '../Tabs';
import { Weather5days, List } from '../../../../store/types/types';
import { useCustomSelector } from '../../../../hooks/store';
import { Popup } from '../../../../shared/Popup';

export const Days = ({ daysWeather }: Weather5days) => {
	const [isShow, setIsShow] = useState(false);
	const [dataPopup, setDataPopup] = useState<List>();
	const dayReg = new RegExp(/\d\d\d\d-\d\d-\d\d 21:00:00$/gm);

	const daysWeatherNight = useCustomSelector(state =>
		state.currentWeatherSlice7daysReducer.daysWeather.list?.filter(
			(el: any) => el.dt_txt.match(dayReg)
		)
	);

	const onClickCard = (day: List) => {
		setIsShow(true);
		setDataPopup(day);
	};

	const closePopup = () => {
		console.log('!!!!');
		setIsShow(false);
	};
	return (
		// <>
		// 	<Tabs />
		// 	<div className={style.days}>
		// 		{dual?.map(el => (
		// 			<Card day={el.day} night={el.night} key={day.dt} />
		// 		))}
		// 	</div>
		// </>
		<>
			<Tabs />
			<div className={style.days}>
				{isShow && (
					<Popup closePopup={closePopup} dataPopup={dataPopup} />
				)}
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
