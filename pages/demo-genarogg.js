import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Head from "next/head";

const demoGenarogg = () => {
  const settings = {
    dots: true,
    infinite: true,
    /* autoplay:true,
    autoplaySpeed:1500, */
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <main className="row col-xs-12">
        {/* <div className="containerSlider  carousel"> */}
        {/* <Slider {...settings} className="carouselBody">
          <div>
            <li>
              <div className="border">
                <img src="/logo1.png" width="100%" height="100%" />
              </div>
            </li>
          </div>
          <div>
            <li>
              <div className="border">
                <img src="/Genarogg.jpg" width="100%" height="100%" />
              </div>
            </li>
          </div>
          <div>
            <li>
              <div className="border">
                <img src="/Genarogg.jpg" width="100%" height="100%" />
              </div>
            </li>
          </div>
          <div>
            <li>
              <div className="border">
                <img src="/Genarogg.jpg" width="100%" height="100%" />
              </div>
            </li>
          </div>
          <div>
            <li>
              <div className="border">
                <img src="/Genarogg.jpg" width="100%" height="100%" />
              </div>
            </li>
          </div>
          <div>
            <li>
              <div className="border">
                <img src="/Genarogg.jpg" width="100%" height="100%" />
              </div>
            </li>
          </div>
          <div>
            <li>
              <div className="border">
                <img src="/Genarogg.jpg" width="100%" height="100%" />
              </div>
            </li>
          </div>
          <div>
            <li>
              <div className="border">
                <img src="/Genarogg.jpg" width="100%" height="100%" />
              </div>
            </li>
          </div>
        </Slider>
      
         */}

        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide"
              style="background-image:url(/Genarogg.jpg)"
            ></div>
            <div
              className="swiper-slide"
              style="background-image:url(/Genarogg.jpg)"
            ></div>
            <div
              className="swiper-slide"
              style="background-image:url(/Genarogg.jpg)"
            ></div>
            <div
              className="swiper-slide"
              style="background-image:url(/Genarogg.jpg)"
            ></div>
            <div
              className="swiper-slide"
              style="background-image:url(/Genarogg.jpg)"
            ></div>
            <div
              className="swiper-slide"
              style="background-image:url(/Genarogg.jpg)"
            ></div>
            <div
              className="swiper-slide"
              style="background-image:url(/Genarogg.jpg)"
            ></div>
            <div
              className="swiper-slide"
              style="background-image:url(/Genarogg.jpg)"
            ></div>
            <div
              className="swiper-slide"
              style="background-image:url(/Genarogg.jpg)"
            ></div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
        {/* </div> */}
      </main>
    </>
  );
};

export default demoGenarogg;
