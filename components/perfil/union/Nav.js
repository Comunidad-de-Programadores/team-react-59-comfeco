import React from 'react';

import Icono from "../../nano/Icono";
import A from "../../nano/A";
import $ from "../../nano/$";

const Nav = () => {

    const activeNav = (n) => {
        if (n === 1) {
          $("nav1").classList.add("active");
          $("nav2").classList.remove("active");
          $("nav3").classList.remove("active");
          $("nav4").classList.remove("active");
        }
    
        if (n === 2) {
          $("nav2").classList.add("active");
          $("nav1").classList.remove("active");
          $("nav3").classList.remove("active");
          $("nav4").classList.remove("active");
        }
    
        if (n === 3) {
          $("nav3").classList.add("active");
          $("nav1").classList.remove("active");
          $("nav2").classList.remove("active");
          $("nav4").classList.remove("active");
        }
    
        if (n === 4) {
          $("nav4").classList.add("active");
          $("nav1").classList.remove("active");
          $("nav2").classList.remove("active");
          $("nav3").classList.remove("active");
        }
      };
    return ( <>
        <div className="headerNav">
          <nav>
            <ul>
              <li
                onClick={() => {
                  activeNav(1);
                }}
                id="nav1"
                className="active"
              >
                <A href="#">
                  <Icono css="icon-account_circle" />
                  Perfil
                </A>
              </li>
              <li
                onClick={() => {
                  activeNav(2);
                }}
                id="nav2"
              >
                <A href="#">
                  <Icono css="icon-account_circle" />
                  Insignias
                </A>
              </li>
              <li
                onClick={() => {
                  activeNav(3);
                }}
                id="nav3"
              >
                <A href="#">
                  <Icono css="icon-account_circle" />
                  Grupos
                </A>
              </li>
              <li
                onClick={() => {
                  activeNav(4);
                }}
                id="nav4"
              >
                <A href="#">
                  <Icono css="icon-account_circle" />
                  Eventos
                </A>
              </li>
            </ul>
          </nav>
        </div>
      </> );
}
 
export default Nav;