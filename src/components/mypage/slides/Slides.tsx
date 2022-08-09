import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Slider, { ISliderProps } from './Slider';

import { sliderData } from './SliderData';

const Slides = () => {
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
    <Swiper {...swiperParams}>
      {sliderData.map((el: ISliderProps, idx: number) => {
        return (
          <SwiperSlide key={idx}>
            <Slider {...el} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slides;
