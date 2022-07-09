import { access } from 'fs';
import { atom } from 'recoil';

export interface IAuthType {
  authenticated: boolean;
  accessToken: string | null;
}

const getLocalStorage = (): IAuthType => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    return { authenticated: true, accessToken: token };
  } else return { authenticated: false, accessToken: null };
};

export const authState = atom<IAuthType>({
  key: 'auth',
  default: getLocalStorage(),
});
