import React, { useState, CSSProperties, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import ClockLoader from 'react-spinners/ClockLoader';
import { useCustomSelector } from '../../../../hooks/store';

const override: CSSProperties = {
	display: 'block',
	position: 'fixed',
	zIndex: '1031',
	top: '30%',
	right: '50%'
};

export const Spinner = () => {
	const { isLoading } = useCustomSelector(
		state => state.currentWeatherSliceReducer
	);
	let [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(isLoading);
	}, [isLoading]);
	return (
		<div className="sweet-loading">
			<ClockLoader
				color="#4793ff"
				loading={loading}
				cssOverride={override}
				size={100}
			/>
		</div>
	);
};
