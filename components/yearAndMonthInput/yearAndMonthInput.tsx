import React from 'react';
import { useRecoilState } from 'recoil';
import { Box, Select, Text, useColorModeValue } from '@chakra-ui/react';
import { month, year } from '@/lib/atoms/workLogStates';
import { initialYear } from '@/lib/const/workLog';

export interface YearAndMonthInputProps {}

const YearAndMonthInput = () => {
  const [_month, setMonth] = useRecoilState(month);
  const [_year, setYear] = useRecoilState(year);

  const onChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(parseInt(e.target.value));
  };

  const onChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setYear(parseInt(e.target.value));

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
            1. 작성할 기간을 선택해 주세요.
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Select defaultValue={_year} w={100} onChange={onChangeYear}>
            <option value={initialYear - 1}>{initialYear - 1}</option>
            <option value={initialYear}>{initialYear}</option>
            <option value={initialYear + 1}>{initialYear + 1}</option>
          </Select>
          <Text fontSize="xl">년 &nbsp;</Text>
          <Select onChange={onChangeMonth} defaultValue={_month} w={85}>
            {Array.from({ length: 12 }, (v, i) => i + 1).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Select>
          <Text fontSize="xl">월</Text>
        </Box>
      </Box>
    </>
  );
};

export default YearAndMonthInput;
