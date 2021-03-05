import React, { useEffect, useState } from 'react';
import Community from './Community';
import A from '../../nano/A';
import Icono from '../../nano/Icono';
const Communities = () => {
  const [communities, setCommunities] = useState([]);

  const getCommunities = async () => {
    const data = await fetch("/api/get_communities");
    return await data.json();
  };

  useEffect(() => {
    let mounted = true;
    getCommunities().then(items => {
      if(mounted) {
        setCommunities(items)
      }
    })
    return () => mounted = false;
  }, [])
 
  return(
    <div className="card-container-com">
      <div className="card-com">
        <div className="card-com-header">
          <span className="card-com-title">Comunidades</span>
          <A css={'card-com-link'} href={'#'}>Ver más<Icono/></A>
        </div>
        { communities.map( community => (
          <Community key={ community._id } {...community} />
        ))}
        {/* <ul>
          <li>
            <a href="#">
              <img src="" alt="">
                <p>comunidad #1</p>
              </img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" alt="">
                <p>comunidad #2</p>
              </img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" alt="">
                <p>comunidad #3</p>
              </img>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="" alt="">
                <p>comunidad #4</p>
              </img>
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Communities;