import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';

import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { ITeamData, OBData, YBData } from './TeamData';
import Team from './Team';
import MarginContainer from '../MarginContainer';

interface ITeams {
  isPC: boolean;
  type: 'YB' | 'OB';
}

const Teams = ({ isPC, type }: ITeams) => {
  const setWindowWidth = useState<number>(window.innerWidth)[1];
  let slidesCount = window.innerWidth / 298;
  const handleWidthResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleWidthResize);
    return () => {
      window.addEventListener('resize', handleWidthResize);
    };
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: (_index: number, className: string) => {
      return '<span class="' + className + '"></span>';
    },
  };
  const swiperParams = {
    spaceBetween: 30,
    // 원래 간격이 18px 이긴한데, 18로 하면 간격이 매우 작게 나와서 30으로 일단 해둠
    slidesPerView: slidesCount,
    modules: [Pagination, Autoplay],
    pagination: pagination,
    autoplay: {
      delay: 5000000,
      disableOnInteraction: false,
    },
    loop: true,
  };

  return (
    <Wrapper type={type} isPC={isPC}>
      {type === 'YB' ? (
        <>
          <p>YB</p>
          <Container type={type} isPC={isPC}>
            <p>9월 1일 목요일</p>
            <p>저녁 7시</p>
          </Container>
        </>
      ) : (
        <>
          <p>OB</p>
          <Container type={type} isPC={isPC}>
            <p>9월 2일 금요일</p>
            <p>저녁 7시</p>
          </Container>
        </>
      )}
      {isPC ? (
        type === 'YB' ? (
          <MarginContainer>
            <NotSwiper type={type}>
              <div>
                <Team {...YBData[0]} isPC={isPC} />
                <Team {...YBData[1]} isPC={isPC} />
                <Team {...YBData[2]} isPC={isPC} />
                <Team {...YBData[3]} isPC={isPC} />
              </div>
              <div>
                <Team {...YBData[4]} isPC={isPC} />
                <Team {...YBData[5]} isPC={isPC} />
                <Team {...YBData[6]} isPC={isPC} />
              </div>
            </NotSwiper>
          </MarginContainer>
        ) : (
          <MarginContainer>
            <NotSwiper type={type}>
              <div>
                <Team {...OBData[0]} isPC={isPC} />
                <Team {...OBData[1]} isPC={isPC} />
                <Team {...OBData[2]} isPC={isPC} />
              </div>
              <div>
                <Team {...OBData[3]} isPC={isPC} />
                <Team {...OBData[4]} isPC={isPC} />
                <Team {...OBData[5]} isPC={isPC} />
              </div>
            </NotSwiper>
          </MarginContainer>
        )
      ) : (
        <Swiper {...swiperParams}>
          {type === 'YB'
            ? YBData.map((el: ITeamData, idx: number) => {
                return (
                  <SwiperSlide key={idx}>
                    <Team {...el} isPC={isPC} />
                  </SwiperSlide>
                );
              })
            : OBData.map((el: ITeamData, idx: number) => {
                return (
                  <SwiperSlide key={idx}>
                    <Team {...el} isPC={isPC} />
                  </SwiperSlide>
                );
              })}
        </Swiper>
      )}
    </Wrapper>
  );
};
export default Teams;

const Wrapper = styled.div<{
  type: 'YB' | 'OB';
  isPC: boolean;
}>`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  overflow-x: hidden;

  .swiper {
    width: 100%;
  }
  .swiper-pagination {
    position: relative;
    top: 0;
    margin: 13px 0 152px 0;
  }
  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    opacity: 1;
    background: ${({ theme }) => theme.palette.mono.black_36};
  }
  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.palette.point.lavender};
  }

  ${({ type }) =>
    type === 'YB'
      ? css`
          background: ${({ theme }) => theme.palette.mono.white};
        `
      : css`
          background: ${({ theme }) => theme.palette.mono.black_26};
        `}

  & > p {
    font-family: Noto Sans KR;
    font-weight: 700;
    line-height: 100%;
    text-align: end;

    ${({ isPC }) =>
      isPC
        ? css`
            font-size: 600px;
            margin: -117px -80px 0 0;
          `
        : css`
            font-size: 250px;
            margin: -57px -30px 0 0;
          `}

    ${({ type }) =>
      type === 'YB'
        ? css`
            color: ${({ theme }) => theme.palette.mono.font_main};
          `
        : css`
            color: ${({ theme }) => theme.palette.mono.black_36};
          `}
  }
`;

const Container = styled.div<{
  type: 'YB' | 'OB';
  isPC: boolean;
}>`
  width: 100%;
  ${({ isPC }) =>
    isPC
      ? css`
          margin: -300px auto 0 auto;
          box-sizing: border-box;
          max-width: 836px;
        `
      : css``}

  & > p {
    margin-bottom: 60px;
    margin-left: 18px;
    ${({ type }) =>
      type === 'YB'
        ? css`
            color: ${({ theme }) => theme.palette.mono.black_12};
          `
        : css`
            color: ${({ theme }) => theme.palette.mono.white};
          `}

    ${({ isPC }) =>
      isPC
        ? css`
            ${({ theme }) => theme.typo.landing.title_48_B}
          `
        : css`
            ${({ theme }) => theme.typo.landing.text_36_B}
          `}
  }
  & > p:first-child {
    margin-bottom: 10px;
  }
`;

const NotSwiper = styled.div<{
  type: 'YB' | 'OB';
}>`
  display: flex;
  flex-direction: row;
  margin-bottom: 72px;
  & > div {
    display: flex;
    flex-direction: column;
    & > div {
      margin-bottom: 48px;
    }
  }

  & > div:last-child {
    margin: 100px 0 0 36px;
  }
`;
