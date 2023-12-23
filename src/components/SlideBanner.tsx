import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function SlideBanner() {
  return (
    <div className='mb-10'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <picture>
            <source media="(min-width: 768px)" srcSet="https://fakeimg.pl/1929x300/" />
            <img src="https://fakeimg.pl/768x768/" alt="" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(min-width: 768px)" srcSet="https://fakeimg.pl/1929x300/" />
            <img src="https://fakeimg.pl/768x768/" alt="" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(min-width: 768px)" srcSet="https://fakeimg.pl/1929x300/" />
            <img src="https://fakeimg.pl/768x768/" alt="" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(min-width: 768px)" srcSet="https://fakeimg.pl/1929x300/" />
            <img src="https://fakeimg.pl/768x768/" alt="" />
          </picture>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SlideBanner;