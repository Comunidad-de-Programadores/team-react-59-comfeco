import React, { useEffect, useState } from "react";
import Community from "./Community";
import A from "../../nano/A";
import Icono from "../../nano/Icono";

const communities = [
  {
    id: "1",
    name: "Comunidad de Programadores",
    foto: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffae49dcf-7e01-40dd-a435-adcbf56f72c0%2Fnew_Imagen_Programador.png?table=block&id=edc76893-6add-402f-a435-48c2d6837f26&width=3090&userId=6b7cbe72-c418-4303-9561-4e0cf0548e46&cache=v2",
    url: "https://discord.gg/5Bb5yvzNPr",
  },
  {
    id: "2",
    name: "El lenguaje de los programadores",
    foto: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F251de6e9-7154-4823-8646-1fd227f42a4b%2Fimage0.jpg?table=block&id=d2272fbf-3ff5-4030-86d6-0b408c8e17e2&width=3090&userId=6b7cbe72-c418-4303-9561-4e0cf0548e46&cache=v2",
    url: "https://www.facebook.com/lenguajeprogramador",
  },
  {
    id: "3",
    name: "Bragecreativo",
    foto: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa173d523-295b-4dd0-98cb-c6963de94782%2F2f20e769-b428-41b0-964b-ddbd84e8765f.jpg?table=block&id=d3260c99-88e8-4dc2-a026-6fb3f06fd819&width=3090&userId=&cache=v2",
    url: "https://www.facebook.com/",
  },
  {
    id: "4",
    name: "Bragecreativo",
    foto: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa173d523-295b-4dd0-98cb-c6963de94782%2F2f20e769-b428-41b0-964b-ddbd84e8765f.jpg?table=block&id=d3260c99-88e8-4dc2-a026-6fb3f06fd819&width=3090&userId=&cache=v2",
    url: "https://www.facebook.com/",
  },,
  {
    id: "5",
    name: "Bragecreativo",
    foto: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa173d523-295b-4dd0-98cb-c6963de94782%2F2f20e769-b428-41b0-964b-ddbd84e8765f.jpg?table=block&id=d3260c99-88e8-4dc2-a026-6fb3f06fd819&width=3090&userId=&cache=v2",
    url: "https://www.facebook.com/",
  },
  {
    id: "6",
    name: "Bragecreativo",
    foto: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa173d523-295b-4dd0-98cb-c6963de94782%2F2f20e769-b428-41b0-964b-ddbd84e8765f.jpg?table=block&id=d3260c99-88e8-4dc2-a026-6fb3f06fd819&width=3090&userId=&cache=v2",
    url: "https://www.facebook.com/",
  }
];


const Communities = () => {
  
  return(
    <div className="card-container-com">
      <div className="card-com">
        <div className="card-com-header">
          <span className="card-com-title">Comunidades</span>
          <A css={'card-com-link'} href={'#'}>Ver más<Icono/></A>
        </div>
        { communities.map( community => (
          <Community key={ community.id } {...community} />
        ))}
      </div>
    </div>
  );
};

export default Communities;