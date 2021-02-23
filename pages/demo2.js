import React, { useEffect } from "react";
import Head from "next/head";
import CardSvelte from "../components/sliders/CardSlider/CardSvelte";

const demo2 = () => {
  useEffect(() => {
    window.swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      speed: 5000,
      coverflowEffect: {
        rotate: 10,
        stretch: 25,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="angular"
              idshow="andular"
              idCont="rdassact"
              idIcon="adf"
            />
          </div>
          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="angular"
              idshow="svelte"
              idCont="rdasssact"
              idIcon="addsf"
            />
          </div>

          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andsaular"
              idCont="rdasassact"
              idIcon="addsdasf"
            />
          </div>

          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andsausalar"
              idCont="rdasasssaact"
              idIcon="adewdsf"
            />
          </div>
          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andsdsaaular"
              idCont="rdassdaassact"
              idIcon="adfsddsf"
            />
          </div>

          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andssadasdaular"
              idCont="rdasasasdsact"
              idIcon="addsfkil"
            />
          </div>

          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andssadasddsaular"
              idCont="rdasasasddssact"
              idIcon="addsdsafkil"
            />
          </div>

          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andssadsadasdaular"
              idCont="rdasasaadsdsdsact"
              idIcon="addsfsadkil"
            />
          </div>

          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andssadasdaasdular"
              idCont="rdasasasdasdsact"
              idIcon="addsfkasdail"
            />
          </div>

          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="angular"
              idshow="andulbdar"
              idCont="rdassdgact"
            />
          </div>
          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="angular"
              idshow="g"
              idCont="rdaadsssact"
            />
          </div>

          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andsruyaular"
              idCont="rdasasdbbsact"
            />
          </div>

          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andsausuyalar"
              idCont="rdasassuysaact"
            />
          </div>
          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andsdsahjfaular"
              idCont="rdassdaghjassact"
            />
          </div>

          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andssadadasfvsdaular"
              idCont="rdasasaadssdsact"
            />
          </div>

          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andssadasadfddsaular"
              idCont="rdasasasdadsdssact"
            />
          </div>

          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andssadsadaafasdaular"
              idCont="rdasasaadadsdsdsact"
            />
          </div>

          <div
            className="swiper-slide"
            onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }}
          >
            <CardSvelte
              avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
              nameAvatar="Oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              team="react"
              idshow="andssadasdfdaasdular"
              idCont="rdasasasdfsdasdsact"
            />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <Head>
        <script src="/swiper.min.js"></script>
      </Head>
    </>
  );
};

export default demo2;
