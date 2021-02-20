import React from 'react';
import Community from './Community';
import A from '../../nano/A';

const communities = [
  {
    id: '1',
    title: 'Comunidad de Programadores',
    img: '',
    url: 'https://discord.gg/5Bb5yvzNPr',
  },
  {
    id: '2',
    title: 'El lenguaje de los programadores',
    img: '',
    url: 'https://www.facebook.com/lenguajeprogramador',
  },
  {
    id: '3',
    title: 'Bragecreativo',
    img: '',
    url: 'https://www.facebook.com/',
  },
];

const Communities = ( ) => {
  return(
    <div class="card-container-com">
      <div className="card-com">
        <div className="card-com-header">
          <span className="card-com-title"> Comunidades</span>
          <A type={'a'} css={'card-com-link'} href={'#'}><span>Ver más</span></A>
        </div>
        { communities.map( community => (
          <Community key={ community.id } {...community} />
        ))}
      </div>
    </div>
  );
};

export default Communities;