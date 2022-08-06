import { useQuery, useQueryClient, useMutation } from 'react-query';
import { AxiosError } from 'axios';
import OrderApi from '../../apis/OrderApi';

const useGetOrders = () => {
  const { status, data } = useQuery(['ticket'], OrderApi.getOrders, {
    refetchOnWindowFocus: false,
    retry: false,
    // refetchOnMount: false,
    refetchIntervalInBackground: false,
    onError: (error: AxiosError) => {
      alert(error);
      //window.location.href = '/';
    },
  });
  console.log(status, data);
  return { status, data };
};

export default useGetOrders;
