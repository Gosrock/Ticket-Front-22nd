import AppBar from '../../components/common/AppBar';
import SetMargin from '../../components/common/SetMargin';
import styled from 'styled-components';
import OrderedTicket from '../../components/mypage/OrderedTicket';
import useGetOrders from '../../hooks/queries/useGetOrders';
import { IOrder } from '../../apis/type/order';
import OrderedTicketSkeleton from '../../components/skeleton/OrderedTicketSkeleton';

const OrderList = () => {
  const { status, data: orders } = useGetOrders();
  const convertDate = (date: string) => {
    const week = new Array('일', '월', '화', '수', '목', '금', '토');

    const Year = date.substring(2, 4);
    const Month = date.substring(5, 7);
    const Day = date.substring(8, 10);
    const DayKR = week[new Date(`2022-${Month}-${Day}`).getDay()];
    return { Year, Month, Day, DayKR };
  };
  return (
    <>
      <AppBar label={'마이페이지'} />
      <SetMargin>
        <Title>
          {/* user info api 만들어지면 수정 */}
          <span>한규진</span> 님의 티켓 주문 목록
        </Title>
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
  & > * {
    margin-top: 16px;
  }
`;
