import React from "react";
import A from "../nano/A";
import Icono from "../nano/Icono";
const Footer = () => {
  return (
    <>
      <footer className="row  col-xs-12">
        <div className="containerFooter">
          <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12 derechos">
            <p>Team react #59. Todos los derechos reserbados. 2021</p>
          </div>

          <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12 redesSociales">
            <ul>
              <li>
                <A href="https://facebook.com" type="a">
                  <Icono css="icon-facebook" />
                </A>
              </li>
              <li>
                <A href="#" type="a">
                  <Icono css=" icon-twitter " />
                </A>
              </li>

              <li>
                <A href="#" type="a">
                  <Icono css="icon-youtube-play" />
                </A>
              </li>
              <li>
                <A href="#" type="a">
                  <Icono css="icon-instagram" />
                </A>
              </li>
              <li>
                <A href="#" type="a">
                  <Icono css="icon-linkedin" />
                </A>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
