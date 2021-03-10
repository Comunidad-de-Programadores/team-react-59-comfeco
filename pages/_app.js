/* estilos de las librerias */
import "../styles/lib/librerias.scss";
import "../styles/icons/style.css";

/* Estilos globales, header y footer */
import "../styles/globals/globals.scss";

/* Estilos de los componentes de los formularios de registro */
import "../styles/form/formRegisterLogin.scss";
import "../styles/form/newPassword.scss";
import "../styles/form/loginRedes.scss";

/*  */
/* import "../styles/dashboard.scss";
import "../styles/deadline.scss";
import "../styles/homeLogin.scss"; */
import "../styles/home/home.scss";



/* css del slider */
import "../styles/slider/swiper.scss";
import "../styles/slider/estilos.scss";
import "../styles/slider/sliderSleader.scss";
import "../styles/slider/sliderSponsors.scss";
/* css para cambiar los colores de la interfas (Proximaente)*/


import "../styles/form/editProfile.scss";


/* Clase para meter nuevos estilos (Uxiliar) */
import "../styles/demo.scss";

/* css de las paginas */


/* Estilos del Deadline */


/* estilos para botones */
import "../styles/button/btn1.scss";
import "../styles/button/btnHamburguesa.scss";

/* estilos perfil */
import "../styles/perfil/miPerfil.scss";

import { Provider } from "next-auth/client";

import "../styles/perfil/perfil.scss";
import "../styles/cards.scss";
import "../styles/perfil/cardEvents.scss";
import "../styles/colorChange.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
