import { useQuery, useQueryClient, useMutation } from 'react-query';
import { AxiosError } from 'axios';
import TicketApi from '../../apis/TicketApi';

const useGetTickets = () => {
  const { status, data } = useQuery(['ticket'], TicketApi.getTickets, {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 1000 * 60,
    // 5분
    refetchIntervalInBackground: false,
  });

  console.log(status, data);
  return { status, data };
};

export default useGetTickets;
