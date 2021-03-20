import React from "react";

import Insignias from "../../components/perfil/union/Insignias";

import LayoutMiPerfil from "../../components/perfil/union/LayoutMiPerfil";

const insignias = () => {
  return (
    <LayoutMiPerfil  active={2}>
      <Insignias />
    </LayoutMiPerfil>
  );
};

export default insignias;