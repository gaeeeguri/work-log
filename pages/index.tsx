import React from 'react';
import YearAndMonthInput from '@/components/yearAndMonthInput/yearAndMonthInput';
import { Container } from '@chakra-ui/react';
import WorkLogInput from '@/components/workLog/workLogInput';

export default function Home() {
  return (
    <>
      <Container maxW="container.md">
        <YearAndMonthInput />
        <WorkLogInput />
      </Container>
    </>
  );
}
