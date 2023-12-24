import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
function SlideBanner() {
  return (
    <div className='mb-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
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