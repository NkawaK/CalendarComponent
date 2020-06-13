import React, { FC } from "react";

const Month: FC = () => {
  let nowDate = new Date();
  const monthTable = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const nowYear = nowDate.getFullYear();

  if ((nowYear % 4 === 0 && nowYear % 100 !== 0) || nowYear % 400 === 0) {
    monthTable[1] = 29;
  }

  const nowMonth = nowDate.getMonth();
  nowDate.setDate(1);
  const nowWeek = nowDate.getDay();
  const weekLines = Math.ceil(nowWeek + monthTable[nowMonth] / 7);
  const weekArray = Array.from(new Array(weekLines)).map((v,i) => i)
  let weekTable = new Array(7 * weekLines);

  for(let i=0; i < 7 * weekLines; i++) weekTable[i]="　";
  for(let i=0; i < monthTable[nowMonth]; i++) weekTable[i + nowWeek] = i+1;

  return (
    <div className="month">
      <table>
        <tbody>
          {weekArray.map((week, index) => (
            <tr key={index}>
              {weekTable.splice(0, 7).map((day, index) => (
                <td key={index}>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Month;