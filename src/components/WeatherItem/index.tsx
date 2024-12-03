import "./styles.css";

interface IWeatherItemProps {
  icon: string;
  title: string;
  value: string | number;
}

export function WeatherItem(props: Readonly<IWeatherItemProps>) {
  const { icon, title, value } = props;
  return (
    <div className="weather-item">
      <img src={icon} alt={title} />
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}
