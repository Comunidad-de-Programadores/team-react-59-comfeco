import React from "react";

import Layout from "../../general/Layout";
import Nav from "./Nav";
import Perfil from "./Perfil";
const LayoutMiPerfil = (props) => {
  return (
    <Layout>
      <main>
        <div className="backgroundHome"></div>
        <div className="backgroundLigth"></div>
        <Nav />
        <div className="containerMiPerfil">{props.children}</div>
      </main>
    </Layout>
  );
};

export default LayoutMiPerfil;
