import dynamic from "next/dynamic";
import React from "react";
import Navbar from "../Navbar/Nabar";
import Head from "./Head";

const Layout = ({ children }: any) => {
  const Head = dynamic(() => import('./Head'), {
    ssr: false,
  })
  return (
    <>
      <Head  />
      <Navbar />
      {/* </nav> */}
      <main>{children}</main>

    </>
  );
};

export default Layout;
