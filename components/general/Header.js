import React, { useEffect, useState } from "react";
import Router from "next/router";

import Image from "next/image";
import Icono from "../nano/Icono";

const Header = () => {
  const [localToken, setLocalToken] = useState(false);
  const [sessToken, setSessToken] = useState(false);
  const [user, setUser] = useState({ nickname: "", email: "" });

  const verifyToken = (type) => {
    fetch("/api/get_user", {
      headers: new Headers([
        [
          "Authorization",
          `${type === "local" ? localStorage.token : sessionStorage.token}`,
        ],
      ]),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.error) {
          return;
        }
        setUser(data);
      });
  };

  useEffect(() => {
    setLocalToken(!!localStorage.getItem("token"));
    setSessToken(!!sessionStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (localToken) {
      verifyToken("local");
    }

    if (sessToken) {
      verifyToken("sess");
    }
  }, [localToken, sessToken]);

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setLocalToken(!!localStorage.getItem("token"));
    setSessToken(!!sessionStorage.getItem("token"));
    Router.reload();
  };

  return (
    <>
      <header className="row col-xs-12">
        <div className="row containerHeader headerDesktop">
          <div className="col-xs-3">
            <Image
              src="/logo1.png"
              alt="Picture of the author"
              width={139}
              height={41}
            />
          </div>
          <div className="col-xs-9 navegation">
            {localToken && (
              <nav>
                <p style={{ marginRight: 10 }}>{user.nickname}</p>
                <button
                  onClick={logout}
                  style={{
                    padding: "10px",
                    border: "white 1px solid",
                    borderRadius: "10px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </nav>
            )}
            {sessToken && (
              <nav>
                <p style={{ marginRight: 10 }}>{user.nickname}</p>
                <button
                  onClick={logout}
                  style={{
                    padding: "10px",
                    border: "white 1px solid",
                    borderRadius: "10px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </nav>
            )}
            {/*  <nav>
              <ul>
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/hola">Tool1</Link>
                </li>
                <li>
                  <Link href="#">Tool2</Link>
                </li>
                <li>
                  <Link href="#">Tool3</Link>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
        <div className="row center-xs containerHeader headerPhone">
          <div className="col-xs-2 left">
            <Icono css={"icon-menu"} />
          </div>
          <div className="col-xs-6 imgLogo">
            <Image
              src="/logo1.png"
              alt="Picture of the author"
              width={139}
              height={41}
            />
          </div>
          <div className="col-xs-2 right">
            <Icono css={"icon-account_circle"} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
