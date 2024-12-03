import "./styles.css";

import { Today } from "../../components/Today";
import { Details } from "../../components/Details";
import { Loading } from "../../components/Loading";
import { NextDays } from "../../components/NextDays";
import { useFetchWeather } from "./hooks/useFetchWeather";

export function Dashboard() {
  const { data, city, isLoading, onCityChange } = useFetchWeather();

  if (isLoading) return <Loading />;

  return (
    <div className="dashboard">
      <Today
        city={city.name}
        onSearchValue={onCityChange}
        weather={data.today.weather}
      />
      <Details data={data.today.details} />
      <NextDays data={data.nextDays} />
    </div>
  );
}
