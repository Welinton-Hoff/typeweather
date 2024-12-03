import { TWeatherIconProps, TWeatherIcons } from "../../utils/icons";

export interface IWeatherByCityParams {
  latitude: number;
  longitude: number;
}

export interface IWeatherAPIResponse {
  list?: IWeatherListProps[];
}

interface IWeatherListProps {
  pop?: number;
  dt_txt?: string;
  main?: IMainWeatherProps;
  weather: IWeatherProps[];
  wind?: { speed?: number };
}

export interface IMainWeatherProps {
  temp?: number;
  temp_kf?: number;
  temp_min?: number;
  temp_max?: number;
  humidity?: number;
  feels_like?: number;
}

interface IWeatherProps {
  description?: string;
  main?: TWeatherIcons;
}

export interface ITodayWeather {
  temp: number;
  temp_max: number;
  temp_min: number;
  details: TWeatherIconProps;
  description: string | undefined;
}

export interface ITodayWeatherDetails {
  temp_kf: number;
  humidity: number;
  feels_like: number;
  wind_speed: number;
  probability: number;
}

export interface IToday {
  weather: ITodayWeather;
  details: ITodayWeatherDetails;
}
