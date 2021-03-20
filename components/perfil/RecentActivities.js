import Image from "next/image";
import Icono from "../nano/Icono";

const RecentActivities = () => {
  const actividad = (
    <div className="contentRecentActivities">
      <div className="row between-xs containerInfo">
        <div className="col-xs-9">
          <h2>Curso de programacion avanzada</h2>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nemo nobis illo eos accusamus excepturi doloremque reprehenderit aut laborum non? Unde dolorem nulla nemo!</p>
        </div>
        <div className="col-xs-2 img">
          <Image src="/perfil/recentActivities.svg" width="100" height="100" />
        </div>
      </div>
    </div>
  );
  return (
    <div className="containerRecentActivities">
      <div className="title">
        {" "}
        <h4>Actividad Reciente</h4>

        <Icono css="icon-calendar" />
      </div>
      <div className="containerActivity">
        {actividad}
        {actividad}
        {actividad}
      </div>
    </div>
  );
};

export default RecentActivities;
