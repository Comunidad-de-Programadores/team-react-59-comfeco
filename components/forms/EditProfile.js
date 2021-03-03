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
        <div className="containerPhoto containerCircle">
          <div className="containerFile" type="file">
            <img className="containerCircle"></img>
            <span className="ico icon-camera"></span>
          </div>
        </div>
        <div className="row col-xs-12">
          <div className="containerBox block col-xs-6">
            <label htmlFor="nick" className="textForm">
              <span className="ico icon-user"></span>
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
          <div className="containerBox block col-xs-6">
            <label htmlFor="email" className="textForm">
              <span className="ico icon-mail-envelope-closed"></span>
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
          <div className="containerBox block col-xs-4">
            <label htmlFor="gender" className="textForm">
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
          <div className="containerBox block col-xs-4">
            <label htmlFor="birthdate" className="textForm">
              Fecha de Nacimiento
            </label>
            <div className="containerInputIcon">
              <input
              type="text"
              name="birthdate"
              id="birthdate"
              placeholder=""
              className=""
              />
              <span className="ico icon-calendar"></span>
            </div>
          </div>
          <div className="containerBox block col-xs-4">
            <label htmlFor="country" className="textForm">
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
          <div className="containerBox block col-xs-6">
            <label htmlFor="password" className="textForm">
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
          <div className="containerBox block col-xs-6">
            <label htmlFor="password2" className="textForm">
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
          <div className="containerBox inline col-xs-6">
            <label htmlFor="facebook" className="textForm">
              <span className="ico icon-facebook1"></span>
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
          <div className="containerBox inline col-xs-6">
            <label htmlFor="github" className="textForm">
              <span className="ico icon-github"></span>
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
          <div className="containerBox inline col-xs-6">
            <label htmlFor="linkedin" className="textForm">
              <span className="ico icon-linkedin-with-circle"></span>
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
          <div className="containerBox inline col-xs-6">
            <label htmlFor="twitter" className="textForm">
              <span className="ico icon-twitter-with-circle"></span>
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
        <div className="containerBox block row col-xs-12">
          <label htmlFor="biography" className="textForm">
                Biografía
          </label>
          <textarea name="biography"
                    rows="10" 
                    cols="50"
          ></textarea>
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