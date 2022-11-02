import React, { FC } from 'react';
import style from './style.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import { Item } from '../../Pages/Home/components/ThisDayInfo';
import { ThisDayItem } from '../../Pages/Home/components/ThisDayItem';
import { List } from '../../store/types/types';

interface IPopupProps {
	closePopup: () => void;
	dataPopup: List | undefined;
}

export const Popup: FC<IPopupProps> = ({ closePopup, dataPopup }) => {
	console.log('IVANNNN', dataPopup);

	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: `20° - ощущается как 17°`
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: '765 мм ртутного столба - нормальное'
		},
		{
			icon_id: 'precipitation',
			name: 'Осадки',
			value: 'Без осадков'
		},
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: '3 м/с юго-запад - легкий ветер'
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
// export const Popup = (props: Props) => {
// 	const items = [
// 		{
// 			icon_id: 'temp',
// 			name: 'Температура',
// 			value: '20° - ощущается как 17°'
// 		},
// 		{
// 			icon_id: 'pressure',
// 			name: 'Давление',
// 			value: '765 мм ртутного столба - нормальное'
// 		},
// 		{
// 			icon_id: 'precipitation',
// 			name: 'Осадки',
// 			value: 'Без осадков'
// 		},
// 		{
// 			icon_id: 'wind',
// 			name: 'Ветер',
// 			value: '3 м/с юго-запад - легкий ветер'
// 		}
// 	];
// 	return (
// 		<>
// 			<div className={style.blur}></div>
// 			<div className={style.popup}>
// 				<div className={style.day}>
// 					<div className={style.day_temp}>20°</div>
// 					<div className={style.day_name}>Среда</div>
// 					<div className={style.img}>
// 						<GlobalSvgSelector id="sun" />
// 					</div>
// 					<div className={style.day_time}>
// 						Время:<span>21:24</span>
// 					</div>
// 					<div className={style.day_city}>
// 						Город:<span>Пермь</span>
// 					</div>
// 				</div>
// 				<div className={style.this_day_info}>
// 					{items.map((item: Item) => (
// 						<ThisDayItem item={item} key={item.icon_id} />
// 					))}
// 				</div>
// 				<div className={style.close}>
// 					<GlobalSvgSelector id="close" />
// 				</div>
// 			</div>
// 		</>
// 	);
// };
