import React from "react";

const Icono = ({ css = "", id = "" }) => {
  return (
    <span className={`ico ${css}`} id={id} role="img" aria-label="sheep"></span>
  );
};

export default Icono;
