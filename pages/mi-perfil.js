import Layout from "../components/general/Layout";


import Perfil from "../components/perfil/union/Perfil";
import Nav from "../components/perfil/union/Nav";

import Insignias from "../components/perfil/union/Insignias"

const miPerfil = () => {
  
  return (
    <Layout>
      <main>
        <div className="backgroundHome"></div>
        <div className="backgroundLigth"></div>

        <Nav />

        <div className="containerMiPerfil">
          {/* <Perfil /> */}
          <Insignias />
        </div>
      </main>
    </Layout>
  );
};

export default miPerfil;
