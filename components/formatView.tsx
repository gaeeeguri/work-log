import React from 'react';
import { WorkData } from '@/utils/workLogFormatter';

export interface FormatViewProps {
  formatData: WorkData[];
  month: number;
}

const FormatView = ({ formatData, month }: FormatViewProps) => {
  let totalHour: number = 0;
  const timeFormatter = (time: number) => {
    const hour: number = Math.floor(time);
    const min: number = (time % 1) * 60;
    return `${hour}:${min < 10 ? `0${min}` : min}`;
  };
  return (
    <>
      <div>[{month}월 근무일지]</div>
      <div>
        {formatData.map((r) => {
          totalHour += r.end - r.start;
          return (
            <div key={r.day}>
              <div>
                {month}/{r.day > 9 ? r.day : `0${r.day}`}{' '}
                {timeFormatter(r.start)}-{timeFormatter(r.end)}
              </div>
              <div>{r.end - r.start}시간</div>
            </div>
          );
        })}
      </div>
      <div>총 {totalHour}시간입니다.</div>
    </>
  );
};
export default FormatView;
