import React, { useEffect } from "react";

import Icono from "../../nano/Icono";
import A from "../../nano/A";
import $ from "../../nano/$";

const Nav = ({ active }) => {
  const activeNav = (n) => {
    if (n === 1) {
      $("nav1").classList.add("active");
    }

    if (n === 2) {
      $("nav2").classList.add("active");
    }

    if (n === 3) {
      $("nav3").classList.add("active");
    }

    if (n === 4) {
      $("nav4").classList.add("active");
    }
  };

  useEffect(() => {
    activeNav(active);
  }, []);
  return (
    <>
      <div className="headerNav">
        <nav>
          <ul>
            <li id="nav1" >
              <A href="/mi-perfil">
                <Icono css="icon-account_circle" />
                Perfil
              </A>
            </li>
            <li id="nav2" >
              <A href="/mi-perfil/insignias">
                <Icono css="icon-account_circle" />
                Insignias
              </A>
            </li>
            <li id="nav3" >
              <A href="/mi-perfil/grupos">
                <Icono css="icon-account_circle" />
                Grupos
              </A>
            </li>
            <li id="nav4" >
              <A href="/mi-perfil/eventos">
                <Icono css="icon-account_circle" />
                Eventos
              </A>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
