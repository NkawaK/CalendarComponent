import React, { FC } from "react";

const DayOfWeek: FC = () => {
  const dayOfWeek: string[] = ['日', '月', '火', '水', '木', '金', '土'];

  return (
    <div className="weeks">
      <ul>
        {dayOfWeek.map((week, index) => (
          <li key={index}>{week}</li>
        ))}
      </ul>
    </div>
  );
};

export default DayOfWeek;