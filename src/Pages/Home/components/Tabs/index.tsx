import React from 'react';
import style from './style.module.scss';

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
		<div className={style.tabs}>
			<div className={style.wrapper}>
				{tabs.map((tab: Tabs) => (
					<div
						className={
							tab.target
								? style.tab + ' ' + style.active
								: style.tab
						}
						key={tab.value}
					>
						{tab.value}
					</div>
				))}
			</div>
			<div className={style.cancel}>Отменить</div>
		</div>
	);
};
