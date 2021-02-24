import React, { useEffect, useState } from 'react';
import Workshop from './Workshop';
import A from '../../nano/A';

const Workshops = ( ) => {
  const [workshops, setWorkshops] = useState([]);

  const getWorkshops = async () => {
    const data = await fetch("/api/get_workshops");
    return await data.json();
  };

  useEffect(() => {
    let mounted = true;
    getWorkshops().then(items => {
      if(mounted) {
        setWorkshops(items)
      }
    })
    return () => mounted = false;
  }, [])
 
  return(
    <div class="card-container-taller">
      <div className="card-taller">
        <div className="card-taller-header">
          <span className="card-taller-title"> Talleres</span>
          <A type={'a'} css={'card-taller-link'} href={'#'}><span>Ver más</span></A>
        </div>
        <div className="card-taller-select">
          <select className="select-taller">
              <option>Talleres por área de conocimiento</option>
              <option>Primera opción</option>
              <option>Segunda opción</option>
              <option>Tercera opción</option>
              <option>Cuarta opción</option>
          </select>
        </div>
        <div className="card-taller-event">
            Hoy
        </div>
        {workshops.map( workshop => (
          <Workshop key={workshop.id} {...workshop} />
        ))}
      </div>
    </div>
  );
};

export default Workshops;