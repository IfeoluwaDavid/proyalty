import React from "react";
import "./global.css";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <header>Proyalty</header>
      <div className="layout">{children}</div>
    </>
  );
};

export default Layout;
