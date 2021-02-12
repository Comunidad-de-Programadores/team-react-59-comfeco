import React from "react";
import Layout from "../components/general/Layout";
import Register from "../components/forms/Register";

const register = () => {
  return (
    <Layout>
      <div className="backgroundRegister"></div>
      <main>
        <Register />
      </main>
    </Layout>
  );
};

export default register;
