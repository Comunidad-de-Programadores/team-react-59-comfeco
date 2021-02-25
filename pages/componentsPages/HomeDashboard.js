import React from "react";
import Communities from '../../components/card/CardCommunity/Communities';
import Workshops from '../../components/card/CardWorkshop/Workshops';
import Counter from "../../components/deadline/counter";

const HomeDashboard = () => {
  return (
    <main className="dashboard row col-xs-12">
      <div id="content">
        <div className="panel-comunidad">
          <Communities />
        </div>
        <div className="panel-cabecera">
          <h1>Bienvenidos a Community Fest and Code</h1>
          <h3>¡Conoce gente, aprende y gana!</h3>
          <div>
            <span>La próxima edición regresa en el 2022, en la cual se planea involucrar a todos los programadores independientmente del area de conocimiento que se encuentre, todo con un mismo proposito, aprender en comunidad.</span>
          </div>
        </div>
        <div className="panel-colaborador">Colaboradores</div>
        <div className="panel-sponsor">Sponsors</div>
        <div className="panel-timer">
          <Counter deadline={1614560400}></Counter>
        </div>
        <div className="panel-taller">
          < Workshops />  
        </div>
      </div>
    </main>
  );
};

export default HomeDashboard;
