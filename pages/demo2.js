import React, { useEffect } from "react";
import Head from "next/head";

const demo2 = () => {
  useEffect(() => {
    document.getElementById("s1").style.backgroundImage =
      "url('/Genarogg.jpg')";
    document.getElementById("s2").style.backgroundImage =
      "url('/Genarogg.jpg')";
      document.getElementById("s3").style.backgroundImage =
      "url('/Genarogg.jpg')";
    document.getElementById("s4").style.backgroundImage =
      "url('/Genarogg.jpg')";
      document.getElementById("s5").style.backgroundImage =
      "url('/Genarogg.jpg')";
    document.getElementById("s6").style.backgroundImage =
      "url('/Genarogg.jpg')";

    const swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);
  return (
    <>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" id="s1">
            <p>Hola mundo </p>
          </div>
          <div className="swiper-slide" id="s2"></div>
          <div className="swiper-slide" id="s3">
            <p>Hola mundo </p>
          </div>
          <div className="swiper-slide" id="s4"></div>
          <div className="swiper-slide" id="s5">
            <p>Hola mundo </p>
          </div>
          <div className="swiper-slide" id="s6"></div>
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
