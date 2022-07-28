import { useQuery, useQueryClient, useMutation } from 'react-query';
import { AxiosError } from 'axios';
import TicketApi from '../apis/TicketApi';

import TicketMockApi from '../apis/mock/TicketMockApi';

const useGetTickets = () => {
  // const { data } = useQuery(['ticket'], TicketApi.getTickets, {
  //   refetchOnWindowFocus: false,
  //   retry: false,
  //   // refetchOnMount: false,
  //   refetchIntervalInBackground: false,
  //   onError: (error: AxiosError) => {
  //     alert(error);
  //     window.location.href = '/';
  //   },
  // });

  const { data } = useQuery(['ticket'], TicketMockApi.getTicketsMock, {
    refetchOnWindowFocus: false,
    retry: false,
    // refetchOnMount: false,
    refetchIntervalInBackground: false,
    onError: (error: AxiosError) => {
      alert(error);
      window.location.href = '/';
    },
  });
  return data;
};

export default useGetTickets;
