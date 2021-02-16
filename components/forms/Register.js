import React from "react";
import Icono from "../nano/Icono";
import A from "../nano/A";
import Buttons from "./Buttons";

const Register = () => {
  return (
    <div /*  */
      className="traseraDerecha formGroupSesion col-xs-5 "
      id="traseraDerecha"
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
            placeholder="Confirmar Contraseña"
            className="col-xs-11"
          />
        </div>

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
          Al registrarte, estas aceptando los <A>Términos y condiciones</A>, y
          la
          <A> Política de privacidad y protección de datos</A> de COMFECO.
        </p>
      </div>
    </div>
  );
};

export default Register;
