import { axiosPrivate, axiosPublic } from './axios';
import { IGetTicketReq, IGetTicketRes, IGetTicketsRes } from './type/ticket';

const TicketApi = {
  // 해당 uuid에 해당하는 티켓 불러오기
  getTicket: async (params: IGetTicketReq) => {
    const { data }: { data: IGetTicketRes } = await axiosPrivate.get(
      `/v1/tickets/${params.uuid}`,
      {
        params,
      },
    );
    return data;
  },

  // 모든 티켓 불러오기
  getTickets: async () => {
    const { data }: { data: IGetTicketsRes } = await axiosPrivate.get(
      '/v1/tickets',
    );
    return data;
  },
};

export default TicketApi;
