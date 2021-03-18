import React from "react";

import WidgetPerfil from "../widgetPerfil";
import Insignias from "../insignias/Insignias";
import RecentActivities from "../RecentActivities";
import WidgetEvents from "../widgetEvents";

const Perfil = () => {
  return (
    <>
      <WidgetPerfil />
      <div className="contentMiPerfil col-xs-5">
        <Insignias
          insignias={[
            { imageUrl: "/insignias/insignia1.png" },
            { imageUrl: "/insignias/insignia2.png" },
            { imageUrl: "/insignias/insignia3.png" },
            { imageUrl: "/insignias/insignia4.png" },
            { imageUrl: "/insignias/insignia5.png" },
          ]}
        />
        <RecentActivities />
      </div>
      <WidgetEvents />
    </>
  );
};

export default Perfil;
