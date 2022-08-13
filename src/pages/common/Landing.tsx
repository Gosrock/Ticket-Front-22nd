import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Footer from '../../components/common/Footer';
import MarginContainer from '../../components/landing/MarginContainer';
import Adcard from '../../components/landing/advertise';

import ad1 from './ad1.png';
import ad2 from './ad2.png';
import ad3 from './ad3.png';
import ad4 from './ad4.png';
import Header from '../../components/landing/Header';
import LocateSection from '../../components/landing/LocateSection';
import IntroSection from '../../components/landing/IntroSection';
import TeamSection from '../../components/landing/teams/TeamSection';

const Landing = () => {
  const isPC = useMediaQuery({ minWidth: 768 });
  const navigate = useNavigate();
  // const tickets = useGetTickets();
  // console.log(tickets);
  // const ticket = useGetTicket({ uuid: '0' });
  // console.log(ticket);

  return (
    <Wrapper>
      {/* 헤더 */}
      <Header isPC={isPC} />
      {/* 대문 */}
      <Title isPC={isPC}></Title>
      {/* 인트로 */}
      <IntroSection isPC={isPC} />
      {/* 공연장 정보 */}
      <LocateSection isPC={isPC} />
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
      <TeamSection />
      <Footer />
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.mono.white};
`;

const Title = styled.div<{ isPC: boolean }>`
  height: ${({ isPC }) => (isPC ? '700px' : '440px')};
  width: 100%;
  background-color: ${({ theme }) => theme.palette.point.yellow_kakao};
`;
const Defaultbox = styled.div`
  max-width: 840px;
  height: auto;
  margin: auto;
  & > h2 {
    ${({ theme }) => theme.typo.landing.title_48_B}
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
