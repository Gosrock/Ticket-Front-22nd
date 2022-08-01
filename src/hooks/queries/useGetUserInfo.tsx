import { AxiosError } from 'axios';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import UsersApi from '../../apis/UsersApi';

const useGetUserInfo = () => {
  const { status, data } = useQuery(['users'], UsersApi.getUsers, {
    refetchOnWindowFocus: false,
    retry: false,
    // refetchOnMount: false,
    refetchIntervalInBackground: false,
    onError: (error: AxiosError) => {
      console.log(error);
      alert(error);
      // window.location.href = '/';
    },
  });
  console.log(status, data);
  return { status, data };
};

export default useGetUserInfo;
