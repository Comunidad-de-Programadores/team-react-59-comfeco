import Image from "next/image";
import Link from "next/link";
import Layout from "../components/general/Layout";

const TerminosCondiciones = () => {
  return (
    <>
     
      <Layout>
        <div className="containerLegal">
          <main>
          <div className="backgroundHome"></div>
          <div className="backgroundLigth"></div>
          <div className="backgroundCard">
          <section>
              <h1>TÉRMINOS Y CONDICIONES</h1>
              <p>
              Entérate aquí de nuestros términos y condiciones que reflejan la forma de trabajar de Comfeco como empresa, las leyes por las que nos regimos y determinados aspectos que siempre hemos creído que son ciertos. Por ello, estos términos ayudan a definir la relación que tiene <b>#Comfeco</b> y contigo cuando interactúas con nuestros servicios.
              </p>
              <p>
                Estos términos incluyen lo siguiente:
              </p>
              <ul>
                <li>
                  Qué puedes esperar de nosotros, donde se describe cómo proporcionamos y desarrollamos nuestros servicios.
                </li>
                <li>
                  Lo que esperamos de ti, donde se establecen ciertas reglas para utilizar nuestros servicios.
                </li>
                <li>
                  En caso de problemas o discrepancias, donde se describen otros derechos legales que tienes y las consecuencias de infringir estos términos.
                </li>
              </ul>
              <p>
                Además de estos términos, también publicamos una Política de Privacidad. Aunque no forme parte de estos términos, te recomendamos que la leas para entender mejor cómo puedes actualizar, gestionar, exportar y eliminar tu información.
              </p>
              <h2>Requisitos de edad mínima</h2>
              <p>
                Si actualmente tienes la edad mínima, para poder gestionar tu propia cuenta de Comfeco, debes contar con el permiso de tu padre, madre o tutor legal para utilizar una cuenta de Comfeco. Pide a tu padre, madre o tutor legal que lea estos términos contigo.
              </p>
              <p>
                Si eres padre, madre o tutor legal y permites a tu hijo/a que utilice los servicios, se te aplican estos términos y eres responsable de la actividad que realice en los servicios.
              </p>
            </section>
          </div>
          </main>
        </div>
      </Layout>

      <style global jsx>
        {`
          body {
            background: -webkit-linear-gradient(to bottom, #904e95, #e96443);
            background: linear-gradient(to bottom, #904e95, #e96443);
            font-family: Lato, sans-serif;
          }
        `}
      </style>
      <style jsx>
        {`
          .backgroundCard {
            background: #390f64;
            border: 1px solid #fff;
            border-radius: 10px;
            margin: 50px;
            overflow: hidden;
            padding: 50px;
            position: relative;
            transition: all ease 0.6s;
            width: 100%;
          }
          .containerLegal {
            align-items: center;
            display: flex;
            justify-content: center;
          }

          main {
            flex-wrap: wrap;
            width: 85%;
          }

          h1 {
            color: #ffffff;
            display: block;
            font-size: 40px;
            letter-spacing: 0.8px;

            text-align: center;
            text-transform: uppercase;
          }

          h2 {
            color: #ffffff;
            font-size: 22px;
            font-weight: 700;
            line-height: 28px;
            margin-top: 40px;
          }

          p {
            letter-spacing: 0.2px;
            line-height: 1.5;
            padding-top: 20px;
            text-align: justify;
            width: 100%;
          }

          ul {
            padding-left: 5%;
            
          }

          li {
            line-height: 1.5;
          }

          button {
            background-color: #92278f;
            border-radius: 5px;
            border: 0;
            color: white;

            font-weight: 700;
            height: 40px;
            outline: none;
            width: 120px;
          }

          button:hover {
            background-color: #751972;
          }
        `}
      </style>
    </>
  );
};

export default TerminosCondiciones;
