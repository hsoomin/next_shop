'use client'
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MoveSwiper1 = () => {
    return (
        <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        navigation
        onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src="/img/banner01.jpg" alt="banner" /></SwiperSlide>
            <SwiperSlide><img src="/img/banner02.jpg" alt="banner" /></SwiperSlide>
            <SwiperSlide><img src="/img/banner03.jpg" alt="banner" /></SwiperSlide>
        </Swiper>
    );
};

export default MoveSwiper1;