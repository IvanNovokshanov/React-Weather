import React from 'react';
import s from './style.module.scss';

interface Props {}
export interface Tabs {
	value: string;
	target: boolean;
}

export const Tabs = (props: Props) => {
	const tabs = [
		{ value: 'На 5 дней', target: true },
		{ value: 'На 10 дней', target: false },
		{ value: 'На месяц', target: false }
	];
	return (
		<div className={s.tabs}>
			<div className={s.wrapper}>
				{tabs.map((tab: Tabs) => (
					<div
						className={tab.target ? s.tab + ' ' + s.active : s.tab}
						key={tab.value}
					>
						{tab.value}
					</div>
				))}
			</div>
			<div className={s.cancel}>Отменить</div>
		</div>
	);
};
