import { axiosPrivate } from './axios';
import { IUsersRes } from './type/users';
import { TResponseType } from './type/commonResponse';

const UsersApi = {
  // 유저 정보 가져오기
  getUsers: async (): Promise<TResponseType<IUsersRes>> => {
    const { data } = await axiosPrivate.get('/users');
    return data;
  },
};

export default UsersApi;
