import React, { useState, useEffect } from 'react';
import Icono from '../../nano/Icono';
import moment from 'moment';

const Workshop = ({ name, hour, attendant }) => {
  const [stateWorkshop, setStateWorkshop] = useState([false]);
  let hourLocal = moment().format('LT');
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateWorkshop(!stateWorkshop);
    }, [hourLocal === hour]);
    return () => clearTimeout(timer);
  }, [hourLocal === hour]);
  
  return(
    <div className="card-taller-body">
      <div className="card-taller-content col-xs-12">
        <div className="card-taller-img col-xs-2">
          {(stateWorkshop) ? <Icono css={"icon-checkmark"} /> : <Icono css={"icon-navigation-more"} />}
        </div>
        <div className="card-taller-text col-xs-10">
          <span className="card-taller-title">{ name }</span>
          <span className="card-taller-hora">{ hour }</span>
          <span className="card-taller-subtext">By <span className="card-taller-name">{ attendant }</span></span>
        </div>
      </div>
    </div>
  )
}

export default Workshop;