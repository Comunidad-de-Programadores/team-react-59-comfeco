import React from "react";
import Image from "next/image";

const CardSponsors = ({
  img,
  nombre,
  globe = "#",
  facebook = "#",
  twitter = "#",
  linkedin = "#",
}) => {
  return (
    <>
      <div class="containerCard">
        <div class="cardSponsor">
          <div class="poligones">
            <div class="izq"></div>
            <div class="der"></div>
          </div>
          <div class="img">
            {/* */}
            <Image src={img} width={200} height={275} />
          </div>
          <div class="name">
            <h3>{nombre}</h3>
          </div>
          <div class="redesSociales">
            <ul>
              <li>
                <a class="btn2" href={globe}>
                  <span class="ico   icon-globe"></span>
                </a>
              </li>
              <li>
                <a class="btn2" href={facebook}>
                  <span class="ico  icon-facebook"></span>
                </a>
              </li>
              <li>
                <a class="btn2" href={twitter}>
                  <span class="ico icon-twitter"></span>
                </a>
              </li>
              <li>
                <a class="btn2" href={linkedin}>
                  <span class="ico icon-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSponsors;
