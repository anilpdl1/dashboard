import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Menu />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
