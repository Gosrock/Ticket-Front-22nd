import { useQuery, useQueryClient, useMutation } from 'react-query';
import { IGetTicketReq, IGetTicketRes } from '../../apis/type/ticket';
import TicketMockApi from '../../apis/mock/TicketMockApi';

const useGetTicket = (params: IGetTicketReq) => {
  const { data } = useQuery(
    ['ticket', `${params.uuid}`],
    TicketMockApi.getTicketMock,
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchIntervalInBackground: false,
    },
  );
  return data;
};

export default useGetTicket;
