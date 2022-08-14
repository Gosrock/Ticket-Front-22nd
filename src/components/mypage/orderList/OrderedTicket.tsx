import styled from 'styled-components';
import DepositStatus, { IDepositStatusProps } from '../DepositStatus';

interface IOrderedTicketProps extends IDepositStatusProps {
  createdat: string;
  id: number;
  // enum으로 값이 전달되긴하는데 string으로 안하면 오류뜸
  // selection: 'BOTH' | 'YB' | 'OB';
  selection: string;
  ticketCount: number;
}

const renderContent = {
  YB: <p>9월 1일 목요일</p>,
  OB: <p>9월 2일 금요일</p>,
  BOTH: (
    <p>
      양일권 <span>(할인 적용)</span>
    </p>
  ),
};

const OrderedTicket = ({
  status,
  createdat,
  id,
  selection,
  ticketCount,
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
          <p>{createdat}</p>
          <p>{id}</p>
          {selection === 'YB'
            ? renderContent['YB']
            : selection === 'OB'
            ? renderContent['OB']
            : renderContent['BOTH']}
          <p>{ticketCount}매</p>
        </Content>
      </Contents>
      <DepositStatus status={status} />
    </Wrapper>
  );
};
export default OrderedTicket;

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: ${({ theme }) => theme.palette.mono.black_26};
  border-radius: 8px;
  padding: 18px 18px 18px 16px;
`;

const Contents = styled.div`
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
    ${({ theme }) => theme.typo.text_14_M};
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
  height: 110px;
  padding: 3px 0px;

  & p {
    ${({ theme }) => theme.typo.text_14_M};
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
