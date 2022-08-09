import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Banner from './Banner';

import { bannerData, IBannerDataProps } from './BannerData';
import { useNavigate } from 'react-router-dom';

const Banners = () => {
  const navigate = useNavigate();

  const onClickArray = [
    () => navigate('/mypage/talk'),
    () => navigate('/mypage/talk'),
    () => navigate('/mypage/talk'),
    () =>
      window.Kakao.Channel.chat({
        channelPublicId: '_QxeZBT',
      }),
  ];

  const pagination = {
    clickable: true,
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
