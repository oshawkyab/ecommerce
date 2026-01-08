import { SidebarContext } from "@/contexts/SidebarContext/SidebarContext";
import { useContext } from "react";
// import icons
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div>
      <div>Header</div>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <BsBag className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
