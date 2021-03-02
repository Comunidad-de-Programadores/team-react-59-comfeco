import React, { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import md5 from "md5";

import Image from "next/image";
import Icono from "../nano/Icono";
import $ from "../nano/$";

const Header = () => {
  const [localToken, setLocalToken] = useState(false);
  const [sessToken, setSessToken] = useState(false);
  const [user, setUser] = useState({ nickname: "", email: null, image: null });

  const verifyToken = (type) => {
    fetch("/api/get_user", {
      headers: new Headers([
        [
          "Authorization",
          `${type === "local" ? localStorage.token : sessionStorage.token}`,
        ],
      ]),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.error) {
          return;
        }
        setUser(data);
      });
  };

  useEffect(() => {
    setLocalToken(!!localStorage.getItem("token"));
    setSessToken(!!sessionStorage.getItem("token"));

    window.onscroll = () => {
      scrollHeader();
    };
  }, []);

  useEffect(() => {
    if (localToken) {
      verifyToken("local");
    }

    if (sessToken) {
      verifyToken("sess");
    }
  }, [localToken, sessToken]);

  useEffect(() => {
    if (user.email) {
      const hash = md5(user.email);
      const image = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
      setUser({ ...user, image });
    }
  }, [user.email]);

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setLocalToken(!!localStorage.getItem("token"));
    setSessToken(!!sessionStorage.getItem("token"));
    Router.reload();
  };

  const scrollHeader = () => {
    let altura = $("headerDesktop").offsetTop;

    if (window.pageYOffset > altura) {
      $("headerDesktop").classList.add("menuFixed");
    } else {
      $("headerDesktop").classList.remove("menuFixed");
    }
  };

  const contX = () => {
    if ($("siderBarNotificaciones").classList.contains("right")) {
      $("siderBarNotificaciones").classList.remove("right");
    }
    $("contX").classList.toggle("active");

    $("siderbarTablet").classList.toggle("left");
  };

  const showNotifications = () => {
    if ($("siderbarTablet").classList.contains("left")) {
      $("siderbarTablet").classList.remove("left");
    }

    if ($("contX").classList.contains("active")) {
      $("contX").classList.remove("active");
    }

    $("siderBarNotificaciones").classList.toggle("right");
  };

  const showDataUser = () => {
    $("dataUser").classList.toggle("dataUserDisplay");
    $("expandMore").classList.toggle("expandMore");
    $("expandMore2").classList.toggle("expandMore");
  };
  return (
    <>
      <header className="row col-xs-12" id="headerDesktop">
        <div className="row containerHeader headerDesktop">
          <div className="col-xs-3  col-sm-2 center-xs">
            <Link href="/">
              <a>
                <Image
                  src="/logo1.png"
                  alt="Picture of the author"
                  width={139}
                  height={41}
                />
              </a>
            </Link>
            {<div className="borderRight"></div>}
          </div>

          <div className="col-xs-9 col-sm-10 navegation">
            <nav>
              <ul className="link">
                <li>
                  <a href="#">
                    <span className="ico icon-lock"></span>Inicio
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="ico icon-lock"></span>Comunidades
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="ico icon-lock"></span>Talleres
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="ico icon-lock"></span>Creadores de
                    contenido
                  </a>
                </li>
              </ul>

              <div className="usuario">
                <ul>
                  <li
                    className="img"
                    onClick={() => {
                      showDataUser();
                    }}
                  >
                    <img src="/Genarogg.jpg" alt="" />
                  </li>
                  <li
                    className="name"
                    onClick={() => {
                      showDataUser();
                    }}
                  >
                    <p>Genarogg</p>
                  </li>
                  <li className="morePerfile">
                    <span
                      className="ico icon-expand_more"
                      id="expandMore"
                    ></span>
                  </li>
                  <li
                    className="notifications"
                    onClick={() => {
                      showNotifications();
                    }}
                  >
                    <span className="ico icon-lock"></span>
                  </li>
                </ul>
              </div>
            </nav>
            {/*Verify User localstorage*/}
            {/*  {localToken && (
              <nav className="user_nav">
                Image verify 
                {user.image ? (
                  <img src={user.image} />
                ) : (
                  <img src="/no_user.jpg" />
                )}

                <p>{user.nickname}</p>

                <button onClick={logout}>Logout</button>
              </nav>
            )} */}
            {/*Verify User session*/}
            {/* {sessToken && (
              <nav className="user_nav">
                 Image Verify 
                {user.image ? (
                  <img src={user.image} />
                ) : (
                  <img src="/no_user.jpg" />
                )}
                <p>{user.nickname}</p>
                <button onClick={logout}>Logout</button>
              </nav>
            )} */}
          </div>
        </div>
        <div className="row between-xs headerTablet">
          <div className="col-xs-2 left">
            <button
              className="cont_x menu2"
              id="contX"
              onClick={() => {
                contX();
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="col-xs-6 imgLogo">
            <Image
              src="/logo1.png"
              alt="Picture of the author"
              width={139}
              height={41}
            />
          </div>
          <div className="col-xs-3 right">
            <div className="usuario">
              <ul>
                <li
                  className="img"
                  onClick={() => {
                    showDataUser();
                  }}
                >
                  <img src="/Genarogg.jpg" alt="" />
                </li>
                <li
                  className="name"
                  onClick={() => {
                    showDataUser();
                  }}
                >
                  <p>Genarogg</p>
                </li>
                <li
                  className="morePerfile"
                  onClick={() => {
                    showDataUser();
                  }}
                  id="expandMore2"
                >
                  <span className="ico icon-expand_more"></span>
                </li>
                <li
                  className="notifications"
                  onClick={() => {
                    showNotifications();
                  }}
                >
                  <span className="ico icon-lock"></span>
                </li>
              </ul>
            </div>
          </div>

          <nav className="siderbar" id="siderbarTablet">
            <ul className="link">
              <li>
                <a
                  href="#"
                  onClick={() => {
                    contX();
                  }}
                >
                  <span
                    className="ico icon-lock"
                    onClick={() => {
                      contX();
                    }}
                  ></span>
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    contX();
                  }}
                >
                  <span className="ico icon-lock"></span>Comunidades
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    contX();
                  }}
                >
                  <span className="ico icon-lock"></span>Talleres
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    contX();
                  }}
                >
                  <span className="ico icon-lock"></span>Creadores de contenido
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="dataUser" id="dataUser">
          <nav>
            <ul>
              <li>
                <a href="#">
                  <span className="ico icon-lock"></span>Mi Perfil
                </a>
              </li>
              <li>
                <button>
                  <a href="#">
                    <span className="ico icon-lock"></span>
                    Cerrar Sesión
                  </a>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <nav className="siderBarNotificaciones" id="siderBarNotificaciones">
          <ul>
            <li>
              <a href="#">
                <span className="ico icon-lock"></span>notificasion#1
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ico icon-lock"></span>notificasion#2
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ico icon-lock"></span>notificasion#3
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ico icon-lock"></span>notificasion#4
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
