import React, { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import md5 from "md5";

import Image from "next/image";
import Icono from "../nano/Icono";

const Header = () => {
  const [localToken, setLocalToken] = useState(false);
  const [sessToken, setSessToken] = useState(false);
  const [user, setUser] = useState({ nickname: "", email: null, image: null });

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
        console.log(data);
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

  useEffect(() => {
    if (user.email && !user.image) {
      const hash = md5(user.email);
      const image = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
      setUser({ ...user, image });
    }
  }, [user.email]);

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
            <Link href="/">
              <a>
                <Image
                  src="/logo1.png"
                  alt="Picture of the author"
                  width={139}
                  height={41}
                />
              </a>
            </Link>
          </div>
          <div className="col-xs-9 navegation">
            {/*Verify User localstorage*/}
            {localToken && (
              <nav className="user_nav">
                {/* Image verify */}
                {user.image ? (
                  <img src={user.image} />
                ) : (
                  <img src="/no_user.jpg" />
                )}

                <p>{user.nickname}</p>

                <button onClick={logout}>Logout</button>
              </nav>
            )}
            {/*Verify User session*/}
            {sessToken && (
              <nav className="user_nav">
                {/* Image Verify */}
                {user.image ? (
                  <img src={user.image} />
                ) : (
                  <img src="/no_user.jpg" />
                )}
                <p>{user.nickname}</p>
                <button onClick={logout}>Logout</button>
              </nav>
            )}
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
