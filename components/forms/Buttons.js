import React from "react";
import A from "../nano/A";
import $ from "../nano/$";

const Buttons = () => {
  const voltearIniciar = () => {
    const tarjeta = $("containerRegisterLogin");
    $("traseraDerecha").style.display = "block";

    if (
      tarjeta.classList.contains("activeRight") ||
      tarjeta.classList.contains("activeLeft")
    ) {
      tarjeta.classList.remove("activeRight");
      if (tarjeta.classList.contains("activeLeft")) {
      }
      tarjeta.classList.remove("activeLeft");
    }

    $("front").classList.add("tarjetaFocus");

    setTimeout(() => {
      if ($("front") !== null) {
        $("front").classList.remove("tarjetaFocus");
      }
    }, 1500);
  };

  const voltearRegistro = () => {
    const tarjetas = $("containerRegisterLogin");
    if (!tarjetas.classList.contains("activeRight")) {
      tarjetas.classList.add("activeRight");
    }

    if (tarjetas.classList.contains("activeLeft")) {
      tarjetas.classList.remove("activeLeft");
    }
    $("traseraDerecha").style.display = "block";

    $("traseraDerecha").classList.add("tarjetaFocus");

    setTimeout(() => {
      if ($("traseraDerecha") !== null) {
        $("traseraDerecha").classList.remove("tarjetaFocus");
      }
    }, 1500);
  };

  return (
    <>
      <div className="buttonSesion">
        <button
          className="iniciarSesion"
          onClick={() => {
            voltearIniciar();
          }}
          id="loginTitle"
        >
          <A href="#iniciarSesion">Iniciar sesión</A>
        </button>
        <span>|</span>
        <button
          className="registrarse"
          onClick={() => {
            voltearRegistro();
          }}
          id="registerTitle"
        >
          <A href="#registrarse">Regístrarse</A>
        </button>
      </div>
    </>
  );
};

export default Buttons;
