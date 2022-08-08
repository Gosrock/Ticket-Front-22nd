import { AxiosError } from 'axios';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import UsersApi from '../../apis/UsersApi';

const useGetUserInfo = () => {
  const { status, data } = useQuery(['users'], UsersApi.getUsers, {
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnMount: false,
    onError: (error: AxiosError) => {
      console.log(error);
      // window.location.href = '/';
    },
  });
  return { status, data };
};

export default useGetUserInfo;
