import React from 'react';
import { Select } from '@chakra-ui/react';

export interface WorkTimeSelectorProps {}

const WorkTimeSelector = ({}: WorkTimeSelectorProps) => {
  const handleSubmit = (e) => console.log(e);

  return (
    <>
      <Select></Select>
    </>
  );
};

export default WorkTimeSelector;
