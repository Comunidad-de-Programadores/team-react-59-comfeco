import React from "react";
import HomeDashboardLogin from "./HomeDashboardLogin";
import Register from "../../components/forms/Register";
import Login from "../../components/forms/Login";
import ResetPassword from "../../components/forms/ResetPassword";

const HomeLogin = () => {
  return (
    <>
      <main>
        <div className="backgroundHome"></div>
        <div className="backgroundLigth"></div>
        <div className="containerSesion row between-md center-xs">
          <div className="welcome row col-xs-12 col-sm-6  col-lg-4 center-xs">
            <h1>Bienvenidos comfeco ¡Community Fest and Code!</h1>
            <h3>¡Conoce gente, aprende y gana!</h3>
            <div className="text">
              <p>
                La próxima edición regresa en el 2022, en la cual se planea
                involucrar a todos los programadores independientmente del area
                de conocimiento que se encuentre, todo con un mismo proposito,
                aprender en comunidad.
              </p>
            </div>
          </div>
          <div className="containerForm  " id="containerRegisterLogin">
            <ResetPassword />
            <Login />
            <Register />
          </div>
        </div>
        <HomeDashboardLogin />
      </main>
     
    </>
  );
};

export default HomeLogin;
