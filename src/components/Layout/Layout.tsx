import React from "react";
import Navbar from "../Navbar/Nabar";
import Head from "./Head";

const Layout = ({ children }: any) => {
  return (
    <>
      {/* <Head  /> */}
      <Navbar />
      {/* </nav> */}
      <main>{children}</main>

    </>
  );
};

export default Layout;
