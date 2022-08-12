import { axiosPrivate, axiosPublic } from './axios';
import { IGetTicketReq, IGetTicketRes, IGetTicketsRes } from './type/ticket';
import { TResponseType } from './type/commonResponse';

const TicketApi = {
  // 해당 uuid에 해당하는 티켓 불러오기
  getTicket: async (uuid: string): Promise<TResponseType<IGetTicketRes>> => {
    const { data } = await axiosPublic.get(`/tickets/${uuid}`);
    return data;
  },

  // 모든 티켓 불러오기
  getTickets: async (): Promise<TResponseType<IGetTicketsRes>> => {
    const { data } = await axiosPrivate.get('/tickets');
    return data;
  },
};

export default TicketApi;
