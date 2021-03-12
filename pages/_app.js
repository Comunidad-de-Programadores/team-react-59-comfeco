import Head from "next/head";

/* estilos de las librerias */
import "../styles/lib/librerias.scss";
import "../styles/icons/style.css";

/* Estilos globales, header y footer */
import "../styles/globals/globals.scss";

/* estilos para botones */
import "../styles/button/btn2.scss";
import "../styles/button/btnHamburguesa.scss";

/* Estilos de los componentes de los formularios de registro */
import "../styles/form/formRegisterLogin.scss";
import "../styles/form/newPassword.scss";
import "../styles/form/loginRedes.scss";

/* Estilos del home */
import "../styles/home/home.scss";

/* Estilos del slider */
import "../styles/slider/slider.scss";

/* estilos perfil */
import "../styles/perfil/miPerfil.scss";
/*  */

import "../styles/form/editProfile.scss";

/* Clase para meter nuevos estilos (Uxiliar) */
import "../styles/demo.scss";



/* import "../styles/perfil/perfil.scss"; */
import "../styles/cards.scss";

import "../styles/colorChange.scss";

import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="/swiper.min.js"></script>
      </Head>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
