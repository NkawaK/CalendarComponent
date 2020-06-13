import React, { FC } from "react";
import Month from "./month";

const Calendar: FC<{}> = () => {
  const weeks: string[] = ['日', '月', '火', '水', '木', '金', '土'];
  
  return (
    <div className="calendar">
      2020年 6月
      <div className="weeks">
        <ul>
          {weeks.map((week, index) => (
            <li key={index}>{week}</li>
          ))}
        </ul>
      </div>
      <Month/>
    </div>
  );
};

export default Calendar;
