import React, { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";

import Image from "next/image";
import Icono from "../nano/Icono";
import A from "../nano/A";
import $ from "../nano/$";

const Header = () => {
  const [localToken, setLocalToken] = useState(false);
  const [sessToken, setSessToken] = useState(false);
  const [user, setUser] = useState({
    nickname: "",
    email: null,
    image: "no_user.jpg",
  });

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
        console.log(data);
        setUser({ ...data, image: data.image ? data.image : "no_user.jpg" });
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

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setLocalToken(!!localStorage.getItem("token"));
    setSessToken(!!sessionStorage.getItem("token"));
    showDataUser();
    Router.reload();
  };

  const scrollHeader = () => {
    let altura = $("headerDesktop").offsetTop + 2;

    if (window.pageYOffset > altura) {
      $("headerDesktop").classList.add("menuFixed");
    } else {
      $("headerDesktop").classList.remove("menuFixed");
    }
  };

  const contX = () => {
    try {
      if ($("dataUser").classList.contains("dataUserDisplay")) {
        $("dataUser").classList.remove("dataUserDisplay");
      }
    } catch (error) {}

    try {
      if ($("expandMore").classList.contains("expandMore")) {
        $("expandMore").classList.remove("expandMore");
      }

      if ($("expandMore2").classList.contains("expandMore")) {
        $("expandMore2").classList.remove("expandMore");
      }
    } catch (error) {}

    if ($("siderBarNotificaciones").classList.contains("right")) {
      $("siderBarNotificaciones").classList.remove("right");
    }
    $("contX").classList.toggle("active");

    $("siderbarTablet").classList.toggle("left");
  };

  const showNotifications = () => {
    if ($("dataUser").classList.contains("dataUserDisplay")) {
      $("dataUser").classList.remove("dataUserDisplay");
    }

    if ($("expandMore").classList.contains("expandMore")) {
      $("expandMore").classList.remove("expandMore");
    }

    if ($("expandMore2").classList.contains("expandMore")) {
      $("expandMore2").classList.remove("expandMore");
    }
    if ($("siderbarTablet").classList.contains("left")) {
      $("siderbarTablet").classList.remove("left");
    }

    if ($("contX").classList.contains("active")) {
      $("contX").classList.remove("active");
    }

    $("siderBarNotificaciones").classList.toggle("right");
  };

  const showDataUser = () => {
    if ($("siderbarTablet").classList.contains("left")) {
      $("siderbarTablet").classList.remove("left");
    }

    if ($("contX").classList.contains("active")) {
      $("contX").classList.remove("active");
    }
    if ($("siderBarNotificaciones").classList.contains("right")) {
      $("siderBarNotificaciones").classList.remove("right");
    }

    $("dataUser").classList.toggle("dataUserDisplay");
    $("expandMore").classList.toggle("expandMore");
    $("expandMore2").classList.toggle("expandMore");
  };
  return (
    <>
      <header className="row col-xs-12" id="headerDesktop">
        <div className="row containerHeader headerDesktop">
          <div className="col-xs-3  col-sm-2 center-xs">
            <A href="/">
              <Image
                src="/logo1.png"
                alt="Picture of the author"
                width={139}
                height={41}
              />
            </A>
            {<div className="borderRight"></div>}
          </div>

          <div className="col-xs-9 col-sm-10 navegation">
            <nav>
              <ul className="link">
                <li>
                  <A href="/">
                    <Icono css="icon-home" />
                    Inicio
                  </A>
                </li>
                <li>
                  <A href="/comunidades">
                    <Icono css="icon-group_add" />
                    Comunidades
                  </A>
                </li>
                <li>
                  <A href="/talleres">
                    <Icono css="icon-trello" />
                    Talleres
                  </A>
                </li>
                <li>
                  <A href="/creadores-de-contenido">
                    <Icono css="icon-article" />
                    Creadores de contenido
                  </A>
                </li>
                {!localToken && !sessToken && (
                  <li className="login">
                    <A href="/" css="">
                      <Icono css="icon-account_circle" />
                      Login
                    </A>
                  </li>
                )}
              </ul>

              {localToken && (
                <div className="usuario">
                  <ul>
                    <li
                      className="img"
                      onClick={() => {
                        showDataUser();
                      }}
                    >
                      <img src={user.image} alt="user" />
                    </li>
                    <li
                      className="name"
                      onClick={() => {
                        showDataUser();
                      }}
                    >
                      <p>{user.nickname}</p>
                    </li>
                    <li className="morePerfile">
                      <Icono css="icon-expand_more" id="expandMore" />
                    </li>
                    <li
                      className="notifications"
                      onClick={() => {
                        showNotifications();
                      }}
                    >
                      <Icono css="icon-bell" />
                    </li>
                  </ul>
                </div>
              )}
              {sessToken && (
                <div className="usuario">
                  <ul>
                    <li
                      className="img"
                      onClick={() => {
                        showDataUser();
                      }}
                    >
                      <img src={user.image} alt="user" />
                    </li>
                    <li
                      className="name"
                      onClick={() => {
                        showDataUser();
                      }}
                    >
                      <p>{user.nickname}</p>
                    </li>
                    <li className="morePerfile">
                      <Icono css="icon-expand_more" id="expandMore" />
                    </li>
                    <li
                      className="notifications"
                      onClick={() => {
                        showNotifications();
                      }}
                    >
                      <Icono css="icon-bell" />
                    </li>
                  </ul>
                </div>
              )}
            </nav>
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
            <A href="/">
              <Image
                src="/logo1.png"
                alt="Picture of the author"
                width={139}
                height={41}
              />
            </A>
          </div>
          <div className="col-xs-3 right">
            <div className="usuario">
              {localToken && (
                <ul>
                  <li
                    className="img"
                    onClick={() => {
                      showDataUser();
                    }}
                  >
                    <img width={100} height={100} src={user.image} alt="user" />
                  </li>
                  <li
                    className="name"
                    onClick={() => {
                      showDataUser();
                    }}
                  >
                    <p>{user.nickname}</p>
                  </li>
                  <li
                    className="morePerfile"
                    onClick={() => {
                      showDataUser();
                    }}
                    id="expandMore2"
                  >
                    <Icono css="icon-expand_more" />
                  </li>
                  <li
                    className="notifications"
                    onClick={() => {
                      showNotifications();
                    }}
                  >
                    <Icono css="icon-bell" />
                  </li>
                </ul>
              )}
              {sessToken && (
                <ul>
                  <li
                    className="img"
                    onClick={() => {
                      showDataUser();
                    }}
                  >
                    <img width={100} height={100} src={user.image} alt="user" />
                  </li>
                  <li
                    className="name"
                    onClick={() => {
                      showDataUser();
                    }}
                  >
                    <p>{user.nickname}</p>
                  </li>
                  <li
                    className="morePerfile"
                    onClick={() => {
                      showDataUser();
                    }}
                    id="expandMore2"
                  >
                    <Icono css="icon-expand_more" />
                  </li>
                  <li
                    className="notifications"
                    onClick={() => {
                      showNotifications();
                    }}
                  >
                    <Icono css="icon-bell" />
                  </li>
                </ul>
              )}
            </div>
          </div>

          <nav className="siderbar" id="siderbarTablet">
            <ul className="link">
              <li>
                <Link href="/comunidades">
                  <a
                    onClick={() => {
                      contX();
                    }}
                  >
                    <Icono css="icon-home" />
                    Inicio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/comunidades">
                  <a
                    onClick={() => {
                      contX();
                    }}
                  >
                    <Icono css="icon-group_add" />
                    Comunidades
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/talleres">
                  <a
                    onClick={() => {
                      contX();
                    }}
                  >
                    <Icono css="icon-trello" />
                    Talleres
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/creadores-de-contenido">
                  <a
                    onClick={() => {
                      contX();
                    }}
                  >
                    <Icono css="icon-article" />
                    Creadores de contenido
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {localToken && (
          <div className="dataUser" id="dataUser">
            <nav>
              <ul>
                <li>
                  <A href="/mi-perfil">
                    <Icono css="icon-account_circle" />
                    Mi Perfil
                  </A>
                </li>
                <li>
                  <button onClick={logout}>
                    <A href="/">
                      <Icono css="icon-logout" />
                      Cerrar Sesión
                    </A>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {sessToken && (
          <div className="dataUser" id="dataUser">
            <nav>
              <ul>
                <li>
                  <A href="/">
                    <Icono css="icon-account_circle" />
                    Mi Perfil
                  </A>
                </li>
                <li>
                  <button onClick={logout}>
                    <A href="/">
                      <Icono css="icon-logout" />
                      Cerrar Sesión
                    </A>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <nav className="siderBarNotificaciones" id="siderBarNotificaciones">
          <ul>
            <li>
              <A href="#">
                <Icono css="icon-bell" />
                Notificacion#1
              </A>
            </li>
            <li>
              <A href="#">
                <Icono css="icon-bell" />
                Notificacion#2
              </A>
            </li>
            <li>
              <A href="#">
                <Icono css="icon-bell" />
                Notificacion#3
              </A>
            </li>
            <li>
              <A href="#">
                <Icono css="icon-bell" />
                Notificacion#4
              </A>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
