import styled from 'styled-components';

interface IUtilityButtonProps {
  type: 'share' | 'kakao';
}

const UtilityButton = ({ type }: IUtilityButtonProps) => {
  return <Wrapper type={type}></Wrapper>;
};
export default UtilityButton;

const Wrapper = styled.div<{
  type: 'share' | 'kakao';
}>`
  width: 162px;
  height: 50px;

  background: ${({ theme }) => theme.palette.point.yellow_kakao};
  border-radius: 16px;
`;
