import { atom } from 'recoil';

export interface IUserInfoType {
  cellphone: string | null;
  name: string | null;
}

const initalState = {
  cellphone: null,
  name: null,
};

export const studentInfo = atom<IUserInfoType>({
  key: 'studentInfo',
  default: initalState,
});
