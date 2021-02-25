import React, { useEffect, useState } from "react";
import Layout from "../components/general/Layout";
import Router, { useRouter } from "next/router";

import FormSocial from "../components/forms/FormSocial";

const newPassword = () => {
  const [existUser, setExistUser] = useState(true);
  const { token } = useRouter().query;

  const verifySocial = (tok) => {
    console.log(tok);
    if (!tok || tok === "") {
      return;
    }

    fetch("/api/social/verify_social", {
      method: "POST",
      headers: new Headers([["Content-type", "application/json"]]),
      body: JSON.stringify({
        token: tok,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.exist === false) {
          setExistUser(false);
          return;
        }

        if (data.error) {
          return console.log(data);
        }

        console.log(data);
        localStorage.setItem("token", `Bearer ${data.token}`);
        Router.push("/");
      });
  };

  useEffect(() => {
    verifySocial(token);
  }, [token]);

  return (
    <Layout>
      <div className="backgroundRegister"></div>
      <div className="containerSesion newPassContainer row between-xs ">
        <div className="containerForm" id="containerRegisterLogin">
          {!existUser && <FormSocial token={token} />}
        </div>
      </div>
    </Layout>
  );
};

export default newPassword;
