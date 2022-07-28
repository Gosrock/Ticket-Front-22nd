import { useQuery, useQueryClient, useMutation } from 'react-query';
import { AxiosError } from 'axios';
import TicketApi from '../../apis/TicketApi';

const useGetTicket = (uuid: string) => {
  const { status, data } = useQuery(
    ['ticket', `${uuid}`],
    () => TicketApi.getTicket(uuid),
    {
      refetchOnWindowFocus: false,
      retry: false,
      // refetchOnMount: false,
      refetchIntervalInBackground: false,
      onError: (error: AxiosError) => {
        console.error(error);
        //window.location.href = '/';
      },
    },
  );
  return { status, data };
};

export default useGetTicket;
