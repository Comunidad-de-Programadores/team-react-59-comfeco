import React, { useEffect, useState } from "react";
import Layout from "../components/general/Layout";
import HomeDashboard from "./componentsPages/HomeDashboard";
import HomeLogin from "./componentsPages/HomeLogin";
const demoHome = () => {
  const [tokenLocalExist, setTokenLocalExist] = useState(false);
  const [tokenSessExist, setTokenSessExist] = useState(false);

  useEffect(() => {
    setTokenLocalExist(!!localStorage.token);
    setTokenSessExist(!!sessionStorage.token);
  }, [tokenLocalExist, tokenSessExist]);

  return (
    <Layout>
      {!tokenSessExist && !tokenLocalExist ? (
        <>
          <div className="containerNotLogin">
            <div className="backgroundHome"></div>
            <main className="row col-xs-12">
              <HomeLogin />
              {/* <HomeDashboard /> */}
            </main>
          </div>
        </>
      ) : (
        {/* <HomeDashboard /> */}
      )}
    </Layout>
  );
};

export default demoHome;
