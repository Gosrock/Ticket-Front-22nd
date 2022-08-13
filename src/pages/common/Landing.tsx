import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Footer from '../../components/common/Footer';
import MarginContainer from '../../components/landing/MarginContainer';
import Adcard from '../../components/landing/advertise';
import choa from './choa.png';
import ad1 from './ad1.png';
import ad2 from './ad2.png';
import ad3 from './ad3.png';
import ad4 from './ad4.png';

const Landing = () => {
  const isPC = useMediaQuery({ minWidth: 576 });
  const navigate = useNavigate();
  // const tickets = useGetTickets();
  // console.log(tickets);
  // const ticket = useGetTicket({ uuid: '0' });
  // console.log(ticket);

  return (
    <Wrapper>
      <Header>
        <MarginContainer>
          {isPC && (
            <>
              <a>gosrock</a>
              <Nav>
                <a>DAY1</a>
                <a>DAY2</a>
                <a>유의사항</a>
              </Nav>
            </>
          )}
        </MarginContainer>
      </Header>
      <Title></Title>
      <Intro isPC={isPC}>
        <h1>고스락의 22번째 공연에 여러분을 초대합니다.</h1>
        <h1>개강 후 첫번째 목요일과 금요일 저녁이예요. </h1>
        <h1>지금 바로 예매하세요!</h1>
      </Intro>
      <Defaultbox>
        <MapboxR>
          <Textbox>
            <h1>
              <span>DAY 1</span> YB 공연
            </h1>
            <h3>마포구 서교동 양화로 64</h3>
            <h1>드림홀</h1>
          </Textbox>
          <Map>
            <img src={choa} />
          </Map>
        </MapboxR>
        <MapboxL>
          <Map>
            <img src={choa} />
          </Map>
          <Textbox>
            <h1>
              <span>DAY 2</span> OB 공연
            </h1>
            <h3>마포구 서교동 401-6</h3>
            <h1>얼라이브홀</h1>
          </Textbox>
        </MapboxL>
      </Defaultbox>
      <Defaultbox>
        <AdtitleL>
          <h2>온라인 예매로</h2>
          <h2>편하게</h2>
        </AdtitleL>
        <Adcard>
          <img src={ad1} />
          <p>
            <span>문자인증</span>을 통해 더 쉽고 빠르게
          </p>
          <p>여러분만의 티켓을 발급하세요!</p>
        </Adcard>
        <Adcard>
          <img src={ad2} />
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
          <img src={ad3} />
        </Adcard>
        <Adcard>
          <p>두구두구두구!</p>
          <p>여러분의 응원을 남겨주세요</p>
          <img src={ad4} />
        </Adcard>
      </Defaultbox>
      <Footer />
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.mono.white};
`;

const Header = styled.div`
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: white;
  z-index: 5;
  & > div {
    ${({ theme }) => theme.typo.text_16_R}
    color:${({ theme }) => theme.palette.mono.black_00};
    display: flex;
    justify-content: center; //space-between,
    align-items: center;

    & > a {
      position: absolute;
      left: 32px;
      cursor: pointer;
    }
  }
`;

const Nav = styled.div`
  & > a:not(:last-child) {
    margin-right: 48px;
  }
  cursor: pointer;
  a:active {
    color: ${({ theme }) => theme.palette.mono.black_26};
  }
`;

const Intro = styled.div<{ isPC: boolean }>`
  color: black;
  ${({ isPC }) =>
    isPC
      ? css`
          padding: 160px 0 !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          & > h1 {
            margin-bottom: 32px;
            ${({ theme }) => theme.typo.landing.title_24_B}
          }
        `
      : css`
          padding: 60px 0;
        `};
`;

const Title = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.point.yellow_kakao};
`;
const Section1 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Defaultbox = styled.div`
  max-width: 840px;
  height: auto;
  margin: auto;
  & > h2 {
    ${({ theme }) => theme.typo.landing.title_48_B}
  }
`;
const MapboxR = styled.div`
  width: 630px;
  height: 350px;
  display: flex;
  margin-left: auto;
  margin-top: 80px;
  margin-bottom: 80px;
  text-align: right;
`;
const MapboxL = styled.div`
  width: 630px;
  height: 350px;
  display: flex;
  margin-right: auto;
  margin-bottom: 80px;
`;
const Map = styled.div`
  width: 350px;
  height: 350px;
  right: 0px;
  & > img {
    width: 100%;
    height: auto;
  }
`;
const Textbox = styled.div`
  position: relative;
  right: -20px;
  width: 340px;
  color: ${({ theme }) => theme.palette.mono.black_12};
  & > h1 {
    ${({ theme }) => theme.typo.landing.title_48_B}
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
  & > h3 {
    ${({ theme }) => theme.typo.landing.text_18_B}
    margin-top: 32px;
    margin-bottom: 8px;
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
