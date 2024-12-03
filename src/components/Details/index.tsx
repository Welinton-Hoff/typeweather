import "./styles.css";

import dropLight from "../../assets/svg/drop_light.svg";
import windLight from "../../assets/svg/wind_light.svg";
import sunDimLight from "../../assets/svg/sun_dim_light.svg";
import cloudRainLight from "../../assets/svg/cloud_rain_light.svg";
import thermometerSimpleLight from "../../assets/svg/thermometer_simple_light.svg";

import { WeatherItem } from "../WeatherItem";
import { IMainWeatherProps } from "../../@types/network/weather";

export interface IDetailsData extends Omit<IMainWeatherProps, "temp_kf"> {
  temp_kf: number;
  wind_speed: number;
  probability: number;
}

interface IDetailsProps {
  data: IDetailsData;
}

export function Details({ data }: Readonly<IDetailsProps>) {
  return (
    <section className="weather-detail">
      <h1>Weather details today</h1>

      <div className="weather-items">
        <WeatherItem
          title="Feels like"
          icon={thermometerSimpleLight}
          value={`${data.feels_like}ºc`}
        />

        <WeatherItem
          icon={cloudRainLight}
          title="Probability of rain"
          value={`${data.probability}%`}
        />

        <WeatherItem
          icon={windLight}
          title="Wind speed"
          value={`${data.wind_speed} Km/h`}
        />

        <WeatherItem
          icon={dropLight}
          title="Air humidity"
          value={`${data.humidity}%`}
        />

        <WeatherItem
          icon={sunDimLight}
          value={data.temp_kf}
          title="Temperature variation"
        />
      </div>
    </section>
  );
}
