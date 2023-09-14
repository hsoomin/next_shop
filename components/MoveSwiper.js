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
            <SwiperSlide><img src="/img/slide_01.jpg" alt="slide" /></SwiperSlide>
            <SwiperSlide><img src="/img/slide_00.jpg" alt="slide" /></SwiperSlide>
            <SwiperSlide><img src="/img/slide_02.png" alt="slide" /></SwiperSlide>
            <SwiperSlide><img src="/img/slide_03.png" alt="slide" /></SwiperSlide>
        </Swiper>
    );
};

export default MoveSwiper;