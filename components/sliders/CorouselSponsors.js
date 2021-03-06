import React from "react";
import CardSponsors from "./CardSponsors";
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination, EffectCoverflow, Mousewheel} from 'swiper'


const CorouselSponsors = () => {
  SwiperCore.use([Navigation, Pagination, EffectCoverflow, Mousewheel])

  return (
    <>
      <Swiper 
              tag="section" 
              className=".sponsors"
              effect="coverflow"  
              slidesPerView="auto"
              loop={true}
              pagination
              navigation
              observer
              mousewheel
      > 
        <SwiperSlide>
          <CardSponsors
            img="/sponsors-oficiales/sponsor-Stackly-Code.png"
            nombre="Stackly Code"
            globe="#"
            facebook="#"
            twitter="#"
            linkedin="#"
            />
        </SwiperSlide>
        <SwiperSlide>
          <CardSponsors
            img="/sponsors-oficiales/sponsor-domini-Code.png"
            nombre="domini Code"
            globe="#"
            facebook="#"
            twitter="#"
            linkedin="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSponsors
            img="/sponsors-oficiales/sponsor-TekkiTv.png"
            nombre="TekkiTv"
            globe="#"
            facebook="#"
            twitter="#"
            linkedin="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSponsors
            img="/sponsors-oficiales/sponsor-Huawei.png"
            nombre="Huawei"
            globe="#"
            facebook="#"
            twitter="#"
            linkedin="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSponsors
            img="/sponsors-oficiales/sponsor-codigofacilito.png"
            nombre="codigo facilito"
            globe="#"
            facebook="#"
            twitter="#"
            linkedin="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSponsors
            img="/sponsors-oficiales/sponsor-CodelyTV.png"
            nombre="CodelyTV"
            globe="#"
            facebook="#"
            twitter="#"
            linkedin="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSponsors
            img="/sponsors-oficiales/sponsor-egghead.png"
            nombre="egghead"
            globe="#"
            facebook="#"
            twitter="#"
            linkedin="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSponsors
            img="/sponsors-oficiales/sponsor-latamdev.png"
            nombre="latamdev"
            globe="#"
            facebook="#"
            twitter="#"
            linkedin="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSponsors
            img="/sponsors-oficiales/sponsor-leonidas-esteban.png"
            nombre="leonidas esteban"
            globe="#"
            facebook="#"
            twitter="#"
            linkedin="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSponsors
            img="/sponsors-oficiales/sponsor-José-Dimas-Luján.png"
            nombre="José Dimas Luján"
            globe="#"
            facebook="#"
            twitter="#"
            linkedin="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSponsors
            img="/sponsors-oficiales/sponsor-Fernando-Herrera.png"
            nombre="Fernando Herrera"
            globe="#"
            facebook="#"
            twitter="#"
            linkedin="#"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CorouselSponsors;
