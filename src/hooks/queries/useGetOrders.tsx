import { useQuery, useQueryClient, useMutation } from 'react-query';
import { AxiosError } from 'axios';
import OrderApi from '../../apis/OrderApi';

const useGetOrders = () => {
  const { status, data } = useQuery(['orders'], OrderApi.getOrders, {
    refetchOnWindowFocus: false,
    retry: false,
    refetchIntervalInBackground: false,
  });

  return { status, data };
};

export default useGetOrders;
