import { configureStore, combineReducers } from '@reduxjs/toolkit';
import currentWeatherSliceReducer from './slices/currentWeatherSlice';
import currentWeatherSlice7daysReducer from './slices/currentWeather7daysSlice';
export const store = configureStore({
	reducer: { currentWeatherSliceReducer, currentWeatherSlice7daysReducer },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
