import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;