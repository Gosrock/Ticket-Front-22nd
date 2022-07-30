export type TMessageSendReqType = {
  phoneNumber: string;
};
export type TMessageSendResType = {
  phoneNumber: string;
  validationNumber: string;
  alreadySignUp: boolean;
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
