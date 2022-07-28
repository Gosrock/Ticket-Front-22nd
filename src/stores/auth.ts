import { atom } from 'recoil';
import { axiosPrivate } from '../apis/axios';

export interface IAuthType {
  isAuthenticated: boolean;
  accessToken: string | null;
  registerToken: string | null;
  phoneNumber: string;
  userName: string | null;
}

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  registerToken: null,
  phoneNumber: '',
  userName: null,
};

const getLocalStorage = (): IAuthType => {
  const accessToken = localStorage.getItem('accessToken');
  const registerToken = localStorage.getItem('registerToken');
  if (accessToken) {
    // 어세스토큰이 있으면 axios 인스턴스에 커먼 헤더로 집어넣음
    axiosPrivate.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`;

    //새로고침할때마다 토큰으로 유저정보(입금자명, 전화번호) 가져오는 과정 필요
    return {
      ...initialState,
      isAuthenticated: true,
      accessToken,
      registerToken,
    };
  } else return { ...initialState, registerToken };
};

export const authState = atom<IAuthType>({
  key: 'auth',
  default: getLocalStorage(),
});
