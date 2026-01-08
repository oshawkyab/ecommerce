import { CartContext } from "@/contexts/CartContext/CartContext";
import { SidebarContext } from "@/contexts/SidebarContext/SidebarContext";
import { useContext } from "react";
// import icons
import { IoMdArrowForward } from "react-icons/io";
import CartItem from "../CartItem/CartItem";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } px-4 w-full overflow-y-scroll transition-all h-full duration-500 bg-white md:max-w-[35vw] lg:max-w-[30vw] shadow-lg fixed top-0 bottom-0 z-20 lg:px-8.75`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="text-xl font-semibold">
          Shopping Bag ( {cart.length} )
        </div>
        {/* icon */}
        <div
          className="flex h-8 w-8 items-center hover:scale-110 transition-all justify-center cursor-pointer"
          onClick={() => handleClose()}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="mt-4 h-full">
        {/* CHECK CART IS EMPTY */}
        {cart.length < 1 && (
          <p className="text-2xl font-medium">Your Cart is empty</p>
        )}
        {cart.length >= 1 &&
          cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default Sidebar;
