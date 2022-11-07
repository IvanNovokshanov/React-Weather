import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { List, Weather5days } from '../types/types';

type CurrentWeather = {
	daysWeather: List[];
	isLoading: boolean;
	response: Response;
	town: string;
};

type Response = {
	status: number;
};
const initialState: CurrentWeather = {
	daysWeather: [
		{
			dt: 0,
			dt_txt: '',
			main: {
				temp: 0
			},
			weather: []
		}
	],
	isLoading: false,
	response: {
		status: 0
		// message: ''
	},
	town: 'Москва'
};

export const currentWeather7daysSlice = createSlice({
	name: 'current_weather7days',
	initialState,
	reducers: {
		fetchCurrentWeather(state) {
			state.isLoading = true;
		},
		fetchCurrentWeatherSuccess(
			state,
			action: PayloadAction<AxiosResponse<List[]>>
		) {
			state.isLoading = false;
			state.daysWeather = action.payload.data;
			state.response = {
				status: action.payload.status
			};
		},
		fetchCurrentWeatherError(
			state,
			action: PayloadAction<AxiosResponse<List[]>>
		) {
			state.isLoading = false;
			state.response = {
				status: action.payload.status
			};
		},
		currentTown(state, action) {
			state.town = action.payload;
		}
	}
});

export default currentWeather7daysSlice.reducer;
