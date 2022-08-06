import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import UsersApi from '../../apis/UsersApi';

const useGetTalks = () => {
  const { status, data } = useQuery(['talks'], UsersApi.getTalks, {
    refetchOnWindowFocus: false,
    retry: false,
    // refetchOnMount: false,
    refetchIntervalInBackground: false,
    onError: (error: AxiosError) => {
      console.error(error);
      //window.location.href = '/';
    },
  });
  const talkList = data?.data.list;
  const meta = data?.data.meta;
  return { status, talkList, meta };
};

export default useGetTalks;
