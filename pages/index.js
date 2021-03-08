import React, { useEffect, useState } from "react";
import Layout from "../components/general/Layout";
import HomeLogin from "./componentsPages/home/HomeLogin";
import Home from "./componentsPages/home/Home";
import EditProfile from "./editar-perfil";
const Index = () => {
  const [tokenLocalExist, setTokenLocalExist] = useState(false);
  const [tokenSessExist, setTokenSessExist] = useState(false);

  useEffect(() => {
    setTokenLocalExist(!!localStorage.token);
    setTokenSessExist(!!sessionStorage.token);
  }, [tokenLocalExist, tokenSessExist]);

  return (
    <Layout>
      {!tokenSessExist && !tokenLocalExist ? <HomeLogin /> : <Home />}
      {/* <EditProfile /> */}
    </Layout>
  );
};

export default Index;
