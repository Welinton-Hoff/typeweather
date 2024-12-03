import { api } from "../api";

import {
  IWeatherAPIResponse,
  IWeatherByCityParams,
} from "../../@types/network/weather";

async function getWeatherByCity(props: Readonly<IWeatherByCityParams>) {
  const { latitude, longitude } = props;
  return await api.get<IWeatherAPIResponse>(
    `/forecast?lat=${latitude}&lon=${longitude}`
  );
}

export { getWeatherByCity };
