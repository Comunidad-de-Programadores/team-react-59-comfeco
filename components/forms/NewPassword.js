import React, { useState } from "react";
import Link from "next/link";
import $ from "../nano/$";

const NewPassword = (props) => {
  const [data, setData] = useState({ error: null, message: "", done: null });

  const focus = () => {
    const active = document.activeElement.id;

    const addClass = (css) => {
      return document.activeElement.parentNode.classList.add(`${css}`);
    };

    const removeClass = (id, css) => {
      return $(`${id}`).parentNode.classList.remove(`${css}`);
    };

    if (active === "resectPassword") {
      addClass("activeFocus");
    } else {
      removeClass("resectPassword", "activeFocus");
    }

    if (active === "resectPasswordConfirm") {
      addClass("activeFocus");
    } else {
      removeClass("resectPasswordConfirm", "activeFocus");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const padre = e.target.parentNode;

    if (
      e.target.resectPassword.value !== e.target.resectPasswordConfirm.value
    ) {
      padre.style.border = "red 1px solid";
      setData({
        error: true,
        message: "Las contraseñas no concuerdan",
      });
      return;
    }

    const req = await fetch("/api/change_password", {
      method: "POST",
      headers: new Headers([["Content-type", "application/json"]]),
      body: JSON.stringify({
        password: e.target.resectPassword.value,
        token: props.token,
      }),
    });

    const res = await req.json();
    if (res.error) {
      padre.style.border = "green 1px solid";
      setData({
        done: true,
        error: false,
        message: "token invalidado",
      });
      return;
    }

    padre.style.border = "green 1px solid";
    setData({
      done: true,
      error: false,
      message: "Exito",
    });
  };

  return (
    <div
      className="newPassword formGroupSesion col-xs-5"
      id="newPassword"
      onClick={() => {
        focus();
      }}
    >
      <form className="row" onSubmit={handleSubmit}>
        <div className="row col-xs-12 containerInput">
          <label htmlFor="resectPassword" className="icoBackground col-xs-1">
            <span className="ico icon-https"></span>
          </label>
          <input
            type="password"
            name="resectPassword"
            id="resectPassword"
            placeholder="Contraseña"
            className="col-xs-11"
          />
        </div>
        <br />

        <div className="row col-xs-12 containerInput">
          <label
            htmlFor="resectPasswordConfirm"
            className="icoBackground col-xs-1"
          >
            <span className="ico icon-enhanced_encryption"></span>
          </label>
          <input
            type="password"
            name="resectPasswordConfirm"
            id="resectPasswordConfirm"
            placeholder="Confirmar contraseña"
            className="col-xs-11"
          />
        </div>
        <br />
        {data.done && (
          <p
            style={{
              color: "green",
              margin: "auto",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            {data.message} dirigete al{" "}
            <Link href="/">
              <a style={{ color: "white", textDecoration: "none" }}>Home</a>
            </Link>{" "}
            a loguearte
          </p>
        )}
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
            name="newPasswordSubmit"
            id="newPasswordSubmit"
            type="submit"
            value="send"
          >
            Acceder
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPassword;
