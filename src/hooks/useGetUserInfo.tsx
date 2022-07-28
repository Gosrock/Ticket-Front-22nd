import { AxiosError } from 'axios';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import UserInfoApi from '../apis/UserInfoApi';

import UserInfoMockApi from '../apis/mock/UserInfoMockApi';

const useGetUserInfo = () => {
  // const AccessToken = localStorage.getItem('accessToken');
  // const { data } = useQuery(
  //   ['userInfo'],
  //   UserInfoApi.getUserInfo,
  //   {
  //     refetchOnWindowFocus: false,
  //     retry: false,
  //     // refetchOnMount: false,
  //     refetchIntervalInBackground: false,
  //     onError: (error: AxiosError) => {
  //       alert(error);
  //       window.location.href = '/';
  //     },
  //   },
  // );

  const { data } = useQuery(['userInfo'], UserInfoMockApi.getUserInfoMock, {
    refetchOnWindowFocus: false,
    retry: false,
    // refetchOnMount: false,
    refetchIntervalInBackground: false,
    onError: (error: AxiosError) => {
      alert(error);
      window.location.href = '/';
    },
  });
  //   console.log(data);
  return data;
};

export default useGetUserInfo;
