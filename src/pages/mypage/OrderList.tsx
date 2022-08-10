import AppBar from '../../components/common/AppBar';
import SetMargin from '../../components/common/SetMargin';
import styled from 'styled-components';
import useGetUserInfo from '../../hooks/queries/useGetUserInfo';
import OrderedTicketsList from '../../components/mypage/orderList/OrderedTicketsList';
import useGetOrders from '../../hooks/queries/useGetOrders';
import NotExistTickets from '../../components/mypage/orderList/NotExistTickets';

const OrderList = () => {
  const { status: userInfoStatus, data: userInfo } = useGetUserInfo();
  const { status, data: orders } = useGetOrders();
  return (
    <>
      <AppBar label={'마이페이지'} />
      <SetMargin>
        {status === 'success' && !!orders && orders.data.length === 0 ? (
          <NotExistTickets />
        ) : (
          <>
            {userInfoStatus === 'success' && !!userInfo ? (
              <Title>
                <span>{userInfo.data.name}</span> 님의 티켓 주문 목록
              </Title>
            ) : (
              <Title>
                <span>🎸🥁🎸</span> 님의 티켓 주문 목록
              </Title>
            )}
            <OrderedTicketsList status={status} orders={orders?.data} />
          </>
        )}
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
