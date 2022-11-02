import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { Weather } from '../types/types';

type CurrentWeather = {
	weather: Weather;
	isLoading: boolean;
	response: Response;
	town: string;
};

type Response = {
	status: number;
	// massage: string;
};
const initialState: CurrentWeather = {
	weather: {
		main: {
			temp: 0,
			feels_like: 0,
			pressure: 0,
			precipitation: ''
		},
		wind: {
			speed: 0
		},
		weather: [
			{
				main: '',
				description: ''
			}
		]
	},
	isLoading: false,
	response: {
		status: 0
		// message: ''
	},
	town: 'Москва'
};

export const currentWeatherSlice = createSlice({
	name: 'current_weather',
	initialState,
	reducers: {
		fetchCurrentWeather(state) {
			state.isLoading = true;
		},
		fetchCurrentWeatherSuccess(
			state,
			action: PayloadAction<AxiosResponse<Weather>>
		) {
			state.isLoading = false;
			state.weather = action.payload.data;
			state.response = {
				status: action.payload.status
				// message: action.payload.statusText
			};
		},
		fetchCurrentWeatherError(
			state,
			action: PayloadAction<AxiosResponse<Weather>>
		) {
			state.isLoading = false;
			state.response = {
				status: action.payload.status
				// message: action.payload.statusText
			};
		},
		currentTown(state, action) {
			state.town = action.payload;
		}
	}
});

// export const currentTown = currentWeatherSlice.actions;
// console.log('!!!!!!!!!!!!!!!!!', currentWeatherSlice.actions.currentTown);

export default currentWeatherSlice.reducer;
