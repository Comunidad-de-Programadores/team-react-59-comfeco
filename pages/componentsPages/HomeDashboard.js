import React from "react";
import Communities from "../../components/card/CardCommunity/Communities";
import Workshops from "../../components/card/CardWorkshop/Workshops";
import Counter from "../../components/deadline/counter";
import Sleader from "../../components/sliders/Sleader";
import CorouselSponsors from "../../components/sliders/CorouselSponsors";

const HomeDashboard = () => {
  return (
    <div id="containerDashboard">
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
        <div className="panelColaborador">
          <div className="title">
            <h4>Lideres de equipo 2021</h4>
          </div>
          <Sleader />
        </div>
        <div className="containerPaneles row col-xs-12 around-xs">
          <div className="panelCom">{<Communities />}</div>

          <div className="panelTimer col-xs-5">
            <Counter deadline={1614560400}></Counter>
          </div>
          <div className="panelTaller">
            <Workshops />
          </div>
        </div>

        <div className="panelSponsor">
          {<CorouselSponsors />}
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
