import React, { Fragment, useEffect, useState } from "react";
import Layout from "../components/general/Layout";
import HomeDashboard from "./componentsPages/HomeDashboard";
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
      <HomeDashboard />
    </Layout>
  );
};

export default Home;
