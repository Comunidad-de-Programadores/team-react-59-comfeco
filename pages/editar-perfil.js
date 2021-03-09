import React, { useEffect, useState } from "react";
import Layout from "../components/general/Layout";
import Router, { useRouter } from "next/router";

import EditProfile from "../components/forms/EditProfile";

const editProfile = () => {
  const [tokenVal, setToken] = useState("");
  const { token } = useRouter().query;

  useEffect(() => {
    setToken(token);
  }, [token]);

  return (
    <>
      <div className="backgroundRegister"></div>
      <div className="containerUser editProfileContainer row between-xs">
        <div className="containerForm" id="containerEditProfile">
          <EditProfile />
        </div>
      </div>
    </>
  );
};

export default editProfile;