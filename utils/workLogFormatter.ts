export type Day = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
export type WorkLog = {
  date: Day;
  start: number;
  end: number;
};

export type WorkData = {
  day: number;
  start: number;
  end: number;
};

export interface WorkLogFormatterProps {
  // @ts-ignore
  month: number;
  works: WorkLog[];
  didNotWork: number[];
}

const WorkLogFormatter = ({
  works,
  month,
  didNotWork,
}: WorkLogFormatterProps) => {
  const dayOfWeek: Day[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const getNumberOfDays = (month: number) => new Date(2023, month, 0).getDate();

  const getWorkDays = (month: number, works: WorkLog[]) => {
    const ret: WorkData[] = [];
    const days: number[] = Array.apply(null, Array(getNumberOfDays(month))).map(
      (value, index) => index + 1,
    );
    days.forEach((day) => {
      const _day: number = new Date(2023, month - 1, day).getDay();
      works
        .filter((d) => d.date == dayOfWeek[_day] && !didNotWork.includes(day))
        .forEach((d) => ret.push({ day: day, start: d.start, end: d.end }));
    });
    return ret;
  };

  return getWorkDays(month, works);
};

export default WorkLogFormatter;
