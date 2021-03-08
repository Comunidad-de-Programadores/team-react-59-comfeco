import React from "react";

import WidgetPerfil from "../../components/perfil/widgetPerfil";
import WidgetEvents from "../../components/perfil/widgetEvents";

const w = () => {
  return (
    <>
      <div className="containerText col-xs-12 col-md-5 ">
        <WidgetPerfil />
        <WidgetEvents />
      </div>
    </>
  );
};

export default w;
