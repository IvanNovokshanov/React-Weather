import React from 'react';
import s from './style.module.scss';
import { IndicatorSvgSelector } from '../../../../assets/icons/indicator/IndicatorSvgSelector';
import { Item } from '../ThisDayInfo';

interface Props {
	item: Item;
}

export const ThisDayItem = ({ item }: Props) => {
	const { icon_id, name, value } = item;
	return (
		<div className={s.item}>
			<div className={s.indicator}>
				<IndicatorSvgSelector id={icon_id} />
			</div>
			<div className={s.indicator_name}>{name}</div>
			<div className={s.indicator_value}>{value}</div>
		</div>
	);
};
