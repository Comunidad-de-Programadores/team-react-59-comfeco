import React from "react";
import Communities from '../card/CardCommunity/Communities';
const Dashboard = () => {
  return (
    <div id="content">
      <div className="panelCom">
        <Communities />
      </div>
      <div className="panelCabecera">
        <h1>Bienvenidos a Community Fest and Code</h1>
        <h3>¡Conoce gente, aprende y gana!</h3>
        <div>
          <span>La próxima edición regresa en el 2022, en la cual se planea involucrar a todos los programadores independientmente del area de conocimiento que se encuentre, todo con un mismo proposito, aprender en comunidad.</span>
        </div>
      </div>
      <div className="panelColaborador">Colaboradores</div>
      <div className="panelSponsor">Sponsors</div>
      <div className="panelTimer">Timer</div>
      <div className="panelTaller">
        <div class="card-container-taller">
          <div className="card-taller">
            <div className="card-taller-header">
              <span className="card-taller-title"> Talleres</span>
              <a className="card-taller-link"><span>Ver más</span></a>
            </div>
            <div className="card-taller-select">
              <select className="select-taller">
                  <option>Talleres por área de conocimiento</option>
                  <option>Primera opción</option>
                  <option>Segunda opción</option>
                  <option>Tercera opción</option>
                  <option>Cuarta opción</option>
              </select>
            </div>
            <div className="card-taller-event">
                Hoy
            </div>
            <div className="card-taller-body">
              <div className="card-taller-content">
                <div className="card-taller-img">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.45508 8.64039L8.80273 14.988L21.4988 2.29199" stroke="black" stroke-width="4" stroke-linecap="round"/>
                  </svg>
                </div>
                <div className="card-taller-text">
                  <span className="card-taller-title">State of Javascript</span>
                  <span className="card-taller-hora">16:00 PM</span>
                  <span className="card-taller-subtext">By<span className="card-taller-name">Juan Pablo de la Torre</span></span>
                </div>
              </div>
            </div>
            <div className="card-taller-body">
              <div className="card-taller-content">
                <div className="card-taller-img">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.45508 8.64039L8.80273 14.988L21.4988 2.29199" stroke="black" stroke-width="4" stroke-linecap="round"/>
                  </svg>
                </div>
                <div className="card-taller-text">
                  <span className="card-taller-title">State of Javascript</span>
                  <span className="card-taller-hora">16:00 PM</span>
                  <span className="card-taller-subtext">By<span className="card-taller-name">Juan Pablo de la Torre</span></span>
                </div>
              </div>
            </div>
            <div className="card-taller-body">
              <div className="card-taller-content">
                <div className="card-taller-img">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.45508 8.64039L8.80273 14.988L21.4988 2.29199" stroke="black" stroke-width="4" stroke-linecap="round"/>
                  </svg>
                </div>
                <div className="card-taller-text">
                  <span className="card-taller-title">State of Javascript</span>
                  <span className="card-taller-hora">16:00 PM</span>
                  <span className="card-taller-subtext">By<span className="card-taller-name">Juan Pablo de la Torre</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	</div>
  );
};

export default Dashboard;
