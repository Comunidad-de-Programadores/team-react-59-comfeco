import React from "react";

const Register = () => {
  return (
    <div className="form-group-register">
      <form action="" className="row">
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

        <hr />
        <button
          type="submit"
          value="Enviar"
          name="registerButtom"
          id="registerButtom"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;
