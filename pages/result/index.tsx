import React from 'react';
import { useRecoilValue } from 'recoil';
import { didNotWork, month, workLog, year } from '@/lib/atoms/workLogStates';
import workLogFormatter from '@/utils/workLogFormatter';
import { WorkDataType } from '@/lib/types/workLog';
import FormatView from '@/components/formatView';

const Result = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const _year = useRecoilValue(year);
  const _month = useRecoilValue(month);
  const _workLog = useRecoilValue(workLog);
  const _didNotWork = useRecoilValue(didNotWork);

  const data: WorkDataType[] = workLogFormatter({
    year: _year,
    month: _month,
    works: _workLog,
    didNotWork: _didNotWork,
  });

  return <FormatView formatData={data} month={_month} />;
};

export default Result;
