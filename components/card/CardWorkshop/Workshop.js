import React from 'react';

const Workshop = ({ _id, name, hour, attendant }) => {
  return(
    <div id ={ _id } className="card-taller-body">
      <div className="card-taller-content">
        <div className="card-taller-img">
         
        </div>
        <div className="card-taller-text">
          <span className="card-taller-title">{ name }</span>
          <span className="card-taller-hora">{ hour }</span>
          <span className="card-taller-subtext">By <span className="card-taller-name">{ attendant }</span></span>
        </div>
      </div>
    </div>
  )
}

export default Workshop;