import AppBar from '../../components/common/AppBar';
import SetMargin from '../../components/common/SetMargin';
import styled from 'styled-components';
import OrderedTicket from '../../components/mypage/OrderedTicket';
import useGetOrders from '../../hooks/queries/useGetOrders';
import { IOrder } from '../../apis/type/order';
import OrderedTicketSkeleton from '../../components/skeleton/OrderedTicketSkeleton';
import useGetUserInfo from '../../hooks/queries/useGetUserInfo';
import { convertDate } from '../../utils/convertDate';

const OrderList = () => {
  const { status: userInfoStatus, data: userInfo } = useGetUserInfo();
  const { status, data: orders } = useGetOrders();
  console.log(orders);

  return (
    <>
      <AppBar label={'마이페이지'} />
      <SetMargin>
        {userInfoStatus === 'success' && !!userInfo ? (
          <Title>
            <span>{userInfo.data.name}</span> 님의 티켓 주문 목록
          </Title>
        ) : (
          <Title>
            <span>⦿⦿⦿</span> 님의 티켓 주문 목록
          </Title>
        )}

        <List>
          {status === 'success' ? (
            !!orders &&
            orders.data.map((el: IOrder) => {
              const { Year, Month, Day, DayKR } = convertDate(el.createdAt);
              return (
                <OrderedTicket
                  key={el.id}
                  status={el.status}
                  createdat={`${Year}.${Month}.${Day} (${DayKR})`}
                  id={el.id}
                  selection={el.selection}
                  ticketCount={el.ticketCount}
                ></OrderedTicket>
              );
            })
          ) : (
            <>
              <OrderedTicketSkeleton />
              <OrderedTicketSkeleton />
            </>
          )}
        </List>
      </SetMargin>
    </>
  );
};

export default OrderList;

const Title = styled.p`
  ${({ theme }) => theme.typo.text_18_B};
  color: ${({ theme }) => theme.palette.mono.white_fa};
  margin-bottom: 24px;
  & > span {
    color: ${({ theme }) => theme.palette.point.lavender};
  }
`;

const List = styled.div`
  padding-bottom: 16px;
  & > * {
    margin-top: 16px;
  }
`;
