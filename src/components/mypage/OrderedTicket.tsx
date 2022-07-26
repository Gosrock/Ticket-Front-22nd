import styled from 'styled-components';
import DepositStatus, { IDepositStatusProps } from './DepositStatus';

interface IOrderedTicketProps extends IDepositStatusProps {
  orderDate: string;
  ticketNum: number;
  concertDate: '양일권' | 'DAY1 : YB' | 'DAY2 : OB';
  quantity: number;
}

const OrderedTicket = ({
  status,
  orderDate,
  ticketNum,
  concertDate,
  quantity,
}: IOrderedTicketProps) => {
  return (
    <Wrapper>
      <Contents>
        <Item>
          <p>구매일시</p>
          <p>주문번호</p>
          <p>관람날짜</p>
          <p>티켓매수</p>
        </Item>
        <Line />
        <Content>
          <p>{orderDate}</p>
          <p>{ticketNum}</p>
          {concertDate === '양일권' ? (
            <p>
              {concertDate} <span>(할인 적용)</span>
            </p>
          ) : (
            <p>{concertDate}</p>
          )}
          <p>{quantity}매</p>
        </Content>
      </Contents>
      <DepositStatus status={status} />
    </Wrapper>
  );
};
export default OrderedTicket;

const Wrapper = styled.div`
  width: 339px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: ${({ theme }) => theme.palette.mono.black_26};
  border-radius: 8px;
  padding: 18px 18px 18px 16px;
`;

const Contents = styled.div`
  width: 246px;
  height: 110px;
  margin: 2px 0;

  display: flex;
  flex-direction: row;
`;

const Item = styled.div`
  width: 55px;
  height: 110px;
  padding: 3px 0px;

  & p {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;

    color: ${({ theme }) => theme.palette.mono.font_sub};
    margin-bottom: 16px;
  }
  & :last-child {
    margin: 0;
  }
`;

const Line = styled.hr`
  width: 0px;
  height: 110px;
  margin: 0 12px 0px 7px;

  border: none;
  border-left: 1px solid ${({ theme }) => theme.palette.mono.black_36};
`;

const Content = styled.div`
  width: 172px;
  height: 110px;
  padding: 3px 0px;

  & p {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;

    color: ${({ theme }) => theme.palette.mono.white};
    margin-bottom: 16px;
  }
  & :last-child {
    margin: 0;
  }
  & span {
    color: ${({ theme }) => theme.palette.point.red};
  }
`;
