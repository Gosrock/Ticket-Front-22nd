import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import UsersApi from '../../apis/UsersApi';

const useGetTalksCount = () => {
  const { status, data } = useQuery(['talksCount'], UsersApi.getTalksCount, {
    refetchOnWindowFocus: false,
    retry: false,
    // refetchOnMount: false,
    refetchIntervalInBackground: false,
    onError: (error: AxiosError) => {
      console.error(error);
    },
  });
  const count = data?.data.commentNum;

  return { status, count };
};

export default useGetTalksCount;
