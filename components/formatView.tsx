import React from 'react';
import { WorkDataType } from '@/lib/types/workLog';
import { timeFormatter } from '@/utils/workLogFormatter';
import { Box, Button, Text, useColorModeValue } from '@chakra-ui/react';

export interface FormatViewProps {
  formatData: WorkDataType[];
  month: number;
}

const FormatView = ({ formatData, month }: FormatViewProps) => {
  let totalHour: number = 0;

  const removeEmptyLines = (input: string) =>
    input
      .split(/\r?\n/)
      .filter((line) => line.trim() !== '')
      .join('\n');

  const onCopy = async () => {
    const data = removeEmptyLines(document.getElementById('result')!.innerText);
    await navigator.clipboard.writeText(data);
  };

  return (
    <>
      <Box
        mt={4}
        p={4}
        mb={6}
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        position="relative"
      >
        <Button position="absolute" top={5} right={5} onClick={onCopy}>
          복사
        </Button>
        <Box id="result">
          <Text>[{month}월 근무일지]</Text>
          <Box>
            {formatData.map((r) => {
              totalHour += r.end - r.start;
              return (
                <>
                  <Text>
                    {month}/{r.day > 9 ? r.day : `0${r.day}`}{' '}
                    {timeFormatter(r.start)}-{timeFormatter(r.end)}
                  </Text>
                  <Text>{r.end - r.start}시간</Text>
                </>
              );
            })}
          </Box>
          <Text>총 {totalHour}시간입니다.</Text>
        </Box>
      </Box>
    </>
  );
};
export default FormatView;
