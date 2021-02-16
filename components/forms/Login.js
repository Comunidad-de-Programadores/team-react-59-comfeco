import React from "react";
import A from "../nano/A";
import Buttons from "./Buttons";
import $ from "../nano/$";

const Login = () => {
  const voltearRecuperar = () => {
    const tarjetas = $("containerRegisterLogin");
    if (!tarjetas.classList.contains("activeIzq")) {
      tarjetas.classList.add("activeIzq");
      $("buttonBack").classList.add("active")
    }
    
    
   
  };

 
  return (
    <div className="delantera formGroupSesion col-xs-5">
      <Buttons/>
      <form className="row" action="">
        <div className="row col-xs-12 containerInput">
          <label htmlFor="loginCorreo" className="icoBackground col-xs-1">
            <span className="ico icon-mail-envelope-closed"></span>
          </label>
          <input
            name="loginCorreo"
            id="loginCorreo"
            className="col-xs-11"
            type="email"
            placeholder="Correo electrónico"
            autoComplete="off"
          />
        </div>
        <br />
        <div className="row col-xs-12 containerInput">
          <label htmlFor="loginPassword" className="icoBackground col-xs-1">
            <span className="ico icon-lock"></span>
          </label>
          <input
            name="loginPassword"
            id="loginPassword"
            className="col-xs-11"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <br />
        <div className="buttonContainer col-xs-12">
          <button
            className="login"
            name="loginButton"
            id="loginButton"
            type="submit"
            value="send"
          >
            Acceder
          </button>
        </div>
        <br />
        <div className="forgotPasswordContainer col-xs-12">
          <button
            className="registrarse"
            onClick={() => {
              voltearRecuperar();
            }}
          >
            <A
              href="#recuperar-contrasena"
              css={"link"}
              id="recuperar-contrasena"
            >
              ¿Olvidaste tu contraseña?
            </A>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
