import React from "react";

import A from "../nano/A";
import $ from "../nano/$";
import Image from "next/Image";

const resetPassword = () => {
  const voltearIniciar = () => {
    const tarjeta = $("containerRegisterLogin");

    $("traseraDerecha").style.display = "none";
    if (
      tarjeta.classList.contains("activeDerecha") ||
      tarjeta.classList.contains("activeIzq")
    ) {
      tarjeta.classList.remove("activeDerecha");
      if (tarjeta.classList.contains("activeIzq")) {
      }
      tarjeta.classList.remove("activeIzq");
      $("buttonBack").classList.remove("active")
    }
  };

  return (
    <>
      <div
        className="traseraIzq formGroupSesion resetContainer"
        id="traseraIzq"
      >
        <div className="titulo row">
          <div className="botonesDeSesion buttonBack">
            <button
              className="iniciarSesion"
              onClick={() => {
                voltearIniciar();
              }}
            >
              <A href="#iniciarSesion" css="menu2" id="buttonBack">
                <span className="ico icon-reply"></span>
              </A>
            </button>
          </div>
          <p className="col-xs-12">Restablecer la contraseña</p>
          <hr className="titleHr" />
        </div>
        {/* <p>
          ngrese el correo con el que se registro, se le enviará un enlace con
          el que podrá restablecer su contraseña
        </p> */}
        {/* <p>Ingrese el correo con el que se registro</p> */}
        <form>
          <div className="row col-xs-12 containerInput">
            <label htmlFor="resetPassword" className="icoBackground col-xs-1">
              <span className="ico icon-mail-envelope-closed"></span>
            </label>
            <input
              name="resetPassword"
              id="resetPassword"
              className="col-xs-9"
              type="email"
              placeholder="Correo electronico"
            />
            <button type="submit" className="col-xs-2 submitEmail">
              <span className="ico icon-send"></span>
            </button>
          </div>
          <p>
            Ingrese el correo con el que se registro, Y se Te enviará un enlace
            con el que podrá restablecer su contraseña.
          </p>

          {/* <Image src="/Paleta.png" width={200} height={100} /> */}
        </form>
      </div>
    </>
  );
};

export default resetPassword;
