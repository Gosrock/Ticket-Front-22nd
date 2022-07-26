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

const Mypage = () => {
  const navigate = useNavigate();
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
  return (
    <BackGround>
      <Wrapper>
        <Greeting>
          <p>한규진님,</p>
          <p>만나서 반가워요!</p>
        </Greeting>
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
        <MYTicketTitle>
          <p>내 예매 티켓</p>
        </MYTicketTitle>
        <TicketDate>
          <p>9월 1일 (목)</p>
          <p>DAY 1 : YB</p>
        </TicketDate>
        <Tickets>
          {/* 일단 17로 해놨는데 나중에 주소 수정해야함 */}
          <TicketInfo
            status={'pending'}
            date={'08월 30일 17:25'}
            ticketNum={17}
            onClick={() => navigate(`/tickets/17`)}
          />
          <TicketInfo
            status={'paid'}
            date={'08월 30일 17:25'}
            ticketNum={17}
            onClick={() => navigate(`/tickets/17`)}
          />
          <TicketInfo
            status={'entered'}
            date={'08월 30일 17:25'}
            ticketNum={17}
            onClick={() => navigate(`/tickets/17`)}
          />
          <TicketInfo
            status={'expired'}
            date={'08월 30일 17:25'}
            ticketNum={17}
            onClick={() => navigate(`/tickets/17`)}
          />
          <PurchaseTicket
            isFirst={false}
            onClick={() => {
              navigate('/auth/login/1');
            }}
          />
        </Tickets>
        <TicketDate>
          <p>9월 2일 (금)</p>
          <p>DAY 2 : OB</p>
        </TicketDate>
        <Tickets>
          <PurchaseTicket
            isFirst={true}
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
`;

const Greeting = styled.div`
  margin-top: 116px;
  margin-bottom: 56px;
  width: 100%;
  padding: 0 5%;
  color: ${({ theme }) => theme.palette.mono.white_fa};
  & p {
    font: ${({ theme }) => theme.typo.title_28_B};
    margin-bottom: 8px;
  }

  & :last-child {
    margin: 0;
  }
`;

const MYTicketTitle = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  width: 100%;
  padding: 0 5%;
  color: ${({ theme }) => theme.palette.mono.font_main};
  & p {
    font: ${({ theme }) => theme.typo.title_24_B};
  }
`;

const TicketDate = styled.div`
  margin-bottom: 12px;
  width: 100%;
  padding: 0 5%;
  & p {
    color: ${({ theme }) => theme.palette.mono.font_sub};
    font: ${({ theme }) => theme.typo.text_18_M_lessSpacing};
  }
  & :last-child {
    color: ${({ theme }) => theme.palette.mono.white};
  }
`;

const Tickets = styled.div`
  margin-bottom: 40px;
  width: 100%;
  padding: 0 5%;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  & div {
    flex: 0 0 150px; /* basis 를 90%로 조절함*/
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
