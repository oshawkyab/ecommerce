import React, { useState } from "react";
import { SidebarContext } from "./SidebarContext";

const SidebarProvider = ({ children }) => {
  // HANDLE SIDEBAR CLOSE/OPEN
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
