import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import moment from 'moment';
import 'moment-timezone';

import Workshop from './Workshop';
import A from '../../nano/A';

import convertTimeZoneLocal from '../../../functions/convertTimeZoneLocal';
import isToday from '../../../functions/isToday';

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
    try {
      if(valueSelected.value !== undefined) {
        let workShopToday = [];
        getWorkshops(valueSelected.value).then(items => {
          items.map((item) => {
            //Verified isToday
            if( isToday(item.date, item.hour, item.zone) ) {
              //Convert Time Zone Local
              item.hour = convertTimeZoneLocal(item.date, item.hour, item.zone);
              workShopToday.push(item); 
            }
          });
          setWorkshops(workShopToday);
        });
      }
    } catch (error) {
      console.log("no paso nada!")
    }
  }, [valueSelected]);

  return(
    <div className="card-container-taller">
      <div className="card-taller">
        <div className="card-taller-header">
          <span className="card-taller-title"> Talleres</span>
          <A css={'card-taller-link'} href={'#'}><span>Ver más</span></A>
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
        {workshops 
          ? workshops.map( workshop => ( <Workshop key={workshop._id} {...workshop} /> ))
          : <span>Hoy no hay taller</span>
        }
      </div>
    </div>
  );
};

export default Workshops;