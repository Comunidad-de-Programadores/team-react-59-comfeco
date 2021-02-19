import React, { useEffect, useState } from "react";
import Layout from "../components/general/Layout";
import HomeLogin from "./componentsPages/HomeLogin";
const Home = () => {
  const [tokenLocalExist, setTokenLocalExist] = useState(false);
  const [tokenSessExist, setTokenSessExist] = useState(false);

  useEffect(() => {
    setTokenLocalExist(!!localStorage.token);
    setTokenSessExist(!!sessionStorage.token);
  }, [tokenLocalExist, tokenSessExist]);

  return (
    <Layout>
      <main className="row col-xs-12">
        <div className="backgroundRegister "></div>
        <div className="containerSesion row between-md center-xs">
          {!tokenSessExist && !tokenLocalExist ? <HomeLogin /> : ""}
        </div>
      </main>
    </Layout>
  );
};

export default Home;
