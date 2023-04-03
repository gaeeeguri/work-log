import {
  initialDidNotWork,
  initialMonth,
  initialWorkLog,
  initialYear,
} from '@/lib/const/workLog';
import { atom } from 'recoil';
import { WorkLogType } from '@/lib/types/workLog';

export const month = atom<number>({
  key: 'month',
  default: initialMonth,
});

export const year = atom<number>({
  key: 'year',
  default: initialYear,
});

export const workLog = atom<Array<WorkLogType>>({
  key: 'workLog',
  default: initialWorkLog,
});

export const didNotWork = atom<number[]>({
  key: 'didNotWork',
  default: initialDidNotWork,
});
