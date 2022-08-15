import styled, { css } from 'styled-components';
import minu from '../../assets/title.gif';
import minuMobile from '../../assets/titleMobile.gif';
import band from '../../assets/band.png';
import useScroll from '../../hooks/useScroll';
import { calcRem } from '../../styles/theme';
import { ReactComponent as ChevronDown } from '../../assets/icons/chevron-compact-down.svg';
const TitleSection = ({ isPC }: { isPC: boolean }) => {
  const { scrollY } = useScroll();

  return (
    <Wrapper isPC={isPC}>
      <BackGroundWrapper>
        <BackGround
          isPC={isPC}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, ${
              scrollY / 900 + 0.3
            }), rgba(0, 0, 0, ${scrollY / 900})), url(${
              isPC ? minu : minuMobile
            })`,
          }}
        >
          <Title isPC={isPC}>
            <h1>We Are</h1>
            <h1>GOSROCK</h1>
            <h1>Invites You</h1>
            <img src={band} />
          </Title>
          <Scroll>
            <p>스크롤을 아래로 내려주세요</p>
            <ChevronDown />
          </Scroll>
        </BackGround>
      </BackGroundWrapper>
    </Wrapper>
  );
};
export default TitleSection;

const Wrapper = styled.div<{ isPC: boolean }>`
  height: 100vh;
  width: 100%;
  position: relative;
  /*
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; */
`;

const BackGroundWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.point.lavenderDark};
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BackGround = styled.div<{ isPC: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`;

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  ${({ theme }) => theme.typo.landing.text_18_B};
  animation: 1.2s ease-in-out TitleFadeIn5;
  @keyframes TitleFadeIn5 {
    0% {
      opacity: 0;
      transform: translate3d(-50%, 0, 0);
    }
    40% {
      opacity: 0;
      transform: translate3d(-50%, 0, 0);
    }
    80% {
      opacity: 0;
      transform: translate3d(-50%, 0, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(-50%, 0, 0);
    }
  }
`;

const Title = styled.div<{ isPC: boolean }>`
  ${({ theme }) => theme.typo.landing.title_Main}
  ${({ isPC }) =>
    isPC
      ? css`
          font-size: ${calcRem(96)};
          & > h1:nth-child(2) {
            font-size: ${calcRem(128)};
          }
        `
      : css`
          font-size: ${calcRem(48)};
          & > h1:nth-child(2) {
            font-size: ${calcRem(64)};
          }
        `}
  text-align: center;
  line-height: 120%;
  width: 100%;
  img {
    margin-top: 36px;
    ${({ isPC }) =>
      !isPC &&
      css`
        width: 60%;
      `}
    max-width: 482px;
    animation: 0.9s ease-in-out TitleFadeIn3;
  }

  & > h1 {
    &:nth-child(1) {
      animation: 0.6s ease-in-out TitleFadeIn1;
    }
    &:nth-child(2) {
      animation: 0.6s ease-in-out TitleFadeIn2;
    }
    &:nth-child(3) {
      animation: 0.6s ease-in-out TitleFadeIn3;
    }
  }

  @keyframes TitleFadeIn1 {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    40% {
      opacity: 1;
      transform: translateY(0%);
    }
    70% {
      opacity: 1;
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @keyframes TitleFadeIn2 {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    40% {
      opacity: 0;
      transform: translateY(50%);
    }
    70% {
      opacity: 1;
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @keyframes TitleFadeIn3 {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    40% {
      opacity: 0;
      transform: translateY(50%);
    }
    70% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @keyframes TitleFadeIn4 {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    40% {
      opacity: 0;
      transform: translateY(50%);
    }
    80% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
