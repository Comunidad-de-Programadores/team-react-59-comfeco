import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Workshop from './Workshop';
import A from '../../nano/A';
import moment from 'moment';
import 'moment-timezone';

const Workshops = ( ) => {
  const [workshops, setWorkshops] = useState([]);
  const [group, setGroup] = useState([{value:'',label:''}]);
  const [valueSelected, setValueSelected] = useState([]);
  
  const getGroupWorkshops = async () => {
    const data = await fetch("/api/get_groupworkshops");
    return await data.json();
  };
  
  const getWorkshops = async (group) => {
    const data = await fetch("/api/get_workshops?group="+group);
    return await data.json();
  };

  const selectedGroup = (valueSelected) => {
    setValueSelected(valueSelected);
  }

  const calcTime = () => {
    let dateTime = "23/02/2021 16:00";
    dateTime = moment(dateTime, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm');
    dateTime = moment.tz(dateTime, "America/Mexico_City").format();
    dateTime = moment(dateTime).tz("America/Lima");
    const hourString = dateTime.format('LT');
    console.log(hourString);
  }

  const compareDate = () => {
    let dateTime = "25/02/2021 16:00";
    dateTime = moment(dateTime, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm');
    dateTime = moment.tz(dateTime, "America/Mexico_City");
    dateTime = moment(dateTime).tz("America/Lima").format('L');
    let dateToday = moment().format('L');
    let dateTomorrow = moment().add(1, 'days').format('L');
    
    if( dateToday === dateTime) {
      console.log("Es hoy");
    }

    if( dateTomorrow === dateTime) {
      console.log("Es mañana");
    }
  }

  useEffect(() => {
    let mounted = true;
    
    calcTime();
    compareDate();
    return () => mounted = false;
  }, [])

  useEffect(() => {
    let mounted = true;
    let groupSelect = [];
    
    getGroupWorkshops().then(groupWorkshop => {
        if(mounted) {
          groupWorkshop.map((item) => {
            groupSelect.push(
              {
                value: item.name,
                label: item.name
              }
            );
          });
          setValueSelected(groupSelect[0]);
          setGroup(groupSelect);
        }
      });

    return () => mounted = false;
  }, [])

  useEffect(() => {
    if(valueSelected.value !== undefined) {
      getWorkshops(valueSelected.value).then(items => {
        setWorkshops(items);
      });
    }
  }, [valueSelected]);

  return(
    <div className="card-container-taller">
      <div className="card-taller">
        <div className="card-taller-header">
          <span className="card-taller-title"> Talleres</span>
          <A type={'a'} css={'card-taller-link'} href={'#'}><span>Ver más</span></A>
        </div>
        
        <div className="card-taller-event">
            Hoy
        </div>
        <div className="card-taller-select">
          <Select
            options={group}
            noOptionsMessage={()=>"No hay resultados"}
            onChange={(option) => selectedGroup(option)}
            value={valueSelected}
          />
        </div>
        {workshops.map( workshop => (
          <Workshop key={workshop._id} {...workshop} />
        ))}
      </div>
    </div>
  );
};

export default Workshops;