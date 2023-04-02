export type SingleNumber =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '0';
export type SingleNumberWithoutZero =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9';
export type Hour =
  | `${'0' | '1'}${SingleNumber}`
  | `2${'0' | '1' | '2' | '3' | '4'}`;

export type Minute =
  | `${'0' | '1' | '2' | '3' | '4' | '5'}${SingleNumber}`
  | '60';

export type Time = `${Hour}:${Minute}`;

export type Month = `0${SingleNumberWithoutZero}` | '10' | '11' | '12';
