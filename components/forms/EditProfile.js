import { PromiseProvider } from "mongoose";
import React, { useState } from "react";
import Link from "next/link";
import $ from "../nano/$";

const EditProfile = () => {

  return (
    <div
      className="editProfile formGroupSesion col-xs-12"
      id="editProfile"
    >
      <form className="row">
        <h4 className="title">Editar Perfil</h4>
        <div className="container-photo container-circle">
          <div className="container-file" type="file">
            <img className="container-circle"></img>
            <span className="ico icon-https"></span>
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="container-box block col-xs-6">
            <label htmlFor="nick" className="text-form">
              <span className="ico icon-https"></span>
              Nick
            </label>
            <input
              type="text"
              name="nick"
              id="nick"
              placeholder="Nick del usuario"
              className=""
            />
          </div>
          <div className="container-box block col-xs-6">
            <label htmlFor="email" className="text-form">
              <span className="ico icon-https"></span>
              Correo
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="ejemplo@gmail.com"
              className=""
            />
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="container-box block col-xs-4">
            <label htmlFor="gender" className="text-form">
              <span className="ico icon-https"></span>
              Género
            </label>
            <input
              type="text"
              name="gender"
              id="gender"
              placeholder=""
              className=""
            />
          </div>
          <div className="container-box block col-xs-4">
            <label htmlFor="birthdate" className="text-form">
              <span className="ico icon-https"></span>
              Fecha de Nacimiento
            </label>
            <input
              type="text"
              name="birthdate"
              id="birthdate"
              placeholder=""
              className=""
            />
          </div>
          <div className="container-box block col-xs-4">
            <label htmlFor="country" className="text-form">
              <span className="ico icon-https"></span>
              País
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder=""
              className=""
            />
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="container-box block col-xs-6">
            <label htmlFor="password" className="text-form">
              <span className="ico icon-https"></span>
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              className=""
            />
          </div>
          <div className="container-box block col-xs-6">
            <label htmlFor="password2" className="text-form">
              <span className="ico icon-https"></span>
              Repetir contraseña
            </label>
            <input
              type="password"
              name="password2"
              id="password2"
              placeholder=""
              className=""
            />
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="container-box inline col-xs-6">
            <label htmlFor="facebook" className="text-form">
              <span className="ico icon-https"></span>
              facebook.com/
            </label>
            <input
              type="text"
              name="facebook"
              id="facebook"
              placeholder=""
              className=""
            />
          </div>
          <div className="container-box inline col-xs-6">
            <label htmlFor="github" className="text-form">
              <span className="ico icon-https"></span>
              github.com/
            </label>
            <input
              type="text"
              name="github"
              id="github"
              placeholder=""
              className=""
            />
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="container-box inline col-xs-6">
            <label htmlFor="linkedin" className="text-form">
              <span className="ico icon-https"></span>
              linkedin.com/in/
            </label>
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              placeholder=""
              className=""
            />
          </div>
          <div className="container-box inline col-xs-6">
            <label htmlFor="twitter" className="text-form">
              <span className="ico icon-https"></span>
              twitter.com/
            </label>
            <input
              type="text"
              name="twitter"
              id="twitter"
              placeholder=""
              className=""
            />
          </div>
        </div>
        <div className="container-box block row col-xs-12">
          <label htmlFor="twitter" className="text-form">
                Biografía
          </label>
          <textarea></textarea>
        </div>
        <div className="buttonContainer col-xs-12">
          <button
            className="edit submit"
            name="editProfileSubmit"
            id="editProfileSubmit"
            type="submit"
            value="send"
          >
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;