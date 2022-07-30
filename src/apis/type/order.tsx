export interface IMakeOrderReq {
  selection: string;
  ticketCount: number;
}
export interface IMakeOrderRes extends IGetOrderRes {
  user: {
    id: 0;
    name: 'string';
    phoneNumber: 'string';
    role: 'User';
  };
}

export interface IGetOrderReq {
  uuid: string;
}
export interface IGetOrderRes {
  id: 0;
  selection: string;
  ticketCount: number;
  status: string;
  price: number;
  isFree: boolean;
  createdAt: string;
}

export interface IGetOrdersRes extends Array<IGetOrderRes> {}
