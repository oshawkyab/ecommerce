import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
// COMPONENTS
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";
// CONTEXTS
import { SidebarContext } from "@/contexts/SidebarContext/SidebarContext";

const Layout = () => {
  // HANDLE SIDEBAR OPEN/CLOSE IN CONTEXT
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div>
      <Header />
      {isOpen && <Sidebar onClose={handleClose} />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
