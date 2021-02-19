import React from "react";

const A = ({ type, children, css = "", href = "#", id = "" }) => {
  if (type === "a") {
    return (
      <a
        className={css}
        rel="noopener noreferrer nofollow"
        id={id}
        style={{ cursor: "pointer" }}
      >
        {children}
      </a>
    );
  }
  return (
    <a id={id} className={css} style={{ cursor: "pointer" }}>
      {children}
    </a>
  );
};

export default A;
