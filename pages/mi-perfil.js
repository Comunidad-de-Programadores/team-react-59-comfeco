import Layout from "../components/general/Layout";
import Insignias from "../components/perfil/insignias/Insignias";
import WidgetPerfil from "../components/perfil/WidgetPerfil";
import RecentActivities from "../components/perfil/RecentActivities";
import WidgetEvents from "../components/perfil/WidgetEvents";

const miPerfil = () =>{
    return(
        <Layout>
            <div className="containerMiPerfil">
                <WidgetPerfil/>
                <div className="contentMiPerfil col-xs-5">
                    <Insignias insignias={[{imageUrl:'/perfil/insignias/ejemplo.png'}, {imageUrl:'/perfil/insignias/ejemplo.png'},{imageUrl:'/perfil/insignias/ejemplo.png'},{imageUrl:'/perfil/insignias/ejemplo.png'}]}/>
                    <RecentActivities/>
                </div>
                    <WidgetEvents/>
            </div>
        </Layout>
    )
}

export default miPerfil