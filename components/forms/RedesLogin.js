import React from "react";
import A from "../nano/A";
import Icono from "../nano/Icono";
import { signIn } from "next-auth/client";

const RedesLogin = () => {
  return (
    <div className="redesSociales">
      <ul>
        <li>
          <button onClick={() => signIn("google")}>
            <A href="#">
              <Icono css="icon-google googleHover" />
              <span></span>
            </A>
          </button>
        </li>
        <li>
          <button onClick={() => signIn("facebook")}>
            <A href="#">
              <Icono css="icon-facebook facebookHover" />
              <span></span>
            </A>
          </button>
        </li>
        <li>
          <button onClick={() => signIn("twitter")}>
            <A href="#">
              <Icono css="icon-twitter twitterHover" />
              <span></span>
            </A>
          </button>
        </li>
        <li>
          <button onClick={() => signIn("github")}>
            <A href="#">
              <Icono css="icon-github1 githubHover" />
              <span></span>
            </A>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default RedesLogin;
