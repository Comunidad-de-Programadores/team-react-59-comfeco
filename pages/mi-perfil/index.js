import React from "react";

import Perfil from "../../components/perfil/union/Perfil";

import LayoutMiPerfil from "../../components/perfil/union/LayoutMiPerfil";

const miPerfil = () => {
  return (
    <LayoutMiPerfil active={1}>
      <Perfil />
    </LayoutMiPerfil>
  );
};

export default miPerfil;
