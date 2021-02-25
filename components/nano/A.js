import React from "react";
import Link from "next/link";

const A = ({ type, children, css = "", href = "#", id = "" }) => {
  if (type === "a") {
    return (
      <a
        className={css}
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        id={id}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href}>
      <a id={id} className={css} >
        {children}
      </a>
    </Link>
  );
};

export default A;
