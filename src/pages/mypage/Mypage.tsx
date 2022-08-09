import styled from 'styled-components';
import Footer from '../../components/common/Footer';

import useGetUserInfo from '../../hooks/queries/useGetUserInfo';
import useGetTickets from '../../hooks/queries/useGetTickets';
import MyReservedTicket from '../../components/mypage/reservedTickets/MyReservedTicket';
import Slides from '../../components/mypage/slides/Slides';
import { ITicket } from '../../apis/type/ticket';

const Mypage = () => {
  const { status: userInfoStatus, data: userInfo } = useGetUserInfo();
  const { status: ticketsStatus, data: tickets } = useGetTickets();

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
      <Slides />
      <h2>내 예매 티켓</h2>
      <MyReservedTicket date="YB" tickets={YBTickets} status={ticketsStatus} />
      <MyReservedTicket date="OB" tickets={OBTickets} status={ticketsStatus} />
      <h2>바로가기</h2>
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
    #ff7785 0%,
    rgba(215, 137, 192, 0.499355) 42.19%,
    rgba(191, 148, 228, 0.2) 80.73%,
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
    margin-bottom: 48px;
    width: 100%;
    padding: 0px 18px;
    color: ${({ theme }) => theme.palette.mono.white};
    ${({ theme }) => theme.typo.title_24_B};
  }
`;
