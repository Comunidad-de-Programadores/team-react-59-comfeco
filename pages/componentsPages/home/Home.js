import React from 'react';
import HomeDashboard from "./HomeDashboard";
const Home = () => {
    return (  <>
        <main>
          <div className="backgroundHome"></div>
          <div className="backgroundLigth"></div>
          <div className="containerSesion row center-xs">
            <div className="welcome row col-xs-12 center-xs">
              <h1>Bienvenidos <b>comfeco</b> ¡Community Fest and Code!</h1>
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
          </div>
          <HomeDashboard />
        </main>
      </> );
}
 
export default Home;