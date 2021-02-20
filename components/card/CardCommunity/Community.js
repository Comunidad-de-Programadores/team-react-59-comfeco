import React from 'react';
import A from '../../nano/A';

const Community = ({ id, title, img, url}) => {
  return(
    <div id={id} className="card-com-body">
      <div className="card-com-content">
        <img className="card-com-img" src={ img }/>
        <span className="card-com-title"> { title }</span>
      </div>
      {url && <A type={ 'a' } css={ 'card-com-link' } href={ url }><span>Unirme</span></A>}
    </div>
  )
}

export default Community;