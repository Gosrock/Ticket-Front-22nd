import styled from 'styled-components';

const TitleSection = ({ isPC }: { isPC: boolean }) => {
  return <Wrapper isPC={isPC}></Wrapper>;
};
export default TitleSection;

const Wrapper = styled.div<{ isPC: boolean }>`
  height: ${({ isPC }) => (isPC ? 'calc(var(--vh, 1vh) * 100)' : '520px')};
  width: 100%;
  background-color: ${({ theme }) => theme.palette.point.lavenderDark};
`;
