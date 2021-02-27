import React, { useEffect } from "react";
import CardSponsors from "./CardSponsors";

const CorouselSponsors = () => {
  useEffect(() => {
    const swiper = new Swiper(".sponsors", {
      effect: "coverflow",
      slidesPerView: 5,
      spaceBetween: 120,
      speed: 600,
      coverflowEffect: {
        rotate: 5,
        stretch: 20,
        depth: 0,
        modifier: 1,
        slideShadows: false,
        
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);
  return (
    <>
      <div class="swiper-container sponsors">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-Stackly-Code.png"
              nombre="Stackly Code"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div class="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-domini-Code.png"
              nombre="domini Code"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div class="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-TekkiTv.png"
              nombre="TekkiTv"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div class="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-Huawei.png"
              nombre="Huawei"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div class="swiper-slide">
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
          <div class="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-CodelyTV.png"
              nombre="CodelyTV"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div class="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-egghead.png"
              nombre="egghead"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div class="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-latamdev.png"
              nombre="latamdev"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div class="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-leonidas-esteban.png"
              nombre="leonidas esteban"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div class="swiper-slide">
            <CardSponsors
              img="/sponsors-oficiales/sponsor-José-Dimas-Luján.png"
              nombre="José Dimas Luján"
              globe="#"
              facebook="#"
              twitter="#"
              linkedin="#"
            />
          </div>
          <div class="swiper-slide">
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

        <div class="swiper-pagination"></div>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </>
  );
};

export default CorouselSponsors;
