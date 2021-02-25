import Image from "next/image";
import Link from "next/link";
import Layout from "../components/general/Layout";

const TerminosCondiciones = () => {
  return (
    <>
      {/* <header>
          <div>
            <Image
              src="/img/logos/logo1.png"
              alt="Picture of the author"
              width={175}
              height={45}
            />
          </div>
          <div>
            <Link href="/">
              <button type="button">Iniciar sesión</button>
            </Link>
          </div>
        </header>
         */}
      <br />

      <Layout>
        <div className="containerLegal">
          <main>
            <section>
              <h1>TÉRMINOS DEL SERVICIO DE COMFECO</h1>
              <p>
                Fecha: 12 de Febrero de 2021 |{" "}
                <a href="https://www.google.com" target="_blank">
                  Descargar PDF
                </a>
              </p>
              <br />
              <h3>
                Sabemos que es tentador saltarse estos Términos del Servicio,
                pero es importante determinar qué puedes esperar de nosotros al
                usar nuestros talleres y qué esperamos nosotros de ti.
              </h3>
            </section>
            <br />
            <section>
              <p>
                Estos Términos del Servicio reflejan la forma de trabajar de
                Comfeco como empresa, las leyes por las que nos regimos y
                determinados aspectos que siempre hemos creído que son ciertos.
                Por ello, estos Términos ayudan a definir la relación que tiene
                #Comfeco contigo cuando interactúas con nuestros servicios. Por
                ejemplo, estos términos incluyen las siguientes secciones:
              </p>
              <br />
              <ul>
                <li>
                  Qué puedes esperar de nosotros, donde se describe cómo
                  proporcionamos y desarrollamos nuestros servicios.
                </li>
                <li>
                  Lo que esperamos de ti, donde se establecen ciertas reglas
                  para utilizar nuestros servicios.
                </li>
                <li>
                  En caso de problemas o discrepancias, donde se describen otros
                  derechos legales que tienes y las consecuencias de infringir
                  estos términos.
                </li>
              </ul>
              <br />
              <p>
                Es importante que entiendas estos términos porque el uso de
                nuestros servicios implica que los aceptas.
              </p>
              <p>
                Además de estos términos, también publicamos una Política de
                Privacidad. Aunque no forme parte de estos términos, te
                recomendamos que la leas para entender mejor cómo puedes
                actualizar, gestionar, exportar y eliminar tu información.
              </p>
            </section>
            <br />
            <section>
              <h2>Requisitos de edad mínima</h2>
              <p>
                Si no tienes la edad mínima para poder gestionar tu propia
                cuenta de Comfeco, debes contar con el permiso de tu padre,
                madre o tutor legal para utilizar una cuenta de Comfeco. Pide a
                tu padre, madre o tutor legal que lea estos términos contigo.
              </p>
              <p>
                Si eres padre, madre o tutor legal y permites a tu hijo/a que
                utilice los servicios, se te aplican estos términos y eres
                responsable de la actividad que realice en los servicios.
              </p>
            </section>
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
          .containerLegal {
            align-items: center;
            display: flex;
            justify-content: center;
          }

          main {
            flex-wrap: wrap;
            width: 85%;
          }

          header {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
          }

          h1 {
            color: #3c4043;
            display: block;
            font-size: 40px;
            letter-spacing: 0.8px;

            text-align: center;
            text-transform: uppercase;
          }

          h2 {
            font-size: 22px;
            font-weight: 700;
            line-height: 28px;
            margin-top: 40px;
          }

          h3 {
            font-size: 24px;
            line-height: 32px;
            padding-top: 24px;
          }

          p {
            letter-spacing: 0.2px;
            line-height: 24px;
            padding-top: 20px;
            text-align: justify;

            width: 95%;
          }

          ul {
            padding-left: 5%;
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
