import { useQuery } from 'react-query';
import TicketApi from '../../apis/TicketApi';

const useGetTickets = () => {
  const { status, data } = useQuery(['ticket'], TicketApi.getTickets, {
    refetchOnWindowFocus: true,
    retry: false,
    refetchIntervalInBackground: false,
  });

  console.log(status, data);
  return { status, data };
};

export default useGetTickets;
