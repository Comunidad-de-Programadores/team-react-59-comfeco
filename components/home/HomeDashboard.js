import React from "react";
import Communities from "../card/CardCommunity/Communities";
import Workshops from "../card/CardWorkshop/Workshops";
import Counter from "../deadline/counter";
import Sleader from "../sliders/Sleader";
import CorouselSponsors from "../sliders/CorouselSponsors";

const HomeDashboard = () => {
  const timer = <Counter deadline={1614560400}></Counter>
  return (
    <>
    
      <div className="content row col-xs-12" id="content">
        
        <div className="panelColaborador">
          <div className="title">
            <h4>Lideres de equipo 2021</h4>
          </div>
          <Sleader />
        </div>
        <div className="containerPaneles row col-xs-12 around-xs">
          <div className="panelCom">{<Communities />}</div>

          <div className="panelTimer col-xs-5 timeLg">
          {timer}
          </div>
          <div className="panelTaller">
            <Workshops />
          </div>
        </div>
        <div className="timeXs">
        <div className="panelTimer col-xs-9 ">
            {timer}
          </div>
        </div>

        <div className="panelSponsor">
          {<CorouselSponsors />}
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;
