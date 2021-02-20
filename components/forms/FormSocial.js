import React, { useEffect, useState } from "react";
import $ from "../nano/$";
import Router from "next/router";

const FormSocial = (props) => {
  const [data, setData] = useState({ error: null, message: "", done: null });
  const [nickname, setNickname] = useState("");

  const focus = () => {
    const active = document.activeElement.id;

    const addClass = (css) => {
      return document.activeElement.parentNode.classList.add(`${css}`);
    };

    const removeClass = (id, css) => {
      if (!$(`${id}`)) {
        return;
      }
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const padre = e.target.parentNode;

    console.log(e.target.nickname.value);

    if ((e.target.nickname.value = "")) {
      padre.style.border = "green 1px solid";
      setData({
        done: true,
        error: false,
        message: "Escribe el nickname",
      });
      return;
    }

    fetch("/api/social/register", {
      method: "POST",
      headers: new Headers([["Content-type", "application/json"]]),
      body: JSON.stringify({
        nickname,
        token: props.token,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.error) {
          padre.style.border = "red 1px solid";
          setData({
            done: false,
            error: true,
            message: data.error,
          });
          Router.push("/");
          return;
        }
        localStorage.setItem("token", data.token);
        Router.push("/");
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
        <h4 style={{ marginBottom: "10px", textAlign: "center" }}>
          Pon tu nombre de usuario para completar tu registro
        </h4>
        <div className="row col-xs-12 containerInput">
          <label htmlFor="nickname" className="icoBackground col-xs-1">
            <span className="ico icon-https"></span>
          </label>
          <input
            type="text"
            name="nickname"
            id="nickname"
            onChange={(e) => {
              setNickname(e.currentTarget.value);
            }}
            placeholder="Nombre de ususario"
            className="col-xs-11"
          />
        </div>
        <br />
        {data.done && ""}
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

export default FormSocial;
