import { IGetTicketRes } from './ticket';

export interface IUserInfoRes {
  id: number;
  name: string;
  phoneNumber: string;
  role: string;
  order: Array<{
    id: 0;
    selection: string;
    ticketCount: 0;
    status: string;
    price: 0;
    isFree: boolean;
    user: {
      id: 0;
      name: string;
      phoneNumber: string;
      role: string;
    };
    admin: {
      id: 0;
      name: string;
      phoneNumber: string;
      role: string;
    };
    ticket: IGetTicketRes;
    createdAt: string;
  }>;
  ticket: Array<IGetTicketRes>;
  createdAt: string;
}
