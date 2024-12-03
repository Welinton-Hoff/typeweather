import "./styles.css";

export interface INextDaysData {
  day: string;
  min: number;
  max: number;
  icon: string;
  weather: string;
}

export function NextDaysItem(props: Readonly<INextDaysData>) {
  const { day, max, min, icon, weather } = props;
  return (
    <div className="next-day-item">
      <h2>{day}</h2>
      <img src={icon} alt={weather} />
      <h3>{weather}</h3>
      <p>
        {min}ºc <span>{max}ºc</span>
      </p>
    </div>
  );
}
