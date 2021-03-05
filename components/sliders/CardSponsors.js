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
      <div className="containerCard">
        <div className="cardSponsor">
          <div className="poligones">
            <div className="izq"></div>
            <div className="der"></div>
          </div>
          <div className="img">
            {/* */}
            <Image src={img} width={200} height={275} />
          </div>
          <div className="name">
            <h3>{nombre}</h3>
          </div>
          <div className="redesSociales">
            <ul>
              <li>
                <a className="btn2" href={globe}>
                  <span className="ico   icon-globe"></span>
                </a>
              </li>
              <li>
                <a className="btn2" href={facebook}>
                  <span className="ico  icon-facebook"></span>
                </a>
              </li>
              <li>
                <a className="btn2" href={twitter}>
                  <span className="ico icon-twitter"></span>
                </a>
              </li>
              <li>
                <a className="btn2" href={linkedin}>
                  <span className="ico icon-linkedin"></span>
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
