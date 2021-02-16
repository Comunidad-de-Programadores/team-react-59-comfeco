import React from "react";
import A from "../nano/A";
import $ from "../nano/$";

const Buttons = () => {
  const voltearIniciar = () => {
    const tarjeta = $("containerRegisterLogin");
    $("traseraDerecha").style.display = "block";

    if (
      tarjeta.classList.contains("activeDerecha") ||
      tarjeta.classList.contains("activeIzq")
    ) {
      tarjeta.classList.remove("activeDerecha");
      if (tarjeta.classList.contains("activeIzq")) {
      }
      tarjeta.classList.remove("activeIzq");

    }
  };

  const voltearRegistro = () => {
    const tarjetas = $("containerRegisterLogin");
    if (!tarjetas.classList.contains("activeDerecha")) {
      tarjetas.classList.add("activeDerecha");
    }

    if (tarjetas.classList.contains("activeIzq")) {
      tarjetas.classList.remove("activeIzq");
    }
    $("traseraDerecha").style.display = "block";
  
  };

  return (
    <>
      <div className="botonesDeSesion">
        <button
          className="iniciarSesion"
          onClick={() => {
            voltearIniciar();
          }}
        >
          <A href="#iniciarSesion">Iniciar sesión</A>
        </button>
        <span>|</span>
        <button
          className="registrarse"
          onClick={() => {
            voltearRegistro();
          }}
        >
          <A href="#registrarse">Regístrarse</A>
        </button>
      </div>
    </>
  );
};

export default Buttons;
