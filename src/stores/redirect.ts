import { atom } from 'recoil';

export const redirectState = atom<string>({
  key: 'redirect',
  default: '',
});
