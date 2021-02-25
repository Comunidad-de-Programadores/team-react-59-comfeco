import React from "react";
import Communities from "../../components/card/CardCommunity/Communities";
import Workshops from "../../components/card/CardWorkshop/Workshops";
import Counter from "../../components/deadline/counter";
import Sleader from "../../components/sliders/Sleader";

const HomeDashboard = () => {
  return (
    <>
      <div className="content row col-xs-12" id="content">
        <div className="panelCabecera row col-xs-12 center-xs">
          <h1>Bienvenidos a Community Fest and Code</h1>
          <h3>¡Conoce gente, aprende y gana!</h3>
          <div className="text">
            <p>
              La próxima edición regresa en el 2022, en la cual se planea
              involucrar a todos los programadores independientmente del area de
              conocimiento que se encuentre, todo con un mismo proposito,
              aprender en comunidad.
            </p>
          </div>
        </div>
      </div>
      <div className="panelColaborador">
      <Sleader />
      </div>

      <div className="content" id="content">
        {/* <div className="panelCabecera">
          <h1>Bienvenidos a Community Fest and Code</h1>
          <h3>¡Conoce gente, aprende y gana!</h3>
          <div>
            <span>
              La próxima edición regresa en el 2022, en la cual se planea
              involucrar a todos los programadores independientmente del area de
              conocimiento que se encuentre, todo con un mismo proposito,
              aprender en comunidad.
            </span>
          </div>
        </div> */}
        <div className="panelColaborador"></div>
        <div className="panelSponsor">Sponsors</div>
        <div className="panelTimer">
          <Counter deadline={1614560400}></Counter>
        </div>
        <div className="containerPaneles">
          <div className="panelTaller">{/*  <Workshops /> */}</div>
          <div className="panelCom">
            <Communities />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;
