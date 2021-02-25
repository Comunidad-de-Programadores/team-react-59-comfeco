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
          <link rel="shortcut icon" href="./favicon3.png" type="image/x-icon" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Lato:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
        {props.children}

        <Footer />
      </div>
    </>
  );
};

export default Layout;
