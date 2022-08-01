import { useQuery, useQueryClient, useMutation } from 'react-query';
import { AxiosError } from 'axios';
import TicketApi from '../../apis/TicketApi';

const useGetTickets = () => {
  const { status, data } = useQuery(['ticket'], TicketApi.getTickets, {
    refetchOnWindowFocus: false,
    retry: false,
    // refetchOnMount: false,
    refetchIntervalInBackground: false,
    onError: (error: AxiosError) => {
      alert(error);
      window.location.href = '/';
    },
  });

  console.log(status, data);
  return { status, data };
};

export default useGetTickets;
