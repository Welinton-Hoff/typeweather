import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";

import { getNextDays } from "../../../utils/date";
import { IToday } from "../../../@types/network/weather";
import { getWeatherByCity } from "../../../services/network/weather";
import { TWeatherIconProps, weatherIcons } from "../../../utils/icons";
import { INextDaysData } from "../../../components/NextDays/components/NextDaysItem";
import { ICityProps } from "../../../@types/network/city";

const DEFAULT_WEATHER_STATUS = "Clouds";

interface IWeatherData {
  today: IToday;
  nextDays: INextDaysData[];
}

export function useFetchWeather() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({} as IWeatherData);
  const [city, setCity] = useState<ICityProps>(
    JSON.parse(localStorage.getItem("@typewheather:city") ?? "")
  );

  const onFetch = useCallback(async () => {
    try {
      const { latitude, longitude } = city;

      if (!latitude || !longitude)
        return alert("Sorry, we couldn't find your city 😥");

      setIsLoading(true);
      const { data } = await getWeatherByCity({ latitude, longitude });

      const list = data?.list ?? [];
      const { main, weather, wind, pop } = list[0] ?? {};

      const today: IToday = {
        weather: {
          temp: Math.ceil(main?.temp ?? 0),
          temp_max: Math.ceil(main?.temp_max ?? 0),
          temp_min: Math.floor(main?.temp_min ?? 0),
          description: weather[0]?.description ?? "",
          details: weather[0].main
            ? weatherIcons[weather[0].main]
            : ({} as TWeatherIconProps),
        },
        details: {
          wind_speed: wind?.speed ?? 0,
          humidity: main?.humidity ?? 0,
          probability: pop ? pop * 100 : 0,
          temp_kf: Math.floor(main?.temp_kf ?? 0),
          feels_like: Math.floor(main?.feels_like ?? 0),
        },
      };

      const days = new Set(getNextDays());
      const daysAdded = new Set<string>();
      const nextDays: INextDaysData[] = [];

      for (const item of data?.list ?? []) {
        const day = item?.dt_txt
          ? dayjs(new Date(item?.dt_txt)).locale("en").format("DD/MM")
          : dayjs(new Date()).locale("en").format("DD/MM");

        if (days.has(day) && !daysAdded.has(day)) {
          daysAdded.add(day);

          const status = item.weather[0].main;
          const details = weatherIcons[status ?? DEFAULT_WEATHER_STATUS];

          nextDays.push({
            icon: details.icon_day,
            max: Math.ceil(item?.main?.temp_max ?? 0),
            weather: item.weather[0].description ?? "",
            min: Math.floor(item?.main?.temp_min ?? 0),
            day: item?.dt_txt
              ? dayjs(new Date(item?.dt_txt)).locale("en").format("ddd")
              : dayjs(new Date()).locale("en").format("ddd"),
          });
        }
      }

      setData({ today, nextDays });
    } catch (error) {
      setData({} as IWeatherData);
    } finally {
      setIsLoading(false);
    }
  }, [city]);

  useEffect(() => {
    onFetch();
  }, [city, onFetch]);

  return { data, city, isLoading, onCityChange: setCity };
}
