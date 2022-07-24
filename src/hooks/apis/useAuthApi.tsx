import { axiosPrivate, axiosPublic } from '../../config/axios';

export type TMessageSendReqType = { phoneNumber: string };
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

function useAuthApi() {
  const messageSend = async (data: TMessageSendReqType) => {
    const res = await axiosPrivate.post('/v1/auth/message/send', data);
    console.log(res);
    return res;
  };

  const messageValidate = async (data: TMessageValidateReqType) => {
    const res = await axiosPrivate.post('/v1/auth/message/validate', data);
    console.log(res);
    return res;
  };
  return { messageSend, messageValidate };
}

export default useAuthApi;
