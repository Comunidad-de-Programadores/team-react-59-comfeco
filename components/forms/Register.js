import React from "react";
import Icono from "../nano/Icono";
import A from "../nano/A";
import Buttons from "./Buttons";
import $ from "../nano/$";

const Register = () => {
  const focus = () => {
    const activo = document.activeElement.id;

    const addClass = (css) => {
      return document.activeElement.parentNode.classList.add(`${css}`);
    };

    const removeClass = (id, css) => {
      return $(`${id}`).parentNode.classList.remove(`${css}`);
    };

    if (activo === "registerNombre") {
      addClass("activeFocus");
    } else {
      removeClass("registerNombre", "activeFocus");
    }

    if (activo === "registerUserName") {
      addClass("activeFocus");
    } else {
      removeClass("registerUserName", "activeFocus");
    }

    if (activo === "registerCorreo") {
      addClass("activeFocus");
    } else {
      removeClass("registerCorreo", "activeFocus");
    }

    if (activo === "registerPassword") {
      addClass("activeFocus");
    } else {
      removeClass("registerPassword", "activeFocus");
    }

    if (activo === "registerPasswordConfirm") {
      addClass("activeFocus");
    } else {
      removeClass("registerPasswordConfirm", "activeFocus");
    }

    if (activo === "front") {
      removeClass("registerNombre", "activeFocus");
      removeClass("registerUserName", "activeFocus");
      removeClass("registerCorreo", "activeFocus");
      removeClass("registerPassword", "activeFocus");
      removeClass("registerPasswordConfirm", "activeFocus");
    }
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
      <form action="" className="row">
        <div className="row col-xs-12 containerInput">
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
        </div>
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
          Al registrarte, estas aceptando los <A href={"/terminos-y-condiciones"}>Términos y condiciones</A>, y
          la
          <A> Política de privacidad y protección de datos</A> de COMFECO.
        </p>
      </div>
    </div>
  );
};

export default Register;
