import React, { useEffect } from "react";
import Head from "next/head";
import CardSvelte from "../components/sliders/CardSlider/CardSvelte";
import { fromString } from "uuidv4";

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
              avatar="/leader/react-leader-lara-diaz.png"
              nameAvatar="lara diaz"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="react"
              idshow="react1"
              idCont="react2"
              idIcon="react3"
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
              avatar="/leader/react-leader-vanessa-marely.png"
              nameAvatar="vanessa marely"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="react"
              idshow="react4"
              idCont="react5"
              idIcon="react6"
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
              avatar="/leader/react-leader-diego_plascencia.png"
              nameAvatar="diego plascencia"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="react"
              idshow="react7"
              idCont="react8"
              idIcon="react9"
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
              avatar="/leader/react-leader-alejandro-nanez.png"
              nameAvatar="alejandro ñañez"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="react"
              idshow="react10"
              idCont="react11"
              idIcon="react12"
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
              avatar="/leader/react-leader-lina-maria-montano.png"
              nameAvatar="lina maria montano"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="react"
              idshow="react13"
              idCont="react14"
              idIcon="react15"
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
              avatar="/leader/svelte-leader-oscar-barajas.png"
              nameAvatar="oscar barajas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="svelte"
              idshow="svelte1"
              idCont="svelte2"
              idIcon="svelte3"
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
              avatar="/leader/svelte-leader-manuel-muño.png"
              nameAvatar="manuel muñoz"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="svelte"
              idshow="svelte4"
              idCont="svelte5"
              idIcon="svelte6"
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
              avatar="/leader/svelte-leader-silvestre-vivo.png"
              nameAvatar="silvestre vivo"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="svelte"
              idshow="svelte7"
              idCont="svelte8"
              idIcon="svelte9"
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
              avatar="/leader/svelte-leader-marcos-rivas.png"
              nameAvatar="marcos rivas"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="svelte"
              idshow="svelte10"
              idCont="svelte11"
              idIcon="svelte12"
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
              avatar="/leader/svelte-leader-noah-kaufman.png"
              nameAvatar="noah kaufman"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="svelte"
              idshow="svelte13"
              idCont="svelte14"
              idIcon="svelte15"
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
              avatar="/leader/svelte-leader-noah-kaufman.png"
              nameAvatar="noah kaufman"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="angular"
              idshow="svelte13"
              idCont="svelte14"
              idIcon="svelte15"
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
