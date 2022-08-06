export interface IUsersRes {
  id: number;
  name: string;
  phoneNumber: string;
  role: string;
}

export interface ITalkRes {
  list: [
    {
      id: number;
      content: string;
      nickName: string;
      user: IUsersRes;
      createdAt: string;
      iComment: '본인 댓글 확인 정보';
    },
  ];
  meta: {
    lastId: {};
    lastPage: true;
  };
}
