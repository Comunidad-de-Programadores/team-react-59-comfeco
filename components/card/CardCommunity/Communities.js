import React, { useEffect, useState } from 'react';
import Community from './Community';
import A from '../../nano/A';

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
          <span className="card-com-title"> Comunidades</span>
          <A type={'a'} css={'card-com-link'} href={'#'}><span>Ver más</span></A>
        </div>
        { communities.map( community => (
          <Community key={ community._id } {...community} />
        ))}
      </div>
    </div>
  );
};

export default Communities;