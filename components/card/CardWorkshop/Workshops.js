import React, { useEffect, useState } from "react";
import Select from "react-select";

import Workshop from "./Workshop";
import A from "../../nano/A";

import convertTimeZoneLocal from "../../../functions/convertTimeZoneLocal";
import isToday from "../../../functions/isToday";

const groupworkshops = [
  {
    id: "1",
    name: "Talleres por área del conocimiento",
  },
  {
    id: "2",
    name: "Talleres React",
  },
]

const workshops = [
  {
    id: "1",
    name: "State of Javascript 1",
    date: "08/03/2021",
    hour: "4:00 PM",
    zone: "America/Mexico_City",
    attendant: "Juan Pablo de la Torre",
    group: "Talleres por área del conocimiento"
  },
  {
    id: "2",
    name: "State of Javascript 2",
    date: "08/03/2021",
    hour: "4:00 PM",
    zone: "America/Mexico_City",
    attendant: "Juan Pablo de la Torre",
    group: "Talleres por área del conocimiento"
  },
  {
    id: "3",
    name: "State of Javascript 3",
    date: "08/03/2021",
    hour: "5:00 PM",
    zone: "America/Mexico_City",
    attendant: "Juan Pablo de la Torre",
    group: "Talleres por área del conocimiento"
  },
  {
    id: "4",
    name: "State of Javascript 4",
    date: "08/03/2021",
    hour: "8:00 PM",
    zone: "America/Mexico_City",
    attendant: "Juan Pablo de la Torre",
    group: "Talleres por área del conocimiento"
  },
  {
    id: "5",
    name: "State of Javascript 5",
    date: "09/03/2021",
    hour: "6:00 PM",
    zone: "America/Mexico_City",
    attendant: "Juan Pablo de la Torre",
    group: "Talleres React"
  },
  {
    id: "6",
    name: "State of Javascript 6",
    date: "08/03/2021",
    hour: "8:00 PM",
    zone: "America/Lima",
    attendant: "Juan Pablo de la Torre",
    group: "Talleres por área del conocimiento"
  },

];


const Workshops = ( ) => {

  const [valueSelected, setValueSelected] = useState([]);
  const [group, setGroup] = useState([{value:",label:"}]);
  const [listWorkshop, setListWorkshop] = useState([]);
  const selectedGroup = (valueSelected) => {
    setValueSelected(valueSelected);
  }

  useEffect(() => {
    let mounted = true;
    let groupSelect = [];
    if(mounted) {
      groupworkshops.map((item) => {
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
    return () => mounted = false;
  }, [])

  useEffect(() => {
    let mounted = true;
    try {
      if(mounted) {
        if(valueSelected.value !== undefined) {
          let workShopToday = workshops.filter((item) => item.group === valueSelected.value)
          workShopToday.map( (item) => {
            if( isToday(item.date, item.hour, item.zone) ) {
              item.hour = convertTimeZoneLocal(item.date, item.hour, item.zone);
            }
          });
          setListWorkshop(workShopToday);
          return () => mounted = false;
        }
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
          <A css={"card-taller-link"} href={"#"}>Ver más</A>
        </div>
        
       
        <div className="card-taller-select">
          <Select
            instanceId
            options={group}
            noOptionsMessage={()=>"No hay resultados"}
            onChange={(option) => selectedGroup(option)}
            value={valueSelected}
          />
        </div>
        <div className="card-taller-event">
            <p>Hoy:</p>
        </div>
        {listWorkshop 
          ? listWorkshop.map( (workshop) => ( <Workshop key={workshop.id} {...workshop} /> ))
          : <span>Hoy no hay taller</span>
        }
      </div>
    </div>
  );
};

export default Workshops;