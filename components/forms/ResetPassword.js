import React, { useState } from "react";

import A from "../nano/A";
import $ from "../nano/$";

const resetPassword = () => {
  const [data, setData] = useState({ error: null, message: "", done: null });

  const voltearIniciar = () => {
    const tarjeta = $("containerRegisterLogin");

    $("traseraDerecha").style.display = "none";
    if (
      tarjeta.classList.contains("activeRight") ||
      tarjeta.classList.contains("activeLeft")
    ) {
      tarjeta.classList.remove("activeRight");
      if (tarjeta.classList.contains("activeLeft")) {
      }
      tarjeta.classList.remove("activeLeft");
      $("buttonBack").classList.remove("active");
    }

    $("front").classList.add("tarjetaFocus");

    setTimeout(() => {
      $("front").classList.remove("tarjetaFocus");
    }, 1500);
  };

  const focus = () => {
    const active = document.activeElement.id;

    const addClass = (css) => {
      return document.activeElement.parentNode.classList.add(`${css}`);
    };

    const removeClass = (id, css) => {
      return $(`${id}`).parentNode.classList.remove(`${css}`);
    };

    if (active === "resetPassword") {
      addClass("activeFocus");
    } else {
      removeClass("resetPassword", "activeFocus");
    }

    if (active === "traseraIzq") {
      removeClass("resetPassword", "activeFocus");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const padre = e.target.parentNode;

    const req = await fetch("/api/change_password_req", {
      method: "POST",
      headers: new Headers([["Content-type", "application/json"]]),
      body: JSON.stringify({
        email: e.target.resetPassword.value,
        uri: location.origin,
      }),
    });

    const res = await req.json();

    if (res.error) {
      padre.style.border = "red 1px solid";
      setData({
        done: false,
        error: true,
        message: res.error,
      });
      return;
    }

    padre.style.border = "green 1px solid";
    setData({
      done: true,
      error: false,
      message: "Email enviado",
    });
  };

  return (
    <>
      <div
        className="backLeft formGroupSesion resetContainer"
        id="traseraIzq"
        onClick={() => {
          focus();
        }}
      >
        <div className="title row">
          <div className="buttonSesion buttonBack">
            <button
              className="iniciarSesion"
              onClick={() => {
                voltearIniciar();
              }}
            >
              <A href="#iniciarSesion" css="animationCircle" id="buttonBack">
                <span className="ico icon-reply"></span>
              </A>
            </button>
          </div>
          <p className="col-xs-12">Restablecer la contraseña</p>
          <hr className="titleHr" />
        </div>
        <form onSubmit={handleSubmit}>
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
              onClick={() => {
                focus();
              }}
            />
            <button type="submit" className="col-xs-2 submitEmail">
              <span className="ico icon-send"></span>
            </button>
          </div>
          <p>
            Ingrese el correo con el que se registro, Y se Te enviará un enlace
            con el que podrá restablecer su contraseña.
          </p>

          {data.done && (
            <p
              style={{
                color: "green",
                margin: "auto",
                textAlign: "center",
              }}
            >
              {data.message}
            </p>
          )}
          {data.error && (
            <p
              style={{
                color: "red",
                margin: "auto",
                textAlign: "center",
              }}
            >
              {data.message}
            </p>
          )}
          <br />
        </form>
      </div>
    </>
  );
};
export default resetPassword;
