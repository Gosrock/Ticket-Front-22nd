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

export interface IOrder {
  id: 0;
  selection: string;
  ticketCount: number;
  status: string;
  price: number;
  isFree: boolean;
  createdAt: string;
}

export interface IGetOrderRes extends Array<IOrder> {}

export interface IGetOrdersRes extends IGetOrderRes {}
