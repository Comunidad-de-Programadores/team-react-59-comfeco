import React from "react";
import Register from "../../components/forms/Register";
import Login from "../../components/forms/Login";
import ResetPassword from "../../components/forms/ResetPassword";

const HomeLogin = () => {
  return (
    <>
      <div className="containerText col-xs-12 col-md-5 ">

        


        <div className="title">
          <h4>Sobre el evento</h4>
          <hr />
        </div>

        

        <div className="containerP row">
          <span className="ico icon-check-circle col-xs-2 col-md-1"></span>
          <p className="col-xs-10 col-md-11">
            Los grupos tienen que ser conformados por 5 personas.
          </p>
        </div>
        <div className="containerP row">
          <span className="ico icon-check-circle col-xs-2 col-md-1"></span>
          <p className="col-xs-10 col-md-11">
            Si estas en el Team Angular no podrás presentar el proyecto en un
            framework distinto, así para cada uno de los casos.
          </p>
        </div>
        <div className="containerP row">
          <span className="ico icon-check-circle col-xs-2 col-md-1"></span>
          <p className="col-xs-10 col-md-11">
            Se debe entregar el proyecto en la fecha indicada, no se dará tiempo
            extra, por eso la fecha se les dirá con mucha anticipación.
          </p>
        </div>
        <div className="containerP row">
          <span className="ico icon-check-circle col-xs-2 col-md-1"></span>
          <p className="col-xs-10 col-md-11">
            Se debe seguir las directrices para hacer el proyecto, y se debe de
            cumplir con cada uno de los requisitos para que puedan ser
            aprobados.
          </p>
        </div>
        <div className="containerP row">
          <span className="ico icon-check-circle col-xs-2 col-md-1"></span>
          <p className="col-xs-10 col-md-11">
            Los lideres de cada team no realizaran el proyecto por ti, solo
            estarán como guía para dar algunos talleres y resolver dudas para
            poder completar con éxito el proyecto.
          </p>
        </div>
        <div className="containerP row pRelleno">
          <span className="col-xs-1"></span>
          <p className="col-xs-10 col-md-11"></p>
        </div>
      </div>

      <div className="containerForm  " id="containerRegisterLogin">
        <ResetPassword />
        <Login />
        <Register />
      </div>
    </>
  );
};

export default HomeLogin;
