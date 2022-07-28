import PurchaseTicket from '../../components/mypage/PurchaseTicket';
import TicketInfo from '../../components/mypage/TicketInfo';
import Slider from '../../components/mypage/Slider';
import styled from 'styled-components';
import Footer from '../../components/layout/Footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import useGetUserInfo from '../../hooks/useGetUserInfo';

const Mypage = () => {
  const navigate = useNavigate();
  const UserInfo = useGetUserInfo();
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
    const createDate = new Date(date);
    const month = createDate.getMonth();
    const day = createDate.getDate();
    const hour = createDate.getHours();
    const minute = createDate.getMinutes();
    const convertedMonth =
      month >= 10 ? month.toString() : '0' + month.toString();
    const convertedDay = day >= 10 ? day.toString() : '0' + day.toString();
    const convertedHour = hour >= 10 ? hour.toString() : '0' + hour.toString();
    const convertedMinute =
      minute >= 10 ? minute.toString() : '0' + minute.toString();
    return { convertedMonth, convertedDay, convertedHour, convertedMinute };
  };
  return (
    <BackGround>
      <Wrapper>
        <h1>{UserInfo && UserInfo.name}님,</h1>
        <h1>만나서 반가워요!</h1>
        <Swiper {...swiperParams}>
          <SwiperSlide>
            <Slider
              title={'응원 톡'}
              titleHighlight={'남기기'}
              content={
                '“긴 입력 예시야. 아좌좌좌!!  긴 입력 예...”아아아아아 아아아아 아아아아아아아아 아아아아아아 '
              }
              contentWriter={'서도철'}
              team={null}
              onClick={() => {
                navigate('talk');
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              title={'오시는 길'}
              titleHighlight={'바로가기'}
              content={'돌다리도 두들겨보고 건너라\n공연장의 위치는?'}
              team={'YB'}
              onClick={() => {}}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              title={'입금계좌'}
              titleHighlight={'확인하기'}
              content={'혹시 깜빡하고 입금을 못하셨나요??'}
              team={null}
              onClick={() => {}}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              title={'개발자들'}
              titleHighlight={'칭찬해주기'}
              content={'이 프로젝트에 참여한 사람들이에요'}
              team={null}
              onClick={() => {}}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              title={'카카오 채널'}
              titleHighlight={'바로가기'}
              content={'고스락의 소식을 제일 빨리 받아보고 싶다면'}
              team={null}
              onClick={() => {}}
            />
          </SwiperSlide>
        </Swiper>
        <h2>내 예매 티켓</h2>
        <h3>9월 1일 (목)</h3>
        <h3>DAY 1 : YB</h3>
        <Tickets>
          {!!UserInfo &&
            UserInfo.order
              .filter((el) => el.date === 'YB')
              .map((el) => {
                const {
                  convertedMonth,
                  convertedDay,
                  convertedHour,
                  convertedMinute,
                } = convertDate(el.createdAt);
                return (
                  <TicketInfo
                    key={el.uuid}
                    status={el.status}
                    createat={`${convertedMonth}월 ${convertedDay}일 ${convertedHour}:${convertedMinute}`}
                    ticketNum={el.id}
                    onClick={() => navigate(`/tickets/${el.id}`)}
                  />
                );
              })}
          <PurchaseTicket
            isFirst={
              !!UserInfo &&
              !(UserInfo.order.filter((el) => el.date === 'YB').length > 0)
            }
            onClick={() => {
              navigate('/auth/login/1');
            }}
          />
        </Tickets>
        <h3>9월 2일 (금)</h3>
        <h3>DAY 2 : OB</h3>
        <Tickets>
          {!!UserInfo &&
            UserInfo.order
              .filter((el) => el.date === 'OB')
              .map((el) => {
                const {
                  convertedMonth,
                  convertedDay,
                  convertedHour,
                  convertedMinute,
                } = convertDate(el.createdAt);
                return (
                  <TicketInfo
                    key={el.uuid}
                    status={el.status}
                    createat={`${convertedMonth}월 ${convertedDay}일 ${convertedHour}:${convertedMinute}`}
                    ticketNum={el.id}
                    onClick={() => navigate(`/tickets/${el.id}`)}
                  />
                );
              })}
          <PurchaseTicket
            isFirst={
              !!UserInfo &&
              !(UserInfo.order.filter((el) => el.date === 'OB').length > 0)
            }
            onClick={() => {
              navigate('/auth/login/1');
            }}
          />
        </Tickets>
        <div
          style={{
            height: '60px',
            margin: '45px 0px',
            color: '#000',
            background: '#FFf',
          }}
        >
          뭔지 모를 빈칸
        </div>
        <Footer />
      </Wrapper>
    </BackGround>
  );
};

export default Mypage;

const BackGround = styled.div`
  background-color: ${({ theme }) => theme.palette.mono.black_12};
  width: 100%;
  height: 1200px;
`;

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
    padding: 0 5%;
    margin-bottom: 56px;
    color: ${({ theme }) => theme.palette.mono.white_fa};
    font: ${({ theme }) => theme.typo.title_28_B};
  }
  & > h1:first-child {
    margin-top: 76px;
    margin-bottom: 8px;
  }

  & > h2 {
    margin-top: 80px;
    margin-bottom: 40px;
    width: 100%;
    padding: 0 5%;
    color: ${({ theme }) => theme.palette.mono.font_main};
    font: ${({ theme }) => theme.typo.title_24_B};
  }

  & > h3 {
    width: 100%;
    padding: 0 5%;
    color: ${({ theme }) => theme.palette.mono.font_sub};
    font: ${({ theme }) => theme.typo.text_18_M_lessSpacing};
  }
  & > h3:first-child {
    color: ${({ theme }) => theme.palette.mono.white};
  }
`;

const Tickets = styled.div`
  margin-top: 12px;
  margin-bottom: 40px;
  width: 100%;
  padding: 0 5%;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  & div {
    flex: 0 0 150px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
