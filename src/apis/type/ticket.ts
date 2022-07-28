export interface ITicket {
  id: number;
  uuid: string;
  date: 'YB' | 'OB';
  status: '입장완료' | '입금확인' | '확인대기' | '기한만료';
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
