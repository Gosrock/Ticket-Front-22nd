export const convertDate = (date: string) => {
  const week = new Array('일', '월', '화', '수', '목', '금', '토');

  const Year = date.substring(2, 4);
  const Month = date.substring(5, 7);
  const Day = date.substring(8, 10);
  const Hour = date.substring(11, 13);
  const Minute = date.substring(14, 16);
  const DayKR = week[new Date(`2022-${Month}-${Day}`).getDay()];
  return { Year, Month, Day, DayKR, Hour, Minute };
};
