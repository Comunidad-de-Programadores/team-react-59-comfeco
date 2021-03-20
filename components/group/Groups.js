import React, { useState, useEffect } from "react";
import Group from './Group'

const Groups = ({grupos}) =>{
    console.log({grupos})
    const [listGroup, setListGroup] = useState([grupos]);
    const [ search, setSearch ] = useState("");
    const [ filteredGroup, setFilteredGroup ] = useState([]);


    const changeLanguage = (language) => {
        const id = Number(language);
        if( id !== 0 ){
            setFilteredGroup(
                listGroup[0].filter( (group) => group.tag[0].id === id) );
        }else{
            setFilteredGroup(
                listGroup[0].filter( (group) => group )
            );
        }
    }

    useEffect(() => {
        setFilteredGroup(
            listGroup[0].filter((group) => group.name.toLowerCase().includes(search.toLowerCase()) )
        );
    }, [search, listGroup]);
    return (
        <>
        <form>
            <div className="form-group">
                <label htmlFor="language">Buscar por lenguaje:</label>
                <select onChange={(event) => changeLanguage(event.target.value)} className="control-form form-default form-fullwidth" name="language" id="language">
                    <option value="0">Todos</option>
                    <option value="1">Javascript</option>
                    <option value="2">php</option>
                    <option value="3">python</option>
                    <option value="4">swift</option>
                    <option value="5">java</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="name_group">Buscar por nombre del grupo</label>
                <input className="control-form form-default form-fullwidth" onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Nombre del grupo" id="name_group" />
            </div>
        </form>


        <div className="row around-xs">
            {filteredGroup.map((group) => (
                <div key={group.id}  className="col-lg-4 col-ms-3 col-md-4 col-xs-12 containerCardGroup">
                    <Group data={group}/>
                </div>
            ))}
        </div>
        </>
    )
}

export default Groups;

