import React from "react";
import Image from "next/image";
import Link from "next/link";
import A from "../nano/A";
import Icono from "../nano/Icono";

const WidgetPerfil = () => {
  return (
    <>
      <section className="widget-perfil">
        <Link href="/editar-perfil">
          <a className="widget-perfil-link">Editar</a>
        </Link>{" "}
        <div className="widget-perfil-image">
          <div className="widget-perfil-image--rounded">
            <Image
              src="/default-avatar.png"
              alt="default avatar"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="widget-perfil-name">Moises Lagos Pachas</div>
        <div className="widget-perfil-subject">Desarrollador web</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="widget-perfil-social"></div>
        <div className="redesSocialesAnimadas">
          <ul>
            <li>
              <button>
                <A href="#">
                  <Icono css="icon-facebook facebookHover" />
                  <span></span>
                </A>
              </button>
            </li>
            <li>
              <button>
                <A href="#">
                  <Icono css="icon-twitter twitterHover" />
                  <span></span>
                </A>
              </button>
            </li>
            <li>
              <button>
                <A href="#">
                  <Icono css="icon-github1 githubHover" />
                  <span></span>
                </A>
              </button>
            </li>
            <li>
              <button>
                <A href="#">
                  <Icono css="icon-linkedin linkedinHover" />
                  <span></span>
                </A>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default WidgetPerfil;
