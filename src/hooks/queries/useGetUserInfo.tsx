import { useQuery } from 'react-query';
import UsersApi from '../../apis/UsersApi';

const useGetUserInfo = () => {
  const { status, data } = useQuery(['users'], UsersApi.getUsers, {
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnMount: false,
  });

  return { status, data };
};

export default useGetUserInfo;
