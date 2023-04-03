import { Day, WorkDataType, WorkLogType } from '@/lib/types/workLog';

export interface WorkLogFormatterProps {
  year: number;
  // @ts-ignore
  month: number;
  works: WorkLogType[];
  didNotWork: number[];
}

export const timeFormatter = (time: number) => {
  const hour: number = Math.floor(time);
  const min: number = (time % 1) * 60;
  return `${hour}:${min < 10 ? `0${min}` : min}`;
};

const WorkLogFormatter = ({
  year,
  works,
  month,
  didNotWork,
}: WorkLogFormatterProps) => {
  const dayOfWeek: Day[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const getNumberOfDays = (month: number) => new Date(year, month, 0).getDate();

  const getWorkDays = (month: number, works: WorkLogType[], year: number) => {
    const ret: WorkDataType[] = [];
    const days: number[] = Array.apply(null, Array(getNumberOfDays(month))).map(
      (value, index) => index + 1,
    );
    days.forEach((day) => {
      const _day: number = new Date(year, month - 1, day).getDay();
      works
        .filter((d) => d.date == dayOfWeek[_day] && !didNotWork.includes(day))
        .forEach((d) => ret.push({ day: day, start: d.start, end: d.end }));
    });
    return ret;
  };

  return getWorkDays(month, works, year);
};

export default WorkLogFormatter;
