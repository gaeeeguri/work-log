import { WorkLogType } from '@/lib/types/workLog';

const _now = new Date();

export const initialYear: number = _now.getFullYear();

export const initialMonth: number = _now.getMonth() + 1;

export const initialWorkLog: WorkLogType[] = [];

export const initialDidNotWork: number[] = [];
