import { useQuery, useQueryClient, useMutation } from 'react-query';
import TicketMockApi from '../../apis/mock/TicketMockApi';

function useGetTickets() {
  const { data } = useQuery(['ticket'], TicketMockApi.getTicketsMock, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchIntervalInBackground: false,
  });
  return data;
}

export default useGetTickets;
