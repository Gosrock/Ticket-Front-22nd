import styled from 'styled-components';
import DepositStatusSkeleton from './DepositStatusSkeleton';
import SkeletonItem from './SkeletonItem';

const OrderedTicketSkeleton = () => {
  return (
    <Wrapper>
      <Contents>
        <Item></Item>
        <Line />
        <Content>
          <El />
          <El />
          <El />
          <El />
        </Content>
      </Contents>
      <DepositStatusSkeleton setBackground={true} />
    </Wrapper>
  );
};
export default OrderedTicketSkeleton;

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
  width: 70%;
  height: 110px;
  margin: 2px 0;

  display: flex;
  flex-direction: row;
`;

const Item = styled(SkeletonItem)`
  width: 50px;
  height: 108px;

  background: ${({ theme }) => theme.palette.mono.black_36};
  border-radius: 12px;
`;

const Line = styled.hr`
  width: 0px;
  height: 110px;
  margin: 0 12px;

  border: none;
  border-left: 1px solid ${({ theme }) => theme.palette.mono.black_36};
`;

const Content = styled.div`
  width: 120px;
  height: 108px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const El = styled(SkeletonItem)`
  width: 100%;
  height: 18px;
  background: ${({ theme }) => theme.palette.mono.black_36};
  border-radius: 12px;
`;
