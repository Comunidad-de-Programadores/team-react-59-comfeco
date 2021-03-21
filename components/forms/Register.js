import React, { useState } from "react";
import A from "../nano/A";
import Buttons from "./Buttons";
import Router from "next/router";
import $ from "../nano/$";
import RedesLogin from "./RedesLogin";

const Register = () => {
  const [data, setData] = useState({ error: null, message: "" });

  const focus = () => {
    const focusClass = "activefocus";
    const activo = document.activeElement.id;

    const addClass = () => {
      return document.activeElement.parentNode.classList.add(`${focusClass}`);
    };

    const removeClass = (id) => {
      return $(`${id}`).parentNode.classList.remove(`${focusClass}`);
    };

    /*  if (activo === "registerNombre") {
      addClass("activeFocus");
    } else {
      removeClass("registerNombre", "activeFocus");
    } */

    if (activo === "registerUserName") {
      addClass();
    } else {
      removeClass("registerUserName");
    }

    if (activo === "registerCorreo") {
      addClass();
    } else {
      removeClass("registerCorreo");
    }

    if (activo === "registerPassword") {
      addClass();
    } else {
      removeClass("registerPassword");
    }

    if (activo === "registerPasswordConfirm") {
      addClass();
    } else {
      removeClass("registerPasswordConfirm");
    }

    if (activo === "front") {
      /* removeClass("registerNombre"); */
      removeClass("registerUserName");
      removeClass("registerCorreo");
      removeClass("registerPassword");
      removeClass("registerPasswordConfirm");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const padre = e.target.parentNode;
    e.target.elements[8].innerHTML = "...";

    if (
      e.target.registerPassword.value !== e.target.registerPasswordConfirm.value
    ) {
      e.target.elements[8].innerHTML = "Crear cuenta";
      padre.style.border = "red 1px solid";
      setData({
        error: true,
        message: "Las contraseñas no concuerdan",
      });
      return;
    }

    const req = await fetch("/api/register", {
      method: "POST",
      headers: new Headers([["Content-type", "application/json"]]),
      body: JSON.stringify({
        email: e.target.registerCorreo.value,
        nickname: e.target.registerUserName.value,
        password: e.target.registerPassword.value,
      }),
    });

    const res = await req.json();
    if (res.error) {
      padre.style.border = "red 1px solid";
      e.target.elements[8].innerHTML = "Crear cuenta";
      setData({
        error: true,
        message: res.error,
      });
      return;
    }
    localStorage.setItem("token", `Bearer ${res.token}`);
    Router.reload();
  };

  return (
    <div /*  */
      className="backRight formGroupSesion col-xs-5 "
      id="traseraDerecha"
      onClick={() => {
        focus();
      }}
    >
      <Buttons />
      <form onSubmit={handleSubmit} className="row">
        {/* No se nesecita*/}
        {/* <div className="row col-xs-12 containerInput">
          <label htmlFor="registerNombre" className="icoBackground col-xs-1">
            <span className="ico icon-user"></span>
          </label>
          <input
            type="text"
            placeholder="Nombre Completo"
            maxLength="24"
            id="registerNombre"
            name="registerNombre"
            className="col-xs-11"
            onClick={() => {
              focus();
            }}
          />
        </div> */}
        <br />
        <div className="row col-xs-12 containerInput">
          <label htmlFor="registerUserName" className="icoBackground col-xs-1">
            <span className="ico icon-person_add_alt_1"></span>
          </label>
          <input
            type="text"
            placeholder="Nombre de Usuario"
            maxLength="15"
            id="registerUserName"
            name="registerUserName"
            className="col-xs-11"
            onClick={() => {
              focus();
            }}
          />
        </div>
        <br />
        <div className="row col-xs-12 containerInput">
          <label htmlFor="registerCorreo" className="icoBackground col-xs-1">
            <span className="ico icon-mail-envelope-closed"></span>
          </label>
          <input
            type="email"
            placeholder="Correo"
            name="registerCorreo"
            id="registerCorreo"
            className="col-xs-11"
          />
        </div>
        <br />
        <div className="row col-xs-12 containerInput">
          <label htmlFor="registerPassword" className="icoBackground col-xs-1">
            <span className="ico icon-https"></span>
          </label>
          <input
            type="password"
            name="registerPassword"
            id="registerPassword"
            placeholder="Contraseña"
            className="col-xs-11"
          />
        </div>
        <br />
        <div className="row col-xs-12 containerInput">
          <label
            htmlFor="registerPasswordConfirm"
            className="icoBackground col-xs-1"
          >
            <span className="ico icon-enhanced_encryption"></span>
          </label>
          <input
            type="password"
            name="registerPasswordConfirm"
            id="registerPasswordConfirm"
            placeholder="Confirmar contraseña"
            className="col-xs-11"
          />
        </div>

        {data.error && (
          <p
            style={{
              color: "red",
              margin: "auto",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            {data.message}
          </p>
        )}
        <RedesLogin />

        <div className="containerRegister">
          <button
            className="registerButtom submit"
            type="submit"
            value="Enviar"
            name="registerButtom"
            id="registerButtom"
          >
            Crear cuenta
          </button>
        </div>
      </form>
      <div className="legal">
        <p>
          Al registrarte, estas aceptando los{" "}
          <A href={"/terminos-y-condiciones"}>Términos y condiciones</A>, y la
          <A href="/politica-de-privacidad-y-protección-de-datos">
            {" "}
            Política de privacidad y protección de datos
          </A>{" "}
          de COMFECO.
        </p>
      </div>
    </div>
  );
};

export default Register;
