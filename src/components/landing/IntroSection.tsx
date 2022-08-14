import styled, { css } from 'styled-components';

const IntroSection = ({ isPC }: { isPC: boolean }) => {
  return (
    <Wrapper isPC={isPC}>
      {isPC ? (
        <>
          <h1>고스락의 22번째 공연에 여러분을 초대합니다.</h1>
          <h1>개강 후 첫번째 목요일과 금요일 저녁이예요. </h1>
          <h1>지금 바로 예매하세요!</h1>
        </>
      ) : (
        <>
          <h1>
            고스락의 22번째 공연에
            <br />
            여러분을 초대합니다.
          </h1>
          <h1>
            개강 후 첫번째
            <br />
            목요일과 금요일 저녁이예요.
          </h1>
          <h1>지금 바로 예매하세요!</h1>
        </>
      )}
    </Wrapper>
  );
};

export default IntroSection;

const Wrapper = styled.div<{ isPC: boolean }>`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${({ isPC }) =>
    isPC
      ? css`
          padding: 160px 0;
          & > h1 {
            margin-bottom: 32px;
            ${({ theme }) => theme.typo.landing.title_24_B}
            &:last-child {
              margin-bottom: 0px;
            }
          }
        `
      : css`
          padding: 60px 0;
          & > h1 {
            text-align: center;
            margin-bottom: 24px;
            ${({ theme }) => theme.typo.landing.text_18_B}
            line-height: 150%;
            &:last-child {
              margin-bottom: 0px;
            }
          }
        `};
`;
