import Layout from "../components/general/Layout";
import ModuloInsignias from "../components/perfil/submodulos/ModuloInsignias";

import Perfil from "../components/perfil/union/Perfil";
import Nav from "../components/perfil/union/Nav";


const miPerfil = () => {
  
  return (
    <Layout>
      <main>
        <div className="backgroundHome"></div>
        <div className="backgroundLigth"></div>

        <Nav />

        <div className="containerMiPerfil">
          <Perfil />
          {/*--------------si descomentan este de abajo y comentan lo de arriba pueden ver el modulo de insignias----------------- */}
          {/* <>
            <ModuloInsignias
              insignias={[
                {
                  title: 'insignia 1',
                  imageUrl: '/insignias/insignia1.png',
                  comoConseguirlo:
                    'Lorem, ipsum dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.',
                  descripcion:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam',
                },
                {
                  title: 'insignia 2',
                  imageUrl: '/insignias/insignia2.png',
                  comoConseguirlo:
                    'Lorem, ipsum dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.',
                  descripcion:
                    'Lorem ipsum dolor sit amet, consectetur adipis elit. Quibusdam, laudantium?',
                },
                {
                  title: 'insignia 3',
                  imageUrl: '/insignias/insignia3.png',
                  comoConseguirlo:
                    'Lorem, ipsum dolor. Lorem ipsum dolor sit amet. Lor dolor sit amet consectetur.',
                  descripcion:
                    'Lorem ipsum dolor sit amet, consectetur adipisic elit. Quibusdam,',
                },
                {
                  title: 'insignia 4',
                  imageUrl: '/insignias/insignia4.png',
                  comoConseguirlo:
                    'Lorem, ipsum dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.',
                  descripcion:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing',
                },
                {
                  title: 'insignia 5',
                  imageUrl: '/insignias/insignia4.png',
                  comoConseguirlo:
                    'Lorem, ipsum dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.',
                  descripcion: 'Lorem ipsum dolor sit amet, consectetur adipi',
                },
                {
                  title: 'insignia 6',
                  imageUrl: '/insignias/insignia4.png',
                  comoConseguirlo:
                    'Lorem, ipsum dolor. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.',
                  descripcion:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                },
              ]}
            />
          </> */}
        </div>
      </main>
    </Layout>
  );
};

export default miPerfil;
