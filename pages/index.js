import React, { useEffect, useState } from "react";
import Layout from "../components/general/Layout";
import HomeLogin from "./componentsPages/HomeLogin";
import EditProfile from "./editar-perfil";
const Home = () => {
  const [tokenLocalExist, setTokenLocalExist] = useState(false);
  const [tokenSessExist, setTokenSessExist] = useState(false);

  useEffect(() => {
    setTokenLocalExist(!!localStorage.token);
    setTokenSessExist(!!sessionStorage.token);
  }, [tokenLocalExist, tokenSessExist]);

  return (
    <Layout>
      {/* {!tokenSessExist && !tokenLocalExist ? <HomeLogin /> : <EditProfile />} */}
      <EditProfile />
    </Layout>
  );
};

export default Home;
