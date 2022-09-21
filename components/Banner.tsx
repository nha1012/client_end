import Image from 'next/image';
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const Banner = () => {
  return (
    <div className="w-full p-4 h-[40vw] relative">
      <Swiper navigation modules={[Navigation]} className="w-full h-[100%]" slidesPerView={1}>
        <SwiperSlide className="w-full h-[150px] relative">
          <Image src="/imgs/banner-wolfoo.jpeg" alt="" layout="fill" objectFit="fill" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-[150px] relative">
          <Image src="/imgs/banner-HN.jpeg" alt="" layout="fill" objectFit="fill" />
        </SwiperSlide>
        <SwiperSlide className="w-full h-[150px] relative">
          <Image src="/imgs/gaubongonline1.jpeg" alt="" layout="fill" objectFit="fill" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
