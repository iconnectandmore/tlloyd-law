import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen w-full bg-[#eef3f8]">
      <header className="sticky top-0 z-40 shadow-sm">
        <TopBar />
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
