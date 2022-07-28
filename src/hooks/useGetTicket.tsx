import { useQuery, useQueryClient, useMutation } from 'react-query';
import { IGetTicketReq, IGetTicketRes } from '../apis/type/ticket';
import { AxiosError } from 'axios';
import TicketApi from '../apis/TicketApi';

import TicketMockApi from '../apis/mock/TicketMockApi';

const useGetTicket = (params: IGetTicketReq) => {
  const { data } = useQuery(
    ['ticket', `${params.uuid}`],
    TicketApi.getTickets,
    {
      refetchOnWindowFocus: false,
      retry: false,
      // refetchOnMount: false,
      refetchIntervalInBackground: false,
      onError: (error: AxiosError) => {
        alert(error);
        window.location.href = '/';
      },
    },
  );

  // const { data } = useQuery(
  //   ['ticket', `${params.uuid}`],
  //   TicketMockApi.getTicketMock,
  //   {
  //     refetchOnWindowFocus: false,
  //     retry: false,
  //     // refetchOnMount: false,
  //     refetchIntervalInBackground: false,
  //     onError: (error: AxiosError) => {
  //       alert(error);
  //       window.location.href = '/';
  //     },
  //   },
  // );
  return data;
};

export default useGetTicket;
