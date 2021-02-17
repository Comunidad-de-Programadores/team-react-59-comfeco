import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <div className="containerAll darkMode">
        <Head>
          <title>Comfeco</title>
          <meta
            name="description"
            content="Comfeco un festival de programadores para aprender mas de lo que sabemos"
          />
          <meta
            name="keywords"
            content="comfeco,festival,javascript,react,angular,vue,svelte"
          />
        </Head>
        <Header />
        <main className="row col-xs-12">{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
