import styled from 'styled-components';
import Footer from '../../components/common/Footer';

import useGetUserInfo from '../../hooks/queries/useGetUserInfo';
import useGetTickets from '../../hooks/queries/useGetTickets';
import MyReservedTicket from '../../components/mypage/reservedTickets/MyReservedTicket';
import Banners from '../../components/mypage/banner/Banners';
import { ITicket } from '../../apis/type/ticket';
import ShortCut from '../../components/mypage/ShortCut';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Mypage = () => {
  const { status: userInfoStatus, data: userInfo } = useGetUserInfo();
  const { status: ticketsStatus, data: tickets } = useGetTickets();
  const navigate = useNavigate();

  useEffect(() => {
    const KAKAO_APP_KEY = `${process.env.REACT_APP_KAKAO_APP_KEY}`;
    if (!window.Kakao.isInitialized()) {
      // JavaScript key를 인자로 주고 SDK 초기화
      window.Kakao.init(KAKAO_APP_KEY);
      // SDK 초기화 여부를 확인하자.
      console.log(window.Kakao.isInitialized());
    }
  }, []);

  const YBTickets =
    ticketsStatus === 'success'
      ? tickets?.data.filter((el: ITicket) => el.date === 'YB')
      : undefined;
  const OBTickets =
    ticketsStatus === 'success'
      ? tickets?.data.filter((el: ITicket) => el.date === 'OB')
      : undefined;

  return (
    <Wrapper>
      {userInfoStatus === 'success' ? (
        <h1>{!!userInfo && userInfo.data.name}님,</h1>
      ) : (
        <h1>🎸🥁🎸님,</h1>
      )}
      <h1>만나서 반가워요!</h1>
      <Banners />
      <h2>내 예매 티켓</h2>
      <MyReservedTicket date="YB" tickets={YBTickets} status={ticketsStatus} />
      <MyReservedTicket date="OB" tickets={OBTickets} status={ticketsStatus} />
      <h2>바로가기</h2>
      <ShortCut type="talk" onClick={() => navigate('/mypage/talk')} />
      <ShortCut type="orderList" onClick={() => navigate('/mypage/tickets')} />
      <ShortCut
        type="mainPage"
        onClick={() => {
          window.open('/');
        }}
      />
      <Footer />
    </Wrapper>
  );
};

export default Mypage;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 392px;
  left: 0px;
  top: 0px;
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    rgba(191, 148, 228, 0.7) 0%,
    rgba(191, 148, 228, 0.35) 36.46%,
    rgba(191, 148, 228, 0.14) 80.73%,
    rgba(191, 148, 228, 0) 100%
  );

  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    opacity: 1;
    background: ${({ theme }) => theme.palette.mono.black_36};
  }
  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.palette.point.lavender};
  }

  & > h1 {
    width: 100%;
    padding: 0px 18px;
    margin-bottom: 56px;
    color: ${({ theme }) => theme.palette.mono.white};
    ${({ theme }) => theme.typo.title_28_B};
  }
  & > h1:first-child {
    margin-top: 72px;
    margin-bottom: 8px;
  }

  & > h2 {
    margin-top: 72px;
    margin-bottom: 36px;
    width: 100%;
    padding: 0px 18px;
    color: ${({ theme }) => theme.palette.mono.white};
    ${({ theme }) => theme.typo.title_24_B};
  }

  & > :last-child {
    margin-top: 72px;
  }
`;
