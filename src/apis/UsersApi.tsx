import { axiosPrivate } from './axios';
import { ITalk, IGetTalksRes, IUsersRes, TSendTalkReq } from './type/users';
import { TResponseType } from './type/commonResponse';

const UsersApi = {
  // 유저 정보 가져오기
  getUsers: async (): Promise<TResponseType<IUsersRes>> => {
    console.log('get요청 실행');
    const { data } = await axiosPrivate.get('/users');
    return data;
  },

  // 응원톡 전송하기
  sendTalk: async (payload: TSendTalkReq): Promise<TResponseType<ITalk>> => {
    const { data } = await axiosPrivate.post('/users/comment', payload);
    console.log(data);
    return data;
  },

  // 응원톡 가져오기
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
