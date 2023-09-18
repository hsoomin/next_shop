'use client'
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MoveSwiper = () => {
    return (
        <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        autoplay={{delay:4000, disableOnInteraction: false}}
        onSlideChange={() => console.log('slide change')}
        className='mySwiper'
        style={{
            "--swiper-pagination-color": "#fffffe",
        }}
        >
            <SwiperSlide><img src="/img/slide01.png" alt="slide" /></SwiperSlide>
            <SwiperSlide><img src="/img/slide02.png" alt="slide" /></SwiperSlide>
            <SwiperSlide><img src="/img/slide03.png" alt="slide" /></SwiperSlide>
            <SwiperSlide><img src="/img/slide04.png" alt="slide" /></SwiperSlide>
            <SwiperSlide><img src="/img/slide05.png" alt="slide" /></SwiperSlide>
        </Swiper>
    );
};

export default MoveSwiper;