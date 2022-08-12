import styled, { css } from 'styled-components';
import DepositStatusSkeleton from './DepositStatusSkeleton';
import SkeletonItem from './SkeletonItem';
import { ReactComponent as DashedLine } from '../../assets/icons/dashedLine.svg';

const TicketInfoSkeleton = () => {
  return (
    <Wrapper>
      <Top>
        <DepositStatusSkeleton setBackground={false} />
        <Info />
      </Top>

      <Bottom>
        <DashedLine />
        <ShowQR />
      </Bottom>
    </Wrapper>
  );
};
export default TicketInfoSkeleton;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  width: 150px;
  height: 120px;
  background: ${({ theme }) => theme.palette.mono.white_fa};
  border-radius: 16px;
  box-sizing: border-box;
  padding-top: 8px;
`;

const Top = styled.div`
  margin: 0 8px 0px 8px;
  width: calc(100% - 16px);
`;

const Info = styled(SkeletonItem)`
  width: 100%;
  height: 24px;
  margin-top: 8px;
  border-radius: 12px;
`;

const Bottom = styled.div`
  width: 100%;
`;

const ShowQR = styled(SkeletonItem)`
  margin: 7.5px 12px 12px calc(100% - 88px - 12px);
  width: 88px;
  height: 18px;
  border-radius: 12px;
`;
