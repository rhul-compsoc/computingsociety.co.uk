import * as React from "react";
import "../../assets/scss/init.scss";
import Footer from "../Footer";
// Load Components
import Header from "../Header";

const Layout = (props) => {
  return (
    <div>
      <div>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
