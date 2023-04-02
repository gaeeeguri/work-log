import WorkLogFormatter, { WorkLog } from '@/utils/workLogFormatter';

export default function Home() {
  const myWork: WorkLog[] = [
    { date: 'mon', start: 16.5, end: 19.5 },
    { date: 'wed', start: 16.5, end: 19.5 },
    { date: 'thu', start: 16.5, end: 19.5 },
    { date: 'fri', start: 16, end: 19 },
  ];
  let totalHour: number = 0;

  const result = WorkLogFormatter({ month: 3, works: myWork, didNotWork: [1] });

  const timeFormatter = (time: number) => {
    const hour: number = Math.floor(time);
    const min: number = (time % 1) * 60;
    return `${hour}:${min < 10 ? `0${min}` : min}`;
  };
  return (
    <>
      <div>[3월 근무일지]</div>
      <div>
        {result.map((r) => {
          totalHour += r.end - r.start;
          return (
            <div key={r.day}>
              <div>
                3/{r.day > 9 ? r.day : `0${r.day}`} {timeFormatter(r.start)}-
                {timeFormatter(r.end)}
              </div>
              <div>{r.end - r.start}시간</div>
            </div>
          );
        })}
      </div>
      <div>총 {totalHour}시간입니다.</div>
    </>
  );
}
