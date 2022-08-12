import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import MarginContainer from '../../components/landing/MarginContainer';
import choa from './choa.png';

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
`;
const MapboxR = styled.div`
  width: 630px;
  height: 350px;
  display: flex;
  margin-left: auto;
  margin-top: 80px;
  margin-bottom: 80px;
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
  right: -30px;
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
