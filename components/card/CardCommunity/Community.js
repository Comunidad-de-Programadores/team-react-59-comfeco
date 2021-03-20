import React from 'react';
import A from '../../nano/A';
import Icono from '../../nano/Icono';
const Community = ({ name, foto, url}) => {
  return(
    <div className="card-com-body col-xs-12">
      <div className="card-com-content">
        <img className="card-com-img" src={ foto } />
        <span className="card-com-title"> { name }</span>
      </div>
      {url && <A css={ 'card-com-link iconA' } href={ url } type="a"><Icono css="icon-group_add"/></A>}
    </div>
  )
}

export default Community;