import { axiosPrivate, axiosPublic } from '../../config/axios';

export type TMessageSendReqType = {
  phoneNumber: string;
};
export type TMessageSendResType = {
  phoneNumber: string;
  validationNumber: string;
  alreadySingUp: boolean;
};

export type TMessageValidateReqType = {
  phoneNumber: string;
  validationNumber: string;
};
export type TMessageValidateResType = {
  accessToken: string;
  registerToken: string;
  alreadySingUp: boolean;
};

export type TRegisterReqType = {
  name: string;
};
export type TRegisterResType = {
  user: string;
  accessToken: string;
};

function useAuthApi() {
  // 휴대전화 인증번호 요청
  const messageSend = async (data: TMessageSendReqType) => {
    const res = await axiosPublic.post('/v1/auth/message/send', data);
    console.log(res);
    return res;
  };

  // 인증번호 확인
  const messageValidate = async (data: TMessageValidateReqType) => {
    const res = await axiosPrivate.post('/v1/auth/message/validate', data);
    console.log(res);
    return res;
  };

  // 회원가입 : 입금자명 입력
  const register = async (data: TRegisterReqType) => {
    const res = await axiosPrivate.post('/v1/auth/register', data);
    console.log(res);
    return res;
  };

  return { messageSend, messageValidate, register };
}

export default useAuthApi;
