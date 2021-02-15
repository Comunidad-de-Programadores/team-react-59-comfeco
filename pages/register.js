import React from "react";
import Layout from "../components/general/Layout";
import Register from "../components/forms/Register";
import Login from "../components/forms/Login";
import Image from "next/Image"

const register = () => {
 
  

  return (
    <Layout>
      <div className="backgroundRegister"></div>
      <div className="containerSesion row between-xs">
        <div className="col-xs-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            facere facilis saepe adipisci eligendi voluptate, sunt debitis quas
            eaque repellendus blanditiis, temporibus ut, dolorum officia! Dicta
            veritatis praesentium doloremque corrupti.
          </p>
        </div>
        <div className="containerRegisterLogin" id="containerRegisterLogin">
        <Login />
        <Register />
         {/* <Image src="/Paleta.png" width={200} height={100} /> */}
        </div>
      </div>
    </Layout>
  );
};

export default register;
