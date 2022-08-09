import styled from 'styled-components';
import DepositStatusSkeleton from './DepositStatusSkeleton';
import SkeletonItem from './SkeletonItem';

const QRBottomSkeleton = () => {
  return (
    <Wrapper>
      <Shares>
        <Button />
        <Button />
      </Shares>
      <Notice>
        <div className="left">
          <Date />
          <Location />
        </div>
        <div className="right">
          <IdNName />
          <IdNName />
        </div>
      </Notice>
    </Wrapper>
  );
};
export default QRBottomSkeleton;

const Wrapper = styled.div`
  width: 100%;
  height: 122px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Shares = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`;

const Button = styled(SkeletonItem)`
  width: 100%;
  height: 50px;
  position: relative;
  border-radius: 16px;
  background: ${({ theme }) => theme.palette.mono.font_main};
`;

const Notice = styled.div`
  display: flex;
  justify-content: space-between;
  height: 49px;
  margin: 23px 13px 0px 11px;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 43px;
    margin-top: 5px;
  }

  .right {
    display: flex;
    & :first-child {
      margin-right: 24px;
    }
  }
`;

const Date = styled(SkeletonItem)`
  width: 112px;
  height: 20px;
  border-radius: 16px;
  background: ${({ theme }) => theme.palette.mono.font_main};
`;
const Location = styled(SkeletonItem)`
  width: 87px;
  height: 16px;
  border-radius: 16px;
  background: ${({ theme }) => theme.palette.mono.font_main};
`;

const IdNName = styled(SkeletonItem)`
  width: 50px;
  height: 49px;
  border-radius: 16px;
  background: ${({ theme }) => theme.palette.mono.font_main};
`;
