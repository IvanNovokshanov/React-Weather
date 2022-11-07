export type Weather = {
	dt_txt: string;

	main: {
		temp: number;
		feels_like: number;
		pressure: number;
		precipitation: string;
	};
	wind: {
		speed: number;
	};
	weather: [
		{
			main: string;
			description: string;
		}
	];
};
export type Weather5 = {
	main: string;
	description: string;
};
export type Main = {
	temp: number;
};
export type List = {
	main: Main;
	weather: Weather5[];
	dt_txt: string;
	dt: number;
};
export type Weather5days = {
	daysWeather: List[];
};
