import React from 'react';

const Workshop = ({ id, name, hour, attendant }) => {
  return(
    <div id ={id} className="card-taller-body">
      <div className="card-taller-content">
        <div className="card-taller-img">
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.45508 8.64039L8.80273 14.988L21.4988 2.29199" stroke="black" stroke-width="4" stroke-linecap="round"/>
          </svg>
        </div>
        <div className="card-taller-text">
          <span className="card-taller-title">{ name }</span>
          <span className="card-taller-hora">{ hour }</span>
          <span className="card-taller-subtext">By<span className="card-taller-name">{ attendant }</span></span>
        </div>
      </div>
    </div>
  )
}

export default Workshop;