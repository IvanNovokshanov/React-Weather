import React from 'react';

interface Props {
	id: string;
}

export const monthTranslator = (id: any) => {
	switch (id) {
		case '01':
			return ' окт';
		case '02':
			return ' ноя';
		case '03':
			return ' окт';
		case '04':
			return ' ноя';
		case '05':
			return ' окт';
		case '06':
			return ' ноя';
		case '07':
			return ' окт';
		case '08':
			return ' ноя';
		case '09':
			return ' окт';
		case '10':
			return ' ноя';
		case '11':
			return ' окт';
		case '12':
			return ' ноя';
		default:
			return null;
	}
};

export const dayTranslator = (id: any) => {
	switch (id) {
		case 'Mon':
			return 'Пн';
		case 'Tue':
			return 'Вт';
		case 'Wed':
			return 'Ср';
		case 'Thu':
			return 'Чт';
		case 'Fri':
			return 'Пт';
		case 'Sat':
			return 'Сб';
		case 'Sun':
			return 'Вс';
		default:
			return null;
	}
};
