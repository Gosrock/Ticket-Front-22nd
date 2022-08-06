import { axiosPrivate } from './axios';
import { ITalk, ITalkRes, IUsersRes } from './type/users';
import { TResponseType } from './type/commonResponse';
import { fsyncSync } from 'fs';

const UsersApi = {
  // 유저 정보 가져오기
  getUsers: async (): Promise<TResponseType<IUsersRes>> => {
    const { data } = await axiosPrivate.get('/users');
    return data;
  },
  getTalks: async ({ pageParam = null }) => {
    console.log(pageParam);
    const { data } = await axiosPrivate.get(
      `users/comment?lastId=${pageParam}`,
    );
    console.log(data);
    return {
      talkList: data.data.list,
      lastId: data.data.meta.lastId,
      isLast: data.data.meta.lastPage,
    };
  },
};

export default UsersApi;
