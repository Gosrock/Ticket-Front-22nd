import { StringMappingType } from 'typescript';

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
export interface IGetTalksRes {
  list: ITalk[];
  meta: {
    lastId: number;
    lastPage: boolean;
  };
}

export interface TSendTalkReq {
  nickName: string;
  content: String;
}
