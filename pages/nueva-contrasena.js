import React from "react";
import Layout from "../components/general/Layout";

import NewPassword from "../components/forms/NewPassword";


const newPassword = () => {
  return (
    <Layout>
      <div className="backgroundRegister"></div>
      <div className="containerSesion newPassContainer row between-xs ">
        <div className="containerForm" id="containerRegisterLogin">
          <NewPassword />
        </div>
      </div>
    </Layout>
  );
};

export default newPassword;