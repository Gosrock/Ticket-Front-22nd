import { axiosPrivate, axiosPublic } from './axios';
import { IUserInfoRes } from './type/userInfo';

const UserInfoApi = {
  // 유저 정보 가져오기
  getUserInfo: async () => {
    const { data } = await axiosPrivate.get('/v1/users');
    return data;
  },
};

export default UserInfoApi;
