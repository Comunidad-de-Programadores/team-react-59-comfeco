import React, { useEffect, useState } from "react";
import Layout from "../components/general/Layout";
import Router, { useRouter } from "next/router";

import NewPassword from "../components/forms/NewPassword";

const newPassword = () => {
  const [tokenVal, setToken] = useState("");
  const { token } = useRouter().query;

  useEffect(() => {
    setToken(token);
  }, [token]);

  return (
    <Layout>
      <div className="backgroundRegister"></div>
      <div className="containerSesion newPassContainer row between-xs ">
        <div className="containerForm" id="containerRegisterLogin">
          <NewPassword token={tokenVal} />
        </div>
      </div>
    </Layout>
  );
};

export default newPassword;
