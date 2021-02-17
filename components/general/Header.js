import React from "react";

import Image from "next/image";
import Link from "next/Link";

const Header = () => {
  return (
    <>
      <header className="row col-xs-12">
        <div className="row containerHeader">
          <div className="col-xs-3">
            <Image
              src="/logo1.png"
              alt="Picture of the author"
              width={139}
              height={41}
            />
          </div>
          <div className="col-xs-9 navegation">
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
      </header>
    </>
  );
};

export default Header;
