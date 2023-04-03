import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { didNotWork, month, workLog, year } from '@/lib/atoms/workLogStates';
import {
  Box,
  Button,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { WorkDataType, WorkLogType } from '@/lib/types/workLog';
import workLogFormatter, { timeFormatter } from '@/utils/workLogFormatter';
import FormatView from '@/components/formatView';

const WorkLogInput = () => {
  const _year = useRecoilValue(year);
  const _month = useRecoilValue(month);
  const [_workLog, setWorkLog] = useRecoilState(workLog);
  const [_date, setDate] = React.useState<string>('mon');
  const [_start, setStart] = React.useState<number>(1);
  const [_end, setEnd] = React.useState<number>(2);
  const [_didNotWork, setDidNotWork] = useRecoilState(didNotWork);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [view, setView] = React.useState<boolean>(false);
  const [result, setResult] = React.useState<WorkDataType[]>();

  const dateFormat = {
    mon: '월',
    tue: '화',
    wed: '수',
    thu: '목',
    fri: '금',
    sat: '토',
    sun: '일',
  };

  const onChangeDay = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setDate(e.target.value);

  const onClickAdd = () => {
    if (_start > _end) {
      return alert('시작 시간은 끝나는 시간보다 빨라야 합니다!');
    }

    if (
      _workLog
        .filter((w) => w.date == _date)
        .filter((w) => _start >= w.start && _start <= w.end).length != 0 ||
      _workLog
        .filter((w) => w.date == _date)
        .filter((w) => _end >= w.start && _end <= w.end).length != 0
    ) {
      return alert('중복되는 시간은 추가할 수 없습니다!');
    }

    const data: WorkLogType = {
      // @ts-ignore
      date: _date,
      start: _start,
      end: _end,
    };

    setWorkLog((prev) => [...prev, data]);
  };

  const onClickDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    setWorkLog((prev) => {
      prev = [...prev];
      prev.splice(parseInt(e.currentTarget.value), 1);
      return prev;
    });
  };

  const parseDidNotWork = (input: string) => {
    let ret: number[] = [];
    const data: string[] = input.split(',');
    data.forEach((v) => ret.push(parseInt(v)));
    return ret;
  };

  const onChangeDidNotWork = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = parseDidNotWork(e.target.value);
    setDidNotWork(data);
  };

  const onClickSubmit = async () => {
    setView(false);
    setIsLoading(true);
    const data = workLogFormatter({
      year: _year,
      month: _month,
      works: _workLog,
      didNotWork: _didNotWork,
    });
    setResult(data);
    setIsLoading(false);
    setView(true);
  };

  return (
    <>
      <Box
        mt={4}
        p={4}
        mb={6}
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        <Box mb={3}>
          <Text as="h2" fontSize="xl" fontWeight="bold">
            2. 제외할 날들을 작성해주세요.
          </Text>
        </Box>
        <Input placeholder="1, 2, 3" onChange={onChangeDidNotWork} />
      </Box>
      <Box
        mt={4}
        p={4}
        mb={6}
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        <Box mb={2}>
          <Text as="h2" fontSize="xl" fontWeight="bold">
            3. 근무시간을 추가해주세요.
          </Text>
        </Box>
        <Box mb={2}>
          <Text>ex) 16.5 = 오후 4시 30분</Text>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          mb={2}
        >
          <Box display="flex" alignItems="center" mb={2}>
            <Select w={90} onChange={onChangeDay}>
              <option value="mon">월</option>
              <option value="tue">화</option>
              <option value="wed">수</option>
              <option value="thu">목</option>
              <option value="fri">금</option>
              <option value="sat">토</option>
              <option value="sun">일</option>
            </Select>
            <Text>요일 &nbsp;</Text>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <NumberInput
              max={24}
              min={0}
              w="80px"
              onChange={(s, n) => setStart(n)}
              inputMode="decimal"
            >
              <NumberInputField />
            </NumberInput>
            <Text>부터 &nbsp; </Text>
            <NumberInput
              max={24}
              min={0}
              w="80px"
              onChange={(s, n) => setEnd(n)}
              inputMode="decimal"
            >
              <NumberInputField />
            </NumberInput>
            <Text>까지</Text>
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button
            onClick={onClickAdd}
            type="button"
            colorScheme={useColorModeValue('purple', 'orange')}
          >
            추가하기
          </Button>
        </Box>
      </Box>
      <Box mb={2} p={2}>
        <Text as="h2" fontSize="xl" fontWeight="bold">
          근무시간 목록
        </Text>
      </Box>

      {_workLog.map((v, i) => (
        <Box
          key={i}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
          p={4}
          mb={4}
          borderRadius="lg"
          /* eslint-disable-next-line react-hooks/rules-of-hooks */
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Text fontSize="xl">
            {dateFormat[v.date]}요일, {timeFormatter(v.start)}-
            {timeFormatter(v.end)}
          </Text>
          <Button colorScheme="pink" value={i} onClick={onClickDelete}>
            삭제
          </Button>
        </Box>
      ))}
      <Button
        w="100%"
        colorScheme="green"
        mt={4}
        onClick={onClickSubmit}
        isLoading={isLoading}
        mb={4}
      >
        근무일지 만들기
      </Button>
      {view && (
        <>
          <Box mb={2} p={2}>
            <Text as="h2" fontSize="xl" fontWeight="bold">
              결과
            </Text>
          </Box>
          <FormatView formatData={result!} month={_month} />
        </>
      )}
    </>
  );
};

export default WorkLogInput;
