import "./styles.css";
import { INextDaysData, NextDaysItem } from "./components/NextDaysItem";

interface INextDaysItemProps {
  data: INextDaysData[];
}

export function NextDays({ data }: Readonly<INextDaysItemProps>) {
  return (
    <section className="next-days">
      <h1>5 day forecast</h1>

      <div className="next-next-detail">
        {data?.map((item) => (
          <NextDaysItem key={item.day} {...item} />
        ))}
      </div>
    </section>
  );
}
