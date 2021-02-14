import React from "react";
import Icono from "../nano/Icono";
import A from "../nano/A";

const Register = () => {
  return (
    <div className="col-xs-5 form-group-register trasera">
      <div className="botonesDeSesion">
        <button className="iniciarSesion">
          <A href="#iniciarSesion">Iniciar sesión</A>
        </button>
        <span>|</span>
        <button className="registrarse">
          <A href="#registrarse">Regístrarse</A>
        </button>
      </div>
      <form action="" className="row">
        <div className="row col-xs-12 containerInput">
          <span className="icoBackground col-xs-2">
            <span className="ico icon-user"></span>
          </span>
          <input
            type="text"
            placeholder="Nombre de Usuario"
            maxlength="15"
            id="registerUserName"
            name="registerUserName"
            className="col-xs-10"
          />
        </div>
        <br />
        <div className="row col-xs-12 containerInput">
          <span className="icoBackground col-xs-2">
            <span className="ico icon-user"></span>
          </span>
          <input
            type="text"
            placeholder="Nombre Completo"
            maxlength="24"
            id="registerNombre"
            name="registerNombre"
            className="col-xs-10"
          />
        </div>
        <br />

        <div className="row col-xs-12 containerInput">
          <span className="icoBackground col-xs-2">
            <span className="ico icon-mail-envelope-closed"></span>
          </span>
          <input
            type="email"
            placeholder="Correo"
            name="registerCorreo"
            id="registerCorreo"
            className="col-xs-10"
          />
        </div>
        <br />
        <div className="row col-xs-12 containerInput">
          <span className="icoBackground col-xs-2">
            <span className="ico icon-lock1"></span>
          </span>
          <input
            type="password"
            name="registerPassword"
            id="registerPassword"
            placeholder="Contraseña"
            className="col-xs-10"
          />
        </div>
        <br />
        <div className="row col-xs-12 containerInput">
          <span className="icoBackground col-xs-2">
            <span className="ico icon-lock"></span>
          </span>
          <input
            type="password"
            name="registerPasswordConfirm"
            id="registerPasswordConfirm"
            placeholder="Confirmar Contraseña"
            className="col-xs-10"
          />
        </div>

        {/* <hr /> */}
        <div className="containerRegistrarse">
          <button
            className="registerButtom"
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
          Al registrarte, estas aceptando los <A>Términos y condiciones</A>, y la 
          <A> Política de privacidad y protección de datos</A> de COMFECO.
        </p>
      </div>
    </div>
  );
};

export default Register;
