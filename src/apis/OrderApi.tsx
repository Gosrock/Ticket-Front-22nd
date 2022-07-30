import { axiosPrivate } from './axios';
import {
  IGetOrderReq,
  IGetOrderRes,
  IGetOrdersRes,
  IMakeOrderReq,
  IMakeOrderRes,
} from './type/order';
import { TResponseType } from './type/commonResponse';

const OrderApi = {
  // 해당 주문의 티켓 생성
  makeOrder: async (
    payload: IMakeOrderReq,
  ): Promise<TResponseType<IMakeOrderRes>> => {
    const { data } = await axiosPrivate.post('/orders', payload);
    return data;
  },

  // 해당 주문에 속한 티켓 불러오기
  getOrder: async (
    params: IGetOrderReq,
  ): Promise<TResponseType<IGetOrderRes>> => {
    const { data } = await axiosPrivate.get(`/order/${params.uuid}`, {
      params,
    });
    return data;
  },

  // 모든 주문 목록 불러오기
  getOrders: async (): Promise<TResponseType<IGetOrdersRes>> => {
    const { data } = await axiosPrivate.get('/orders');
    return data;
  },
};

export default OrderApi;
