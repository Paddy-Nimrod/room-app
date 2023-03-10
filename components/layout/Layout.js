import React from "react";
import Head from "next/head";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title = "Best Holiday Hotels" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width = device-width"
        />
      </Head>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
