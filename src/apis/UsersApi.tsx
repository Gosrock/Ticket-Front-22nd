import { axiosPrivate } from './axios';
import { ITalkRes, IUsersRes } from './type/users';
import { TResponseType } from './type/commonResponse';

const UsersApi = {
  // 유저 정보 가져오기
  getUsers: async (): Promise<TResponseType<IUsersRes>> => {
    const { data } = await axiosPrivate.get('/users');
    return data;
  },
  getTalks: async (): Promise<TResponseType<ITalkRes>> => {
    const { data } = await axiosPrivate.get('users/comment');
    return data;
  },
};

export default UsersApi;
