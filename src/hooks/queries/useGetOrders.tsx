import { useQuery, useQueryClient, useMutation } from 'react-query';
import { AxiosError } from 'axios';
import OrderApi from '../../apis/OrderApi';

const useGetOrders = () => {
  const { status, data } = useQuery(['ticket'], OrderApi.getOrders, {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 1000 * 60,
    refetchIntervalInBackground: false,
  });
  console.log(status, data);
  return { status, data };
};

export default useGetOrders;
