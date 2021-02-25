/* estilos de las librerias */
import "../styles/lib/normalize.scss";
import "../styles/lib/flexboxGrid.scss";
import "../styles/icons/fonts.css";

/* Estilos globales */
import "../styles/globals.scss";
import "../styles/header.scss";
import "../styles/footer.scss";

/* Estilos de los componentes de los formularios de registro */
import "../styles/form/formRegisterLogin.scss";
import "../styles/form/newPassword.scss";
import "../styles/form/homeLogin.scss";

/* css del slider */
import "../styles/slider/swiper.scss";
import "../styles/slider/estilos.scss";
import "../styles/slider/sliderSleader.scss";

/* css para cambiar los colores de la interfas (Proximaente)*/
import "../styles/colorChange.scss";
import "../styles/dashboard.scss";

/* Clase para meter nuevos estilos (Uxiliar) */
import "../styles/demo.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
