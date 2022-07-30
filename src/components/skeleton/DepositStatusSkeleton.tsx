import styled, { css } from 'styled-components';
import SkeletonItem from './SkeletonItem';

interface IDepositStatusSkeletonProps {
  setBackground: boolean;
}

const DepositStatusSkeleton = ({
  setBackground,
}: IDepositStatusSkeletonProps) => {
  return <Wrapper setBackground={setBackground}></Wrapper>;
};
export default DepositStatusSkeleton;

const Wrapper = styled(SkeletonItem)<{ setBackground: boolean }>`
  width: 53px;
  height: 20px;
  border-radius: 12px;
  ${({ setBackground }) =>
    setBackground &&
    css`
      background: ${({ theme }) => theme.palette.mono.black_36};
    `}
`;
