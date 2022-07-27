import { useQuery, useQueryClient, useMutation } from 'react-query';
import UserInfoMockApi from '../../apis/mock/UserInfoMockApi';

function useGetUserInfo() {
  const { data } = useQuery(['userInfo'], UserInfoMockApi.getUserInfoMock, {
    refetchOnWindowFocus: false,
    // refetchOnMount: false,
    refetchIntervalInBackground: false,
  });
  //   console.log(data);
  return data;
}

export default useGetUserInfo;
