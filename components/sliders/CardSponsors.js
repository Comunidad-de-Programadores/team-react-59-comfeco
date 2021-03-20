import React from "react";
import Image from "next/image";
import A from "../nano/A";
import Icono from "../nano/Icono";

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
              <li className="btn2">
                <A href={globe}>
                  <Icono css="icon-world github" />
                </A>
              </li>
              <li className="btn2">
                <A href={facebook}>
                  <Icono css=" icon-facebook facebook" />
                </A>
              </li>
              <li className="btn2">
                <A href={twitter}>
                  <Icono css="icon-twitter twitter" />
                </A>
              </li>
              <li className="btn2">
                <A href={linkedin}>
                  <Icono css="icon-linkedin linkedin" />
                </A>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSponsors;
