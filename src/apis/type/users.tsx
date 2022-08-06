export interface IUsersRes {
  id: number;
  name: string;
  phoneNumber: string;
  role: string;
}
export interface ITalk {
  id: number;
  content: string;
  nickName: string;
  user: IUsersRes;
  createdAt: string;
  iComment: boolean;
}
export interface ITalkRes {
  list: ITalk[];
  meta: {
    lastId: number;
    lastPage: boolean;
  };
}
