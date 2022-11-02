import { WeatherService } from '../../Api/WeatherServices';
import { WeatherService7days } from '../../Api/WeatherServices';
import { currentWeatherSlice } from '../slices/currentWeatherSlice';
import { currentWeather7daysSlice } from '../slices/currentWeather7daysSlice';
import { AppDispatch } from '../store';

export const fetchCurrentWeather =
	(payload: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
			const res = await WeatherService.getCurrentWeather(payload);
			if (res.status === 200) {
				dispatch(
					currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res)
				);
			} else {
				dispatch(
					currentWeatherSlice.actions.fetchCurrentWeatherError(res)
				);
			}
		} catch (error) {
			console.log(error);
		}
	};
// export const fetchCurrentWeather7days =
// 	(payload: string) => async (dispatch: AppDispatch) => {
// 		try {
// 			dispatch(currentWeather7daysSlice.actions.fetchCurrentWeather());
// 			const res = await weatherService7days(payload);
// 			if (res.status === 200) {
// 				dispatch(
// 					currentWeather7daysSlice.actions.fetchCurrentWeatherSuccess(
// 						res
// 					)
// 				);
// 			} else {
// 				dispatch(
// 					currentWeather7daysSlice.actions.fetchCurrentWeatherError(
// 						res
// 					)
// 				);
// 			}
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

export const fetchCurrentWeather7days =
	(payload: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(currentWeather7daysSlice.actions.fetchCurrentWeather());
			const res = await WeatherService7days.getCurrentWeather7days(
				payload
			);
			if (res.status === 200) {
				dispatch(
					currentWeather7daysSlice.actions.fetchCurrentWeatherSuccess(
						res
					)
				);
			} else {
				dispatch(
					currentWeather7daysSlice.actions.fetchCurrentWeatherError(
						res
					)
				);
			}
		} catch (error) {
			console.log(error);
		}
	};
