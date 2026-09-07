import { addToCart } from "@/store/cart/cartSlice";
import { useAppDispatch } from "@/store/hook";
import type { TProduct } from "@/utils/types";
import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import Unlike from "@assets/svg/unlike.svg?react";
import Like from "@assets/svg/like.svg?react";
import actLikeToggle from "@/store/wishlist/act/actLikeToggle";
import { Spinner } from "react-bootstrap";

const Product = ({
   id,
   title,
   img,
   price,
   max,
   quantity,
   isLiked
}: TProduct) => {
   const [isDisabled, setIsDisabled] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const dispatch = useAppDispatch();

   // Remaining stock after items already added to cart
   const productRemainingQuantity = max - (quantity ?? 0);

   // Stock states
   const isOutOfStock = productRemainingQuantity === 0;
   const isLowStock =
      productRemainingQuantity > 0 && productRemainingQuantity <= 3;

   // Handle add to cart action
   const addToCartHandler = () => {
      dispatch(addToCart(id));
      setIsDisabled(true);
   };

   // Reset button loading state
   useEffect(() => {
      if (!isDisabled) return;

      const timer = setTimeout(() => {
         setIsDisabled(false);
      }, 300);

      return () => {
         clearTimeout(timer);
      };
   }, [isDisabled]);

   // handle toggle like
   const likeToggleHandler = (id: number) => {
      if (isLoading) return; // Prevent multiple clicks while loading
      
      setIsLoading(true);
      dispatch(actLikeToggle(id)).unwrap().finally(() => {
         setIsLoading(false);
      });
   };


   return (
      <div className="group relative mx-2 flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
         {/* Product Image */}
         <div className="aspect-square overflow-hidden bg-gray-100">
            <img
               src={img}
               alt={title}
               loading="lazy"
               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
         </div>

         {/* add to wishlist */}
         <div onClick={() => id !== undefined && likeToggleHandler(id)} className="absolute top-2 w-13 h-13 flex items-center justify-center right-2 z-10 cursor-pointer rounded-full bg-white p-1 shadow-lg  transition-all duration-300 hover:scale-110">
            {isLoading ? <Spinner animation="border" size="sm" variant="primary" /> : isLiked ? <Like className="w-6 h-6 text-red-500" /> : <Unlike className="w-6 h-6 text-gray-400" />}
         </div>

         {/* Product Info */}
         <div className="p-4">
            {/* Product Title */}
            <h2 className="line-clamp-2 min-h-12 font-semibold text-xl! text-gray-800 transition-colors group-hover:text-black">
               {title}
            </h2>

            {/* Price */}
            <div className="mt-3 flex items-center justify-between gap-3">
               <h3 className="text-lg font-bold text-gray-900">
                  {price}{" "}
                  <span className="text-sm font-medium text-gray-500">
                     EGP
                  </span>
               </h3>
            </div>

            {/* Stock Badge */}
            <div className="mt-3">
               {isOutOfStock ? (
                  <span className="badge badge-error font-semibold text-white">
                     Out of stock
                  </span>
               ) : isLowStock ? (
                  <span className="badge badge-warning font-semibold">
                     Only {productRemainingQuantity} left
                  </span>
               ) : (
                  <span className="badge badge-success font-semibold text-white">
                     In stock: {productRemainingQuantity}
                  </span>
               )}
            </div>

            {/* Out of Stock Warning */}
            {isOutOfStock && (
               <div className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-center text-sm font-medium text-red-600">
                  ⚠️ This product is currently out of stock
               </div>
            )}

            {/* Add To Cart Button */}
            <button
               type="button"
               className="mt-3 flex w-full cursor-pointer items-center justify-center rounded btn btn-info py-3 text-xs font-bold text-white shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100 disabled:cursor-not-allowed disabled:bg-gray-500/50"
               onClick={addToCartHandler}
               disabled={isDisabled || isOutOfStock}
            >
               {isDisabled ? (
                  <>
                     <FiLoader className="mx-auto inline h-5 w-5 animate-spin" />
                     <span className="ml-2">Adding...</span>
                  </>
               ) : isOutOfStock ? (
                  "Out of stock"
               ) : (
                  "Add to cart"
               )}
            </button>
         </div>
      </div>
   );
};

export default Product;
