import React from "react";
import $ from "../nano/$";

const NewPassword = () => {
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
  return (
    <div
      className="newPassword formGroupSesion col-xs-5"
      id="newPassword"
      onClick={() => {
        focus();
      }}
    >
      <form className="row" action="">
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
