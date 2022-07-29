import AppBar from '../../components/common/AppBar';
import SetMargin from '../../components/common/SetMargin';
import styled from 'styled-components';
import OrderedTicket from '../../components/mypage/OrderedTicket';

const OrderList = () => {
  return (
    <>
      <AppBar label={'마이페이지'} />
      <SetMargin>
        <Title>
          <span>한규진</span> 님의 티켓 주문 목록
        </Title>
        {/* api 완성되면 데이터 받아와서 map으로 처리해야함  */}
        <List>
          <OrderedTicket
            status={'입금확인'}
            orderDate={'22.08.30 (화)'}
            ticketNum={10001}
            concertDate={'BOTH'}
            quantity={1}
          ></OrderedTicket>
          <OrderedTicket
            status={'입금확인'}
            orderDate={'22.08.30 (화)'}
            ticketNum={10001}
            concertDate={'YB'}
            quantity={1}
          ></OrderedTicket>
        </List>
      </SetMargin>
    </>
  );
};

export default OrderList;

const Title = styled.p`
  ${({ theme }) => theme.typo.text_18_B};
  color: ${({ theme }) => theme.palette.mono.white_fa};
  margin-bottom: 18px;
  & > span {
    color: ${({ theme }) => theme.palette.point.lavender};
  }
`;

const List = styled.div`
  & > * {
    margin-top: 16px;
  }
`;
