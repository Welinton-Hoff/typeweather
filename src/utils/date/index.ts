import dayjs from "dayjs";

function getNextDays() {
  const days = [];
  const today = new Date();

  for (let i = 0; i < 5; i++) {
    const date = new Date();
    date.setDate(today.getDate() + (i + 1));
    days.push(dayjs(date).format("DD/MM"));
  }

  return days;
}

function isDayTime() {
  const hours = new Date().getHours();
  return hours > 6 && hours < 18;
}

export { getNextDays, isDayTime };
