import { useRecoilValue } from 'recoil';
import { axiosPrivate, axiosPublic } from './axiosInstance';
import { authState } from '../stores/auth';
import {
  TMessageSendReqType,
  TMessageValidateReqType,
  TMessageValidateResType,
  TRegisterReqType,
} from './type/auth';

const AuthApi = {
  // 인증번호 받기
  messageSend: async (payload: TMessageSendReqType) => {
    const { data } = await axiosPublic.post('/v1/auth/message/send', payload);
    console.log(data);
    return data;
  },

  // 인증번호 검증
  messageValidate: async (payload: TMessageValidateReqType) => {
    const { data }: { data: TMessageValidateResType } = await axiosPrivate.post(
      '/v1/auth/message/validate',
      payload,
    );
    console.log(data);
    return data;
  },

  // 회원가입 : 입금자명 입력
  register: async (payload: TRegisterReqType, registerToken: string | null) => {
    axiosPrivate.defaults.headers.common[
      'registerToken'
    ] = `Bearer ${registerToken}`;

    const { data } = await axiosPrivate.post('/v1/auth/register', payload);
    console.log(data);
    return data;
  },
};

export default AuthApi;
