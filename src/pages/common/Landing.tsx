import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Footer from '../../components/common/Footer';
import Header from '../../components/landing/Header';
import LocateSection from '../../components/landing/LocateSection';
import IntroSection from '../../components/landing/IntroSection';
import ContentSection from '../../components/landing/ContentSection';

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
      <ContentSection isPC={isPC} />
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
