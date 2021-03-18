import React from 'react';

import ModuloInsignias from "../submodulos/ModuloInsignias";

const Insignias = () => {
    return ( <>
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
      </> );
}
 
export default Insignias;