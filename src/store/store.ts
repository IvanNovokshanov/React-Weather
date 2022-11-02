import { configureStore, combineReducers } from '@reduxjs/toolkit';
import currentWeatherSliceReducer from './slices/currentWeatherSlice';
import currentWeatherSlice7daysReducer from './slices/currentWeather7daysSlice';

// const rootReducer = combineReducers({
// 	currentWeatherSliceReducer,
// 	currentWeatherSlice7daysReducer
// });

// export const store = configureStore({
// 	reducer: rootReducer,
// 	middleware: getDefaultMiddleware =>
// 		getDefaultMiddleware({
// 			serializableCheck: false
// 		})
// });
export const store = configureStore({
	reducer: { currentWeatherSliceReducer, currentWeatherSlice7daysReducer },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});
// export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
