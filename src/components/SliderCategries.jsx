
'use client'
import CardIconImg from '../../public/img/cardicon.svg'
import market from '../../public/img/mrket.svg'
import hotel from '../../public/img/hotel.svg'
import world from '../../public/img/world.svg'
import music from '../../public/img/music.svg'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/navigation';

// Import Swiper styles


import {  Navigation } from 'swiper/modules';

import CardIcon from './CardIcon';

export default function SliderCategries() {
  let swiperRef = null;

  const handlePrevClick = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };
    return (
       <div className="mainslider_categries ">
            <Swiper 
            onSwiper={(swiper) => (swiperRef = swiper)}
            spaceBetween={10}
            loop={true}
            navigation={true}
            modules={[ Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
                        className="mySwiper slider_categries "
          >
  

    <SwiperSlide> <CardIcon title={"الجمال والعافية"} img={CardIconImg}/></SwiperSlide>
        <SwiperSlide>    <CardIcon title={"الترفيه"} img={music}/> </SwiperSlide>
        <SwiperSlide>    <CardIcon title={"التسوق"} img={market}/></SwiperSlide>
        <SwiperSlide>    
        <CardIcon title={"السفر والسياحة"} img={world}/> 
        </SwiperSlide>
      
        <SwiperSlide> 

                <CardIcon title={"الضيافة"} img={hotel}/>
   
        </SwiperSlide>
      
        <SwiperSlide> 

                <CardIcon title={"الضيافة"} img={hotel}/>
   
        </SwiperSlide>
      
          </Swiper>
          {/* <div>
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div> */}
       </div>
      );
}
