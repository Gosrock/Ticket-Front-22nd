import PurchaseTicket from '../../components/mypage/PurchaseTicket';
import TicketInfo from '../../components/mypage/TicketInfo';
import Slider, { ISliderProps } from '../../components/mypage/Slider';
import styled from 'styled-components';
import Footer from '../../components/common/Footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import useGetUserInfo from '../../hooks/queries/useGetUserInfo';
import TicketInfoSkeleton from '../../components/skeleton/TicketInfoSkeleton';
import useGetTickets from '../../hooks/queries/useGetTickets';
import { ITicket } from '../../apis/type/ticket';

const Mypage = () => {
  const navigate = useNavigate();
  const { status: ticketsStatus, data: tickets } = useGetTickets();
  const { status: userInfoStatus, data: userInfo } = useGetUserInfo();
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: (_index: number, className: string) => {
      return '<span class="' + className + '"></span>';
    },
  };
  const swiperParams = {
    spaceBetween: 0,
    centeredSlides: true,
    modules: [Pagination, Autoplay],
    pagination: pagination,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  };
  const convertDate = (date: string) => {
    const Month = date.substring(5, 7);
    const Day = date.substring(8, 10);
    const Hour = date.substring(14, 16);
    const Minute = date.substring(17, 19);
    return { Month, Day, Hour, Minute };
  };
  const sliderData: Array<ISliderProps> = [
    {
      titleHighlight: '응원 톡',
      titleDark: '남기기',
      content:
        '긴 입력 예시야. 아좌좌좌!!  긴 입력 예아아아아아 아아아아 아아아아아아아아아아아 아아아아 아아아아아아아아 아아아아아아아아아아 아아아아 아아아아아아아아 아아아아아아아아아아 아아아아 아아아아아아아아 아아아아아아아 아아아아아아 ',
      contentWriter: '서도철',
      team: null,
      onClick: () => {
        navigate('talk');
      },
    },
    {
      titleHighlight: '오시는 길',
      titleDark: '바로가기',
      content: '9/1\n돌다리도 두들겨보고 건너라\n공연장의 위치는?',
      contentWriter: null,
      team: 'YB',
      onClick: () => {
        window.location.href = 'https://naver.me/x229ewi0';
      },
    },
    {
      titleHighlight: '오시는 길',
      titleDark: '바로가기',
      content: '9/2\n돌다리도 두들겨보고 건너라\n공연장의 위치는?',
      contentWriter: null,
      team: 'OB',
      onClick: () => {
        window.location.href = 'https://naver.me/5axu8Onc';
      },
    },
    {
      titleHighlight: '입금계좌',
      titleDark: '확인하기',
      content: '혹시 깜빡하고 입금을 못하셨나요??',
      contentWriter: null,
      team: null,
      onClick: () => {},
    },
    {
      titleHighlight: '개발자들',
      titleDark: '칭찬해주기',
      content: '이 프로젝트에 참여한 사람들이에요',
      contentWriter: null,
      team: null,
      onClick: () => {},
    },
    {
      titleHighlight: '카카오 채널',
      titleDark: '바로가기',
      content: '고스락의 소식을 제일 빨리 받아보고 싶다면',
      contentWriter: null,
      team: null,
      onClick: () => {
        window.location.href = 'https://pf.kakao.com/_QxeZBT';
      },
    },
  ];
  return (
    <Wrapper>
      {userInfoStatus === 'success' ? (
        <h1>{!!userInfo && userInfo.data.name}님,</h1>
      ) : (
        <h1>⦿⦿⦿님,</h1>
      )}
      <h1>만나서 반가워요!</h1>
      <Swiper {...swiperParams}>
        {sliderData.map((el: ISliderProps, idx: number) => {
          return (
            <SwiperSlide key={idx}>
              <Slider {...el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h2>내 예매 티켓</h2>
      <h3>9월 1일 (목)</h3>
      <h3>
        <span>DAY 1 : YB</span>
      </h3>
      <Tickets>
        {ticketsStatus === 'success' ? (
          !!tickets && (
            <>
              {tickets.data
                .filter((el: ITicket) => el.date === 'YB')
                .map((el: ITicket) => {
                  const { Month, Day, Hour, Minute } = convertDate(
                    el.createdAt,
                  );
                  return (
                    <TicketInfo
                      key={el.id}
                      status={el.status}
                      createdat={`${Month}/${Day} ${Hour}:${Minute}`}
                      id={el.id}
                      onClick={() => navigate(`/tickets/${el.id}`)}
                    />
                  );
                })}
              <PurchaseTicket
                isFirst={
                  !(
                    tickets.data.filter((el: ITicket) => el.date === 'YB')
                      .length > 0
                  )
                }
                onClick={() => {
                  navigate('/ticketing/select');
                }}
              />
            </>
          )
        ) : (
          <>
            <TicketInfoSkeleton />
            <TicketInfoSkeleton />
          </>
        )}
      </Tickets>
      <h3>9월 2일 (금)</h3>
      <h3>
        <span>DAY 2 : OB</span>
      </h3>
      <Tickets>
        {ticketsStatus === 'success' ? (
          !!tickets && (
            <>
              {tickets.data
                .filter((el: ITicket) => el.date === 'OB')
                .map((el: ITicket) => {
                  const { Month, Day, Hour, Minute } = convertDate(
                    el.createdAt,
                  );
                  return (
                    <TicketInfo
                      key={el.id}
                      status={el.status}
                      createdat={`${Month}/${Day} ${Hour}:${Minute}`}
                      id={el.id}
                      onClick={() => navigate(`/tickets/${el.id}`)}
                    />
                  );
                })}
              <PurchaseTicket
                isFirst={
                  !(
                    tickets.data.filter((el: ITicket) => el.date === 'OB')
                      .length > 0
                  )
                }
                onClick={() => {
                  navigate('/ticketing/select');
                }}
              />
            </>
          )
        ) : (
          <>
            <TicketInfoSkeleton />
            <TicketInfoSkeleton />
          </>
        )}
      </Tickets>

      <Footer />
    </Wrapper>
  );
};

export default Mypage;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 440px;
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
    color: ${({ theme }) => theme.palette.mono.white_fa};
    ${({ theme }) => theme.typo.title_28_B};
  }
  & > h1:first-child {
    margin-top: 76px;
    margin-bottom: 8px;
  }

  & > h2 {
    margin-top: 80px;
    margin-bottom: 40px;
    width: 100%;
    padding: 0px 18px;
    color: ${({ theme }) => theme.palette.mono.font_main};
    ${({ theme }) => theme.typo.title_24_B};
  }

  & > h3 {
    width: 100%;
    padding: 0px 18px;
    color: ${({ theme }) => theme.palette.mono.font_sub};
    ${({ theme }) => theme.typo.text_18_M_lessSpacing};
  }

  & > h3 span {
    color: ${({ theme }) => theme.palette.mono.white};
  }
`;

const Tickets = styled.div`
  width: 100%;
  margin: 12px 0 40px 0;
  padding: 0 18px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  & > * {
    margin-left: 16px;
  }
  & > :first-child {
    margin: 0;
  }
  & > div {
    flex-shrink: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
