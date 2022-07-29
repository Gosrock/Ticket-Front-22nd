import { AxiosError } from 'axios';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import UserInfoApi from '../../apis/UserInfoApi';

import UserInfoMockApi from '../../apis/mock/UserInfoMockApi';

const useGetUserInfo = () => {
  // api가 완성X

  // const data = useQuery(['userInfo'], UserInfoApi.getUserInfo, {
  //   refetchOnWindowFocus: false,
  //   retry: false,
  //   // refetchOnMount: false,
  //   refetchIntervalInBackground: false,
  //   onError: (error: AxiosError) => {
  //     console.log(error);
  //     alert(error);
  //     // window.location.href = '/';
  //   },
  // });

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
  console.log(data);
  return data;
};

export default useGetUserInfo;
