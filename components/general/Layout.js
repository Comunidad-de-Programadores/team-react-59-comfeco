import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <div className="containerAll darkMode">
        <Header />
        <main className="row col-xs-12">{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
