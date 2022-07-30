import { atom } from 'recoil';

export interface IOptionType {
  date: 'yb' | 'ob' | 'both' | null;
  count: 1 | 2 | 3;
}

export const optionState = atom<IOptionType>({
  key: 'option',
  default: { date: null, count: 1 },
});
