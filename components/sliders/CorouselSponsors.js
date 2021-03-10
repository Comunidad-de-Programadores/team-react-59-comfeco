import React, { useEffect } from "react";
import CardSponsors from "./CardSponsors";

const CorouselSponsors = () => {
  useEffect(() => {
    const swiper2 = new Swiper(".sponsors", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: "auto",
      loop: true,
      speed: 600,
      lazy: true,
      preloadImages: true,
     
    
      coverflowEffect: {
        rotate: 5,
        stretch: 20,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);
  return (
    <>
      <div className="swiper-container sponsors">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-Stackly-Code.png"
              nombre="Stackly Code"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div className="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-domini-Code.png"
              nombre="domini Code"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div className="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-TekkiTv.png"
              nombre="TekkiTv"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div className="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-Huawei.png"
              nombre="Huawei"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div className="swiper-slide">
            {" "}
            <CardSponsors
              img="/sponsors-oficiales/sponsor-codigofacilito.png"
              nombre="codigo facilito"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div className="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-CodelyTV.png"
              nombre="CodelyTV"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div className="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-egghead.png"
              nombre="egghead"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div className="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-latamdev.png"
              nombre="latamdev"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div className="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-leonidas-esteban.png"
              nombre="leonidas esteban"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div className="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-José-Dimas-Luján.png"
              nombre="José Dimas Luján"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div className="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-Fernando-Herrera.png"
              nombre="Fernando Herrera"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
        </div>

        <div className="swiper-pagination"></div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </>
  );
};

export default CorouselSponsors;
