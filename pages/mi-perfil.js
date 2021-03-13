import Layout from "../components/general/Layout";
import Insignias from "../components/perfil/insignias/Insignias";
import WidgetPerfil from "../components/perfil/WidgetPerfil";
import RecentActivities from "../components/perfil/RecentActivities";
import WidgetEvents from "../components/perfil/WidgetEvents";

const miPerfil = () => {
  return (
    <Layout>
      <main>
      <div className="backgroundHome"></div>
        <div className="backgroundLigth"></div>
        <div className="containerMiPerfil">
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
        </div>
      </main>
    </Layout>
  );
};

export default miPerfil;
