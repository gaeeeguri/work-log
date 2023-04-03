import React from 'react';
import WorkLogFormatter, { WorkLog } from '@/utils/workLogFormatter';
import FormatView from '@/components/formatView';

export default function Home() {
  const myWork: WorkLog[] = [
    { date: 'mon', start: 16.5, end: 19.5 },
    { date: 'wed', start: 16.5, end: 19.5 },
    { date: 'thu', start: 16.5, end: 19.5 },
    { date: 'fri', start: 16, end: 19 },
  ];

  const [month, setMonth] = React.useState<number>(3);

  const data = WorkLogFormatter({
    month: month,
    works: myWork,
    didNotWork: [1],
  });

  return (
    <>
      <FormatView formatData={data} month={month} />
    </>
  );
}
