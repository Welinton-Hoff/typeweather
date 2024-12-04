import "./styles.css";
import dayjs from "dayjs";

import { Logo } from "../Logo";
import { SelectCity } from "../SelectCity";
import { isDayTime } from "../../utils/date";
import { ICityProps } from "../../@types/network/city";
import { ITodayWeather } from "../../@types/network/weather";

interface ITodayProps {
  weather: ITodayWeather;
  city: string | undefined;
  onSearchValue: (city: ICityProps) => void;
}

export function Today(props: Readonly<ITodayProps>) {
  const { city, weather, onSearchValue } = props;

  const isDay = isDayTime();
  const today = dayjs(new Date())
    .locale("en")
    .format("dddd, DD [de] MMMM [de] YYYY");

  const bgImg = isDay ? weather.details.bg_day : weather.details.bg_night;
  const icon = isDay ? weather.details?.icon_day : weather.details?.icon_night;

  return (
    <section className="today">
      <form>
        <Logo />
        <SelectCity onSelect={onSearchValue} />
      </form>

      <div
        className="today-details"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <header>
          <h3>{city}</h3>
          <p>{today}</p>
        </header>

        <footer>
          <h1>{weather?.temp}ºc</h1>
          <img src={icon} alt="Tempo" />
        </footer>

        <p>
          {weather?.temp_min}ºc / {weather?.temp_max}ºc <span>&#8226;</span>{" "}
          {weather.description}
        </p>
      </div>
    </section>
  );
}
