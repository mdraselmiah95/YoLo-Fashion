import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../routes/Routes";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="main">
            <Routes />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
