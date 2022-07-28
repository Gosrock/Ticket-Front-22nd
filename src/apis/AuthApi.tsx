import { axiosPrivate, axiosPublic } from './axios';
import {
  TMessageSendReqType,
  TMessageSendResType,
  TMessageValidateReqType,
  TMessageValidateResType,
  TRegisterReqType,
  TRegisterResType,
} from './type/auth';
import { TResponseType } from './type/commonResponse';

const AuthApi = {
  // 인증번호 받기
  messageSend: async (
    payload: TMessageSendReqType,
  ): Promise<TResponseType<TMessageSendResType>> => {
    const { data } = await axiosPublic.post('/auth/message/send', payload);
    console.log(data);
    return data;
  },

  // 인증번호 검증
  messageValidate: async (
    payload: TMessageValidateReqType,
  ): Promise<TResponseType<TMessageValidateResType>> => {
    const { data } = await axiosPublic.post('/auth/message/validate', payload);
    console.log(data);
    return data;
  },

  // 회원가입 : 입금자명 입력
  register: async (
    payload: TRegisterReqType,
    registerToken: string | null,
  ): Promise<TResponseType<TRegisterResType>> => {
    // 레지스터토큰 받아서 헤더로 끼고 요청
    if (registerToken) {
      const { data } = await axiosPublic.post('/auth/register', payload, {
        headers: { registerToken: `Bearer ${registerToken}` },
      });
      console.log(data);
      return data;
    } else {
      throw new Error('no registerToken');
    }
  },
};

export default AuthApi;
