import React from "react";

// import icons
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const CartItem = ({ item }) => {
  const { amount, title, price, id, image } = item;
  return (
    <div className="border-b min-h-20 border-gray-500 py-3 w-full flex item-center justify-between">
      {/* image */}
      <Link to={`products/${id}`} className="group">
        <img
          className="max-h-16 group-hover:scale-110 transition duration-300"
          src={image}
          alt=""
        />
      </Link>
      {/* plus and mins and amount & price of a piece */}
      <div className="flex max-w-60 flex-col gap-y-1">
        <Link
          to={`products/${id}`}
          className="w-full text-gray-800 text-sm font-semibold hover:underline transition-all "
        >
          {title}
        </Link>
        <div className="flex w-full justify-between">
          {/* price of item for a piece */}
          <div className="text-gray-500 font-semibold">$ {price}</div>
          {/* total price */}
          <div className="font-bold">
            $ {parseFloat(price * amount).toFixed(2)}
          </div>
        </div>

        {/* plus and mins and qmount */}
        <div className="flex border-3 border-gray-300 shadow-lg rounded drop-shadow-2xl  justify-around items-center">
          <div className="cursor-pointer text-sm">
            <FaPlus />
          </div>
          <div>{amount}</div>
          <div className="cursor-pointer text-sm">
            <FaMinus />
          </div>
        </div>
      </div>
      {/* remove item & final price */}
      <div className="h-full flex flex-col">
        <div className="text-2xl cursor-pointer hover:text-red-600 hover:scale-110 transition-all duration-300">
          <IoClose />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
