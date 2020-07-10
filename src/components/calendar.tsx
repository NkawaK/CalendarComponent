import React, { FC, useState } from "react";
import DayOfWeek from "./dayOfWeek";
import Month from "./month";

const Calendar: FC<{}> = () => {  
  const [nowDate, setNowDate] = useState<Date>(new Date());
  const [year, setYear] = useState<number>(nowDate.getFullYear());
  const [month, setMonth] = useState<number>(nowDate.getMonth());

  const prev = () => {
    setMonth(month - 1);
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    }
    setNowDate(new Date(year, month - 1, 1));
  }

  const next = () => {
    setMonth(month + 1);
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    }
    setNowDate(new Date(year, month + 1, 1));
  }

  return (
    <div className="calendar">
      <span className="prev" onClick={prev}>◀︎</span>
      {year}年 {month+1}月
      <span className="next" onClick={next}>▶︎</span>
      <DayOfWeek/>
      <Month nowDate={nowDate}/>
    </div>
  );
};

export default Calendar;
