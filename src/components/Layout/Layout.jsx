import React from "react";
import "@assets/scss/init.scss";
import { layout } from "./Layout.module.scss";

// Load Components
import Footer from "../Footer";
import Header from "../Header";
import SiteDefaultSEO from "../SiteDefaultSEO";

const Layout = (props) => {
  return (
    <div>
      <SiteDefaultSEO />
      <div className={layout}>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
