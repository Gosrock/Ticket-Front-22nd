import { axiosPrivate, axiosPublic } from './axios';
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
    // 레지스터토큰 받아서 헤더로 끼고 요청
    if (registerToken) {
      const { data } = await axiosPrivate.post('/v1/auth/register', payload, {
        headers: { registerToken },
      });
      console.log(data);
      return data;
    } else {
      throw new Error('no registerToken');
    }
  },
};

export default AuthApi;
