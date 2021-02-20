import React from 'react';
import Workshop from './Workshop';

const workshops = [
  {
    id: '1',
    title: 'State of Javascript',
    hour: '16:00 PM',
    date: '20/02/2021',
    attendant: 'Juan Pablo de la Torre',
    group: 'Talleres por área del conocimiento'
  },
  {
    id: '2',
    title: 'State of Javascript',
    hour: '16:00 PM',
    date: '20/02/2021',
    attendant: 'Juan Pablo de la Torre',
    group: 'Talleres por área del conocimiento'
  },
  {
    id: '3',
    title: 'State of Javascript',
    hour: '16:00 PM',
    date: '20/02/2021',
    attendant: 'Juan Pablo de la Torre',
    group: 'Talleres por área del conocimiento'
  },
];

const Workshops = ( ) => {
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