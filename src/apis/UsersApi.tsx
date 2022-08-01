import { axiosPrivate } from './axios';
import { IUserInfoRes } from './type/userInfo';
import { TResponseType } from './type/commonResponse';

const UsersApi = {
  // 유저 정보 가져오기
  getUsers: async (): Promise<TResponseType<IUserInfoRes>> => {
    const { data } = await axiosPrivate.get('/users');
    return data;
  },
};

export default UsersApi;
