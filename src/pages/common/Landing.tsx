import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Footer from '../../components/common/Footer';
import Header from '../../components/landing/Header';
import LocateSection from '../../components/landing/LocateSection';
import IntroSection from '../../components/landing/IntroSection';
import ContentSection from '../../components/landing/ContentSection';
import TeamSection from '../../components/landing/teams/TeamSection';
import CurrentSection from '../../components/landing/CurrentSection';
import InfoSection from '../../components/landing/InfoSection';

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
      <Title isPC={isPC} />
      {/* 인트로 */}
      <IntroSection isPC={isPC} />
      {/* 공연장 정보 */}
      <LocateSection isPC={isPC} />
      {/* 공연, 프로젝트 콘텐츠 소개 */}
      <ContentSection isPC={isPC} />
      {/* 현재 예매된 티켓 매수 */}
      <CurrentSection isPC={isPC} />
      {/* 세션 정보 */}
      <TeamSection />
      {/* 공연 유의사항 안내 */}
      <InfoSection isPC={isPC} />
      {/* 푸터 */}
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
