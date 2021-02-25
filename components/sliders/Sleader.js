import React, { useEffect }  from "react";
import Head from "next/head";
import CardLeader from "./CardLeader";

const Sleader = () => {
  useEffect(() => {
    window.swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: false,
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
      preloadImages: true,

      lazy: true,
    });
  }, []);

  return (
    <>
      <div className="swiper-container swiperSleader">
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
            <CardLeader
              avatar="/leader/react-leader-alejandro-nanez.png"
              nameAvatar="alejandro ñañez"
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
            <CardLeader
              avatar="/leader/react-leader-lina-maria-montano.png"
              nameAvatar="lina maria montano"
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
            <CardLeader
              avatar="/leader/react-leader-vanessa-marely.png"
              nameAvatar="vanessa marely"
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
            <CardLeader
              avatar="/leader/react-leader-lara-diaz.png"
              nameAvatar="lara diaz"
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
            <CardLeader
              avatar="/leader/react-leader-diego_plascencia.png"
              nameAvatar="diego plascencia"
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
            <CardLeader
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
            <CardLeader
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
            <CardLeader
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
            <CardLeader
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
            <CardLeader
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
            <CardLeader
              avatar="/leader/angular-leader-mayra-rodríguez.png"
              nameAvatar="mayra rodríguez"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="angular"
              idshow="angular1"
              idCont="angular2"
              idIcon="angular3"
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
            <CardLeader
              avatar="/leader/angular-leader-Anartz-Mugika -Ledo.png"
              nameAvatar="Anartz Mugika Ledo"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="angular"
              idshow="angular4"
              idCont="angular5"
              idIcon="angular6"
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
            <CardLeader
              avatar="/leader/angular-leader-bezael-perez.png"
              nameAvatar="bezael perez"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="angular"
              idshow="angular7"
              idCont="angular8"
              idIcon="angular9"
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
            <CardLeader
              avatar="/leader/angular-leader-diego-montoya.png"
              nameAvatar="diego montoya"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="angular"
              idshow="angular10"
              idCont="angular11"
              idIcon="angular12"
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
            <CardLeader
              avatar="/leader/angular-leader-nicolas-molina.png"
              nameAvatar="nicolas molin"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="angular"
              idshow="angular13"
              idCont="angular14"
              idIcon="angular15"
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
            <CardLeader
              avatar="/leader/vue-leader-fernando-de-la-rosa.png"
              nameAvatar="fernando de la rosa"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="vue"
              idshow="vue1"
              idCont="vue2"
              idIcon="vue3"
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
            <CardLeader
              avatar="/leader/vue-leader-ignacio-anaya.png"
              nameAvatar="leader ignacio anaya"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="vue"
              idshow="vue4"
              idCont="vue5"
              idIcon="vue6"
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
            <CardLeader
              avatar="/leader/vue-leader-noemi-leon.png"
              nameAvatar="noemi leon"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="vue"
              idshow="vue7"
              idCont="vue8"
              idIcon="vue9"
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
            <CardLeader
              avatar="/leader/vue-leader-cristopher-paniagua.png"
              nameAvatar="cristopher paniagua"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="vue"
              idshow="vue10"
              idCont="vue11"
              idIcon="vue12"
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
            <CardLeader
              avatar="/leader/vue-leader-manuel-ojeda.png"
              nameAvatar="manuel ojeda"
              descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
              facebook="#"
              github="#"
              twitter="#"
              linkedin="#"
              team="vue"
              idshow="vue13"
              idCont="vue14"
              idIcon="vue15"
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

export default Sleader;
