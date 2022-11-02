import React from 'react';
import { Home } from './Pages/Home/components/Home';
import { MonthStatistics } from './Pages/MonthStatistics/components/MonthStatistics';
import { Header } from './shared/Header';
import { Popup } from './shared/Popup';
import { Routes, Route, Link } from 'react-router-dom';
import { Spinner } from './Pages/Home/components/Spinner';

export const App = () => {
	return (
		<div className="global">
			{/* <Popup /> */}
			<div className="container">
				<Spinner />
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />

					<Route
						path="/month-statistics"
						element={<MonthStatistics />}
					/>
				</Routes>
			</div>
		</div>
	);
};
