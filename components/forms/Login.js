import React, { useState } from "react";
import Buttons from "./Buttons";
import Router from "next/router";
import Icono from "../nano/Icono";
import RedesLogin from "./RedesLogin";
import $ from "../nano/$";

const Login = () => {
  const [data, setData] = useState({ error: null, message: "" });

  const voltearRecuperar = () => {
    const tarjetas = $("containerRegisterLogin");

    if (!tarjetas.classList.contains("activeLeft")) {
      tarjetas.classList.add("activeLeft");
      $("buttonBack").classList.add("active");
    }

    $("traseraIzq").classList.add("tarjetaFocus");

    setTimeout(() => {
      $("traseraIzq").classList.remove("tarjetaFocus");
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

    if (active === "loginCorreo") {
      addClass("activeFocus");
    } else {
      removeClass("loginCorreo", "activeFocus");
    }

    if (active === "loginPassword") {
      addClass("activeFocus");
    } else {
      removeClass("loginPassword", "activeFocus");
    }
  };

  const remerberme = () => {
    $("checkRemember").classList.toggle("active");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const padre = e.target.parentNode;
    e.target.elements[6].innerText = "...";

    const req = await fetch("/api/login", {
      method: "POST",
      headers: new Headers([["Content-type", "application/json"]]),
      body: JSON.stringify({
        email: e.target.loginCorreo.value,
        password: e.target.loginPassword.value,
      }),
    });

    const res = await req.json();
    if (res.error) {
      padre.style.border = "red 1px solid";
      e.target.elements[6].innerText = "Acceder";
      setData({
        error: true,
        message: res.error,
      });
      return;
    }

    if ($("checkRemember").classList.contains("active")) {
      localStorage.setItem("token", `Bearer ${res.token}`);
      Router.reload();
      return;
    }

    sessionStorage.setItem("token", `Bearer ${res.token}`);
    Router.reload();
  };

  return (
    <div
      className="front formGroupSesion col-xs-5"
      id="front"
      onClick={() => {
        focus();
      }}
    >
      <Buttons />
      <form className="row" onSubmit={handleSubmit}>
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
            onClick={() => {
              focus();
            }}
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
            onClick={() => {
              focus();
            }}
          />
        </div>
        <br />

        <RedesLogin />

        <div
          className="row col-xs-12 checkBoxContainer"
          onClick={() => {
            remerberme();
          }}
        >
          <Icono css={"icon-check-circle"} id="checkRemember" />
          <label htmlFor="checkRemember" id="checkRememberLabel">
            <p>Mantener sesion</p>
          </label>
        </div>
        <br />
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
        <br />
        <div className="buttonContainer col-xs-12">
          <button
            className="login submit"
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
            type="button"
            className="registrarse link"
            onClick={() => {
              voltearRecuperar();
            }}
            style={{ cursor: "pointer" }}
          >
            <a>¿Olvidaste tu contraseña?</a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
