import { useQuery, useQueryClient, useMutation } from 'react-query';
import { IGetTicketReq, IGetTicketRes } from '../../apis/type/ticket';
import { AxiosError } from 'axios';
import TicketApi from '../../apis/TicketApi';

const useGetTicket = (params: IGetTicketReq) => {
  const { status, data } = useQuery(
    ['ticket', `${params.uuid}`],
    TicketApi.getTickets,
    {
      refetchOnWindowFocus: false,
      retry: false,
      // refetchOnMount: false,
      refetchIntervalInBackground: false,
      onError: (error: AxiosError) => {
        alert(error);
        //window.location.href = '/';
      },
    },
  );
  return { status, data };
};

export default useGetTicket;
