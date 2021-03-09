import React from "react";
import A from "../../nano/A";

const Community = ({ name, foto, url}) => {
  return(
    <div className="card-com-body col-xs-12">
      <div className="card-com-content">
        <img className="card-com-img" src={ foto } />
        <span className="card-com-title"> { name }</span>
      </div>
      {url && <A css={ "card-com-link" } href={ url }><span>Unirme</span></A>}
    </div>
  )
}

export default Community;