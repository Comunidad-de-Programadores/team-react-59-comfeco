import React, { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import md5 from "md5";

import Image from "next/image";
import Icono from "../nano/Icono";
import A from "../nano/A";
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
    if ($("dataUser").classList.contains("dataUserDisplay")) {
      $("dataUser").classList.remove("dataUserDisplay");
    }

    if ($("expandMore").classList.contains("expandMore")) {
      $("expandMore").classList.remove("expandMore");
    }

    if ($("expandMore2").classList.contains("expandMore")) {
      $("expandMore2").classList.remove("expandMore");
    }
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
              <ul>
                <li
                  className="img"
                  onClick={() => {
                    showDataUser();
                  }}
                >
                  <Image width={100} height={100} src="/Genarogg.jpg" alt="" />
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
                <button>
                  <A href="/">
                    <Icono css="icon-logout" />
                    Cerrar Sesión
                  </A>
                </button>
              </li>
            </ul>
          </nav>
        </div>

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
