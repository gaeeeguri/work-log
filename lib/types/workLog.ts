export type Day = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
export interface WorkLogType {
  date: Day;
  start: number;
  end: number;
}

export interface WorkDataType {
  day: number;
  start: number;
  end: number;
}

export interface TimeType {
  year: number;
  month: number;
}
