import { AxiosError } from 'axios';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import UserInfoApi from '../../apis/UserInfoApi';

const useGetUserInfo = () => {
  const { status, data } = useQuery(['userInfo'], UserInfoApi.getUserInfo, {
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
