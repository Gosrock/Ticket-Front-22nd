import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Banner from './Banner';

import { bannerData, IBannerDataProps } from './BannerData';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useModal from '../../../hooks/useModal';

const Banners = () => {
  const setWindowWidth = useState<number>(window.innerWidth)[1];
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const onClickArray = [
    // 응원톡 바로가기
    () => navigate('/mypage/talk'),
    // 공연장 정보
    () =>
      openModal({
        modalType: 'Location',
        modalProps: {
          closeModal,
        },
      }),
    // 개발자 정보
    () =>
      openModal({
        modalType: 'Developers',
        modalProps: {
          closeModal,
        },
      }),
    () =>
      window.Kakao.Channel.chat({
        channelPublicId: '_QxeZBT',
      }),
  ];

  let slidesCount =
    window.innerWidth > 576 || 396 >= window.innerWidth
      ? 1
      : window.innerWidth / 396;

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
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: slidesCount,
    modules: [Pagination, Autoplay],
    pagination: pagination,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <Swiper {...swiperParams}>
      {bannerData.map((el: IBannerDataProps, idx: number) => {
        return (
          <SwiperSlide key={idx}>
            <Banner {...el} onClick={onClickArray[idx]} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banners;
