import React, { useEffect } from "react";
import Head from "next/head";
import CardLeader from "./CardLeader";
import Swiper from "./swiper.js";

const Sleader = () => {
  useEffect(() => {
    window.swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: "auto",
      loop: true,
      speed: 5000,
      lazy: true,
      preloadImages: true,
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
      <div className="swiper-container swiperSleader">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/react-leader-alejandro-nanez.png"
              nameAvatar="alejandro ñañez"
              descripction="Soy frontend engineer en Zapier, co-organizador de React Medellín, mentor en The Collab Lab y creo contenido."
              facebook="#"
              github="https://github.com/alejandronanez"
              twitter="https://twitter.com/alejandronanez"
              linkedin="https://www.linkedin.com/in/alejandronanez/"
              team="react"
              idshow="react1"
              idCont="react2"
              idIcon="react3"
            />
          </div>
          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/react-leader-lina-maria-montano.png"
              nameAvatar="lina maria montano"
              descripction="Backend Developer JavaScript and Python | Podcaster at Camino Dev."
              facebook="#"
              github="https://github.com/calypsobronte"
              twitter="https://twitter.com/calypsobronte"
              linkedin="https://www.linkedin.com/in/calypsobronte/"
              team="react"
              idshow="react4"
              idCont="react5"
              idIcon="react6"
            />
          </div>

          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/react-leader-vanessa-marely.png"
              nameAvatar="vanessa marely"
              descripction="Web Developer. Frontend Developer. React, Angular."
              facebook="#"
              github="https://github.com/vanessamarely"
              twitter="https://twitter.com/vanessamarely"
              linkedin="https://www.linkedin.com/in/vanessa-marely-aristizabal-angel/"
              team="react"
              idshow="react7"
              idCont="react8"
              idIcon="react9"
            />
          </div>

          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/react-leader-lara-diaz.png"
              nameAvatar="lara diaz"
              descripction="Frontend Dev en Churrasco y Co-organizer de Refactor Devs"
              facebook="#"
              github="https://github.com/selenel21"
              twitter="https://twitter.com/selene_nr"
              linkedin="https://www.linkedin.com/in/larad%C3%ADaz/"
              team="react"
              idshow="react10"
              idCont="react11"
              idIcon="react12"
            />
          </div>

          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/react-leader-diego_plascencia.png"
              nameAvatar="diego plascencia"
              descripction="Senior Software Engineer at Globant."
              facebook="#"
              github="https://github.com/diego-d5000"
              twitter="https://twitter.com/diegod3v"
              linkedin="https://www.linkedin.com/in/diegod3v/"
              team="react"
              idshow="react13"
              idCont="react14"
              idIcon="react15"
            />
          </div>

          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/svelte-leader-oscar-barajas.png"
              nameAvatar="oscar barajas"
              descripction="Lead at Developer Circles from Facebook, ReactJS, Speaker & Blogger."
              facebook="#"
              github="https://github.com/gndx/"
              twitter="https://twitter.com/gndx"
              linkedin="https://www.linkedin.com/in/oscarbarajas/"
              team="svelte"
              idshow="svelte1"
              idCont="svelte2"
              idIcon="svelte3"
            />
          </div>

          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/svelte-leader-manuel-muño.png"
              nameAvatar="manuel muños"
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
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/svelte-leader-silvestre-vivo.png"
              nameAvatar="silvestre vivo"
              descripction="Developer and entrepreneur. Oefening baart kunst. De Sanlúcar de Barrameda."
              facebook="#"
              github="https://github.com/silvestrevivo"
              twitter="https://twitter.com/silvestrevivo"
              linkedin="https://www.linkedin.com/in/silvestre-vivo-1a6843bb/"
              team="svelte"
              idshow="svelte7"
              idCont="svelte8"
              idIcon="svelte9"
            />
          </div>

          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/svelte-leader-marcos-rivas.png"
              nameAvatar="marcos rivas"
              descripction="Sr. CSAM in Microsoft. web design and web developer."
              facebook="#"
              github="https://github.com/marcosrivasr"
              twitter="https://twitter.com/vidamrr"
              linkedin="https://www.linkedin.com/in/marcos-rivas-rojas-86a76b57/"
              team="svelte"
              idshow="svelte10"
              idCont="svelte11"
              idIcon="svelte12"
            />
          </div>

          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/svelte-leader-noah-kaufman.png"
              nameAvatar="noah kaufman"
              descripction="I will help you become a Svelte MASTER!"
              facebook="#"
              github="#"
              twitter="https://twitter.com/MasterSvelte"
              linkedin="#"
              team="svelte"
              idshow="svelte13"
              idCont="svelte14"
              idIcon="svelte15"
            />
          </div>
          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/angular-leader-mayra-rodríguez.png"
              nameAvatar="mayra rodríguez"
              descripction="Google Developer Expert en Angular y Web Technologies y Co-Organizadora de Angular Bogotá y Flutter Colombia."
              facebook="#"
              github="https://github.com/mayrascript"
              twitter="https://twitter.com/mayrascript"
              linkedin="https://www.linkedin.com/in/mayrarodriguez1709/"
              team="angular"
              idshow="angular1"
              idCont="angular2"
              idIcon="angular3"
            />
          </div>

          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/angular-leader-Anartz-Mugika -Ledo.png"
              nameAvatar="Anartz Mugika Ledo"
              descripction="Frontend (Angular, Android, iOS), Backend (Symfony, NodeJs, GraphQL), Developer + Videojuegos (Unity)"
              facebook="#"
              github="https://github.com/mugan86"
              twitter="https://twitter.com/mugan86"
              linkedin="https://www.linkedin.com/in/anartz-mugika-0007a062/"
              team="angular"
              idshow="angular4"
              idCont="angular5"
              idIcon="angular6"
            />
          </div>

          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/angular-leader-bezael-perez.png"
              nameAvatar="bezael perez"
              descripction="Software Development Specialist en Simplr.io. Life as a Service."
              facebook="#"
              github="https://github.com/bezael"
              twitter="https://twitter.com/bezael_dev"
              linkedin="https://www.linkedin.com/in/bezael/"
              team="angular"
              idshow="angular7"
              idCont="angular8"
              idIcon="angular9"
            />
          </div>
          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/angular-leader-diego-montoya.png"
              nameAvatar="diego montoya"
              descripction="Desarrollo web en Econtainers"
              facebook="#"
              github="https://github.com/dianmonblan"
              twitter="#"
              linkedin="https://www.linkedin.com/in/diego-montoya-blandon/"
              team="angular"
              idshow="angular10"
              idCont="angular11"
              idIcon="angular12"
            />
          </div>

          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/angular-leader-nicolas-molina.png"
              nameAvatar="nicolas molina"
              descripction="I am a GDE (Google Developer Expert) in Web Technologies and Angular. I love to be a developer and to create software. "
              facebook="#"
              github="https://github.com/nicobytes"
              twitter="https://twitter.com/nicobytes"
              linkedin="https://www.linkedin.com/in/nicobytes/?originalSubdomain=co"
              team="angular"
              idshow="angular13"
              idCont="angular14"
              idIcon="angular15"
            />
          </div>

          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/vue-leader-fernando-de-la-rosa.png"
              nameAvatar="fernando de la rosa"
              descripction="Soy Full Stack web developer e Ingeniero Industrial Logístico, me apasiona la tecnología, los datos y los videojuegos."
              facebook="#"
              github="https://github.com/jfdelarosa"
              twitter="https://twitter.com/fernando_qpro"
              linkedin="https://www.linkedin.com/in/jfdlrm/"
              team="vue"
              idshow="vue1"
              idCont="vue2"
              idIcon="vue3"
            />
          </div>

          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/vue-leader-ignacio-anaya.png"
              nameAvatar="leader ignacio anaya"
              descripction="Software Engineer, Tech Trainer & Speaker"
              facebook="#"
              github="https://github.com/ianaya89"
              twitter="https://twitter.com/ianaya89"
              linkedin="https://www.linkedin.com/in/ianaya89/"
              team="vue"
              idshow="vue4"
              idCont="vue5"
              idIcon="vue6"
            />
          </div>

          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/vue-leader-noemi-leon.png"
              nameAvatar="noemi leon"
              descripction="Lead Software Developer | Women Techmakers Ambassador."
              facebook="#"
              github="https://github.com/noeleo25"
              twitter="https://twitter.com/noeleo25"
              linkedin="https://www.linkedin.com/in/noemileonu/"
              team="vue"
              idshow="vue7"
              idCont="vue8"
              idIcon="vue9"
            />
          </div>
          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/vue-leader-cristopher-paniagua.png"
              nameAvatar="cristopher paniagua"
              descripction="Web Developer. I help people coding amazing apps. Learning&Sharing about web technologies and soft skills"
              facebook="#"
              github="https://github.com/ps-cristopher"
              twitter="https://twitter.com/ps_cristopher"
              linkedin="https://www.linkedin.com/in/ps-cristopher/"
              team="vue"
              idshow="vue10"
              idCont="vue11"
              idIcon="vue12"
            />
          </div>
          <div
            className="swiper-slide"
            /* onMouseEnter={() => {
              swiper.autoplay.stop();
            }}
            onMouseLeave={() => {
              window.swiper.autoplay.start();
            }} */
          >
            <CardLeader
              avatar="/leader/vue-leader-manuel-ojeda.png"
              nameAvatar="manuel ojeda"
              descripction="avaScript, TypeScript, Vue, React, PHP and Laravel developer. Student and Mentor in Platzi"
              facebook="#"
              github="https://github.com/manuelojeda"
              twitter="https://twitter.com/darkjeda"
              linkedin="https://www.linkedin.com/in/manuel-alejandro-ojeda-ag%C3%BAndez-618753132/"
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
