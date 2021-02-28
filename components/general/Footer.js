import React from "react";

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
                <a href="#">
                  <span className="ico icon-facebook "></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ico icon-twitter "></span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="ico icon-youtube-play "></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ico icon-instagram "></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ico icon-linkedin "></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
