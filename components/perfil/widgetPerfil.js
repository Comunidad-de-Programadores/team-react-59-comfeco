import React, { useEffect, useState } from "react";
import Image from "next/image";
import Icono from "../nano/Icono";
import A from "../nano/A";

const WidgetPerfil = () => {
  const [user, setUser] = useState({
    image: "/no_user.jpg",
    nickname: "",
    biography: "",
    area: "",
  });

  useEffect(() => {
    fetch("/api/get_user", {
      headers: {
        Authorization: `${localStorage.token || sessionStorage.token}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <>
      <section className="widget-perfil">
        <A href="/editar-perfil" css="widget-perfil-link">
          Editar
          <Icono css="icon-external-link" />
        </A>
        <div className="widget-perfil-image">
          <div className="widget-perfil-image--rounded">
            <img
              src={user.image}
              alt="default avatar"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="widget-perfil-name">{user.nickname}</div>
        <div className="widget-perfil-subject">
          {user.area || user.area != "" ? (
            user.area
          ) : (
            <p>Pon tu area en editar perfil</p>
          )}
        </div>
        <p>
          {user.biography || user.biography != "" ? (
            user.biography
          ) : (
            <p>Pon tu biografia en editar perfil</p>
          )}
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
