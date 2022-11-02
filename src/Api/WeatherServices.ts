import axios, { AxiosResponse } from 'axios';
// import api from '../axios';
import { Weather, Weather5days, List } from '../store/types/types';

export class WeatherService {
	static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
		return axios.get<Weather>(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=328a3779f81eb9f322a292bf65fd569d&units=metric`
		);
	}
}

export class WeatherService7days {
	static getCurrentWeather7days(city: string): Promise<AxiosResponse<List>> {
		return axios.get<List>(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&appid=328a3779f81eb9f322a292bf65fd569d&units=metric`
		);
	}
}

// export class WeatherService7days {
// 	static getCurrentWeather7days(
// 		city: string
// 	): Promise<AxiosResponse<Weather5days>> {
// 		return axios.get<Weather5days>(
// 			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=328a3779f81eb9f322a292bf65fd569d&units=metric`
// 		);
// 	}
// }
// export class WeatherService {
// 	static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
// 		return axios.get<Weather>(
// 			`https://api.weather.yandex.ru/v2/forecast?${city}`,
// 			{
// 				headers: {
// 					'Access-Control-Allow-Origin': '*',
// 					'X-Yandex-API-Key': '811be238-2792-4ae2-b071-023462ed98b0'
// 				}
// 			}
// 		);
// 	}
