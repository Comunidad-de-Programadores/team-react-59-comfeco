import React from "react";

const Group = ({data}) => {
    return(
        <div className="card-group-two">
            <div className="card-group-two-image">
                <div className="card-group-two-tag">{data.tag[0].name}</div>
                <img src="/generic_detail_default.png" alt="default avatar"/>
            </div>
            <div className="card-group-two-description">
                <div className="card-group-two-description_title">{data.name}</div>
                <p>{data.description}</p>
                <div className="text-center">
                    <button className="btn btn-black btn-outline">Unirse</button>
                </div>
            </div>
        </div>
    )
}
export default Group;