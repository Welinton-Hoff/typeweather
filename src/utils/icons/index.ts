import iconCloudyDay from "../../assets/svg/cloudy_day.svg";
import bgCloudyDay from "../../assets/img/bg_cloudy_day.png";
import iconCloudyNight from "../../assets/svg/cloudy_night.svg";
import bgCloudyNight from "../../assets/img/bg_cloudy_night.png";

import bgRainDay from "../../assets/img/bg_rain_day.png";
import bgRainNight from "../../assets/img/bg_rain_night.png";
import iconRainDay from "../../assets/svg/rain_moment_day.svg";

import iconClearDay from "../../assets/svg/clear_day.svg";
import bgClearDay from "../../assets/img/bg_clear_day.png";
import iconClearNight from "../../assets/svg/clear_night.svg";
import bgClearNight from "../../assets/img/bg_clear_night.png";

import iconSnowDay from "../../assets/svg/snow_day.svg";
import bgSnowDay from "../../assets/img/bg_snow_day.png";
import iconSnowNight from "../../assets/svg/snow_night.svg";
import bgSnowNight from "../../assets/img/bg_snow_night.png";

export type TWeatherIcons = keyof typeof weatherIcons;
export type TWeatherIconProps = (typeof weatherIcons)["Clear"];

export const weatherIcons = {
  Clouds: {
    name: "Clouds",
    bg_day: bgCloudyDay,
    bg_night: bgCloudyNight,
    icon_day: iconCloudyDay,
    icon_night: iconCloudyNight,
  },
  Rain: {
    name: "Rain",
    bg_day: bgRainDay,
    bg_night: bgRainNight,
    icon_day: iconRainDay,
    icon_night: iconRainDay,
  },
  Clear: {
    name: "Clear",
    bg_day: bgClearDay,
    bg_night: bgClearNight,
    icon_day: iconClearDay,
    icon_night: iconClearNight,
  },
  Snow: {
    name: "Snow",
    bg_day: bgSnowDay,
    bg_night: bgSnowNight,
    icon_day: iconSnowDay,
    icon_night: iconSnowNight,
  },
};
