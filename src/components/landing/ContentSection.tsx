import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import enjoy from '../../assets/landing/enjoy.png';
import message from '../../assets/landing/message.png';
import talk from '../../assets/landing/talk.png';
import twodays from '../../assets/landing/twodays.png';
import MarginContainer from './MarginContainer';

const ContentSection = ({ isPC }: { isPC: boolean }) => {
  const navigate = useNavigate();
  return (
    <MarginContainer>
      <Wrapper isPC={isPC}>
        <div>
          <Title>
            <h2>온라인 예매로</h2>
            <h2>편하게</h2>
          </Title>
          <Card top={true} isPC={isPC}>
            <img src={message} />
            <div>
              <p>
                <span>문자인증</span>을 통해 더 쉽고 빠르게
              </p>
              <p>여러분만의 티켓을 발급하세요!</p>
            </div>
          </Card>
          <Card top={true} isPC={isPC}>
            <img src={twodays} />
            <div>
              <p>전례없는 이틀간의 공연,</p>
              <p>
                양일권으로 구매한다면 <span>할인</span>이에요!
              </p>
            </div>
          </Card>
        </div>
        <div>
          <Title>
            <h2>공연장에서만</h2>
            <h2>느낄 수 있는 즐거움</h2>
          </Title>
          <Card top={false} isPC={isPC}>
            <div className="sub">
              <img src={enjoy} />
            </div>
            <div>
              <p>고스락과 함께 나눠요! </p>
              <p>게임, 야광팔찌, 또 어떤게 있을까요</p>
            </div>
          </Card>
          <Card top={false} isPC={isPC}>
            <img src={talk} />
            <div>
              <p>두구두구두구!</p>
              <p>여러분의 응원을 남겨주세요</p>
              <button
                onClick={() => {
                  navigate('mypage/talk');
                }}
              >
                응원톡 바로가기
              </button>
            </div>
          </Card>
        </div>
      </Wrapper>
    </MarginContainer>
  );
};

export default ContentSection;

const Wrapper = styled.div<{ isPC: boolean }>`
  padding: ${({ isPC }) => (isPC ? '180px' : '120px')} 0;
  h2 {
    ${({ theme, isPC }) =>
      isPC ? theme.typo.landing.title_48_B : theme.typo.landing.text_36_B}
  }
  & > div {
    display: flex;
    flex-direction: column;
    &:first-child {
      align-items: start;
    }
    &:last-child {
      align-items: ${({ isPC }) => (isPC ? 'end' : 'start')};
      margin-top: ${({ isPC }) => (isPC ? '180px' : '120px')};
    }
  }
`;
const Card = styled.div<{ top: boolean; isPC: boolean }>`
  display: flex;
  margin-top: 80px;
  width: 100%;
  ${({ isPC, top }) =>
    isPC
      ? !top &&
        css`
          flex-direction: row-reverse;
          justify-content: space-between;
        `
      : css`
          flex-direction: column;
        `}

  & > div {
    position: relative;
    & > p {
      ${({ theme }) => theme.typo.title_24_B}
      color: ${({ theme }) => theme.palette.mono.black_36};
      ${({ isPC, top }) =>
        isPC
          ? top &&
            css`
              margin-left: 40px;
            `
          : css`
              margin-left: 18px;
            `}
      & > span {
        background: linear-gradient(
          180deg,
          rgba(255, 119, 133, 0) 53.11%,
          rgba(255, 119, 133, 0.5) 53.12%,
          rgba(255, 119, 133, 0.5) 99.99%,
          rgba(255, 119, 133, 0.5) 100%
        );
      }

      &:first-child {
        margin-top: 30px;
      }
      &:last-child {
        margin-top: 10px;
      }
    }

    button {
      padding: 12px 18px;
      background-color: ${({ theme }) => theme.palette.mono.black_12};
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.palette.mono.white};
      ${({ isPC, theme }) =>
        isPC ? theme.typo.text_14_M : theme.typo.text_12_M}
      margin-top: 30px;
      margin-left: ${({ isPC }) => !isPC && '18px'};
      &:active {
        background-color: ${({ theme }) => theme.palette.mono.black_26};
      }
    }
  }
  img {
    ${({ isPC }) =>
      isPC
        ? css`
            width: 400px;
          `
        : css`
            box-sizing: border-box;
            margin: 0 18px;
          `}
  }
  .sub {
    & > img {
      width: ${({ isPC }) => (isPC ? '400px' : `calc(100% - 36px)`)};
    }
  }
  .sub::after {
    content: '고스락 - 깔루아 연합공연 (2019.06)';
    ${({ theme }) => theme.typo.tag_10_B}
    font-weight: 400;
    position: absolute;
    color: ${({ theme }) => theme.palette.mono.font_sub};
    right: 20px;
    bottom: -18px;
  }
`;

const Title = styled.div`
  ${({ theme }) => theme.typo.landing.title_48_B}
  color: ${({ theme }) => theme.palette.mono.black_12};
  width: 276;
  & > h2 {
    margin-bottom: 10px;
  }
`;
