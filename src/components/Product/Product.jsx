// IMPORT ICONS
import { CartContext } from "@/contexts/CartContext/CartContext";
import { useContext } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  // Destructure product properties
  const { id, title, price, category, image } = product;

  // get addToCart from CartContext
  const { addToCart } = useContext(CartContext);

  return (
    <div className="">
      <div className="border border-[#e4e4e4] relative flex items-center justify-center h-60 overflow-hidden">
        <div className="w-full group h-full flex items-center justify-center">
          <div className="w-50 flex items-center justify-center ">
            <img
              className="max-h-45 group-hover:scale-110 transition-all duration-300"
              src={image}
              alt={title}
            />
          </div>
          <div className="absolute top-4 md:top-2 -right-15 rounded p-3 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 group-hover:right-3 md:group-hover:right-1 md:group-hover:top-2 transition-all duration-300">
            <button onClick={() => addToCart(product, id)} className="cursor-pointer bg-red-500 w-12 h-12 flex items-center justify-center text-white hover:bg-red-700 transition rounded font-bold">
              <div className="text-3xl font-bold text-white">
                <BsPlus />
              </div>
            </button>
            <Link
              to={`/products/${id}`}
              className="w-12 h-12 drop-shadow-2xl bg-white flex items-center justify-center text-black hover:bg-gray-200 transition rounded"
            >
              <div className="text-2xl font-bold text-black">
                <BsEyeFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Product Info */}
      <div>
        <div className="text-sm capitalize text-gray-500 mt-1">{category}</div>
        <Link to={`/products/${id}`}>
          <div className="font-semibold mb-1">{title}</div>
        </Link>
        <div className="font-semibold text-lg">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
