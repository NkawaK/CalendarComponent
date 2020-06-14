import React, { FC, useState } from "react";
import DayOfWeek from "./dayOfWeek";
import Month from "./month";

const Calendar: FC<{}> = () => {  
  const nowDate: Date = new Date();
  const [year, setYear] = useState<number>(nowDate.getFullYear());
  const [month, setMonth] = useState<number>(nowDate.getMonth());

  const prev = () => {
    setMonth(month - 1);
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    }
  }

  const next = () => {
    setMonth(month + 1);
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    }
  }

  return (
    <div className="calendar">
      <span className="prev" onClick={prev}>◀︎</span>
      {year}年 {month+1}月
      <span className="next" onClick={next}>▶︎</span>
      <DayOfWeek/>
      <Month/>
    </div>
  );
};

export default Calendar;
