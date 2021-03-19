import React from "react";
import LayoutMiPerfil from "../../components/perfil/union/LayoutMiPerfil";

import Eventos from "../../components/perfil/union/Eventos";

const eventos = () => {
  return (
    <LayoutMiPerfil  active={4}>
      <Eventos />
    </LayoutMiPerfil>
  );
};

export default eventos;
