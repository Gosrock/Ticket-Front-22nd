import { axiosPrivate } from './axios';
import { IGetTicketReq, IGetTicketRes, IGetTicketsRes } from './type/ticket';
import { TResponseType } from './type/commonResponse';

const TicketApi = {
  // 해당 uuid에 해당하는 티켓 불러오기
  getTicket: async (
    params: IGetTicketReq,
  ): Promise<TResponseType<IGetTicketRes>> => {
    const { data } = await axiosPrivate.get(`/tickets/${params.uuid}`, {
      params,
    });
    return data;
  },

  // 모든 티켓 불러오기
  getTickets: async (): Promise<TResponseType<IGetTicketsRes>> => {
    const { data } = await axiosPrivate.get('/tickets');
    return data;
  },
};

export default TicketApi;
