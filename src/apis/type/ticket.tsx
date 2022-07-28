export interface IGetTicketReq {
  uuid: string;
}
export interface IGetTicketRes {
  id: 0;
  uuid: string;
  date: string;
  status: string;
  admin: {
    id: number;
    name: string;
    phoneNumber: string;
    role: string;
  };
  user: {
    id: number;
    name: string;
    phoneNumber: string;
    role: string;
  };
  createdAt: string;
}

export interface IGetTicketsRes extends Array<IGetTicketRes> {}
