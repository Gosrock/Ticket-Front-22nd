import styled from 'styled-components';
import enjoy from '../../assets/landing/enjoy.png';
import message from '../../assets/landing/message.png';
import talk from '../../assets/landing/talk.png';
import twodays from '../../assets/landing/twodays.png';
import MarginContainer from './MarginContainer';

const ContentSection = ({ isPC }: { isPC: boolean }) => {
  return (
    <Wrapper>
      <MarginContainer>
        <AdtitleL>
          <h2>온라인 예매로</h2>
          <h2>편하게</h2>
        </AdtitleL>
        <Adcard>
          <img src={message} />
          <p>
            <span>문자인증</span>을 통해 더 쉽고 빠르게
          </p>
          <p>여러분만의 티켓을 발급하세요!</p>
        </Adcard>
        <Adcard>
          <img src={twodays} />
          <p>전례없는 이틀간의 공연,</p>
          <p>
            양일권으로 구매한다면 <span>할인</span>이에요!
          </p>
        </Adcard>
        <AdtitleR>
          <h2>공연장에서만</h2>
          <h2>느낄 수 있는 즐거움</h2>
        </AdtitleR>
        <Adcard>
          <p>고스락과 함께 나눠요! </p>
          <p>게임, 야광팔찌, 또 어떤게 있을까요</p>
          <img src={enjoy} />
        </Adcard>
        <Adcard>
          <p>두구두구두구!</p>
          <p>여러분의 응원을 남겨주세요</p>
          <img src={talk} />
        </Adcard>
      </MarginContainer>
    </Wrapper>
  );
};

export default ContentSection;

const Wrapper = styled.div`
  max-width: 840px;
  height: auto;
  margin: auto;
  & > h2 {
    ${({ theme }) => theme.typo.landing.title_48_B}
  }
`;
const Adcard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 750px;
  height: 310px;
  margin: 40px auto;
  & > p {
    ${({ theme }) => theme.typo.title_24_B}
    color: ${({ theme }) => theme.palette.mono.black_36};
    margin-top: 10px;
    height: auto;
    & > span {
      background: linear-gradient(
        180deg,
        rgba(255, 119, 133, 0) 53.11%,
        rgba(255, 119, 133, 0.5) 53.12%,
        rgba(255, 119, 133, 0.5) 99.99%,
        rgba(255, 119, 133, 0.5) 100%
      );
    }
  }
  & > img {
    height: 100%;
    width: auto;
  }
`;
const AdtitleL = styled.div`
  ${({ theme }) => theme.typo.landing.title_48_B}
  color: ${({ theme }) => theme.palette.mono.black_12};
  margin-top: 180px;
  margin-bottom: 80px;
  margin-right: auto;
  width: 276;
  & > h2 {
    margin-bottom: 10px;
  }
`;
const AdtitleR = styled.div`
  ${({ theme }) => theme.typo.landing.title_48_B}
  color: ${({ theme }) => theme.palette.mono.black_12};
  margin-top: 180px;
  margin-bottom: 80px;
  margin-left: auto;
  width: 386px;
  & > h2 {
    margin-bottom: 10px;
  }
`;
