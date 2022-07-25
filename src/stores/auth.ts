import { atom } from 'recoil';

export interface IAuthType {
  isAuthenticated: boolean;
  accessToken: string | null;
  phoneNumber: string | null;
  userName: string | null;
}

const initialState = {
  isAuthenticated: false,
  accessToken: 'example',
  phoneNumber: null,
  userName: null,
};

const getLocalStorage = (): IAuthType => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    //새로고침할때마다 토큰으로 유저정보(입금자명, 전화번호) 가져오는 과정 필요
    return { ...initialState, isAuthenticated: true, accessToken: token };
  } else return initialState;
};

export const authState = atom<IAuthType>({
  key: 'auth',
  default: getLocalStorage(),
});
