export interface ITicket {
  id: 0;
  uuid: string;
  date: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGetTicketReq {
  uuid: string;
}
export interface IGetTicketRes extends ITicket {
  user: {
    id: number;
    name: string;
    phoneNumber: string;
    role: string;
  };
}

export interface IGetTicketsRes extends Array<ITicket> {}
