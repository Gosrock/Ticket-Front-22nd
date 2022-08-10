import { atom, selector } from 'recoil';
import { axiosPrivate } from '../apis/axios';
import { Cookies } from 'react-cookie';

export interface IAuthType {
  isAuthenticated: boolean;
  registerToken: string | null;
  phoneNumber: string | null;
}

const initialState = {
  isAuthenticated: false,
  registerToken: null,
  phoneNumber: null,
};

const getLocalStorage = (): IAuthType => {
  const cookies = new Cookies();
  const accessToken = cookies.get('accessToken');
  const registerToken = cookies.get('registerToken');
  if (accessToken) {
    // 어세스토큰이 있으면 axios 인스턴스에 커먼 헤더로 집어넣음
    axiosPrivate.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`;

    //새로고침할때마다 토큰으로 유저정보(입금자명, 전화번호) 가져오는 과정 필요
    return {
      ...initialState,
      isAuthenticated: true,
      registerToken,
    };
  } else return { ...initialState, registerToken };
};

export const authState = atom<IAuthType>({
  key: 'auth',
  default: getLocalStorage(),
});
