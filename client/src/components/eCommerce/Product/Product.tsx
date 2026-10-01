import { addToCart } from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import type { TProduct } from "@/utils/types";
import { memo, useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import Unlike from "@assets/svg/unlike.svg?react";
import Like from "@assets/svg/like.svg?react";
import actLikeToggle from "@/store/wishlist/act/actLikeToggle";
import { Modal, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ProductInfo from "../ProductInfo/ProductInfo";

const Product = memo(({
   id,
   title,
   img,
   price,
   max,
   quantity,
   isLiked
}: TProduct) => {

   const [showModal, setShowModal] = useState(false)
   const [isDisabled, setIsDisabled] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const router = useNavigate()

   const accessToken = useAppSelector(state => state.auth.accessToken)

   const dispatch = useAppDispatch();


   // Remaining stock after items already added to cart
   const productRemainingQuantity = max - (quantity ?? 0);

   // Stock states
   const isOutOfStock = productRemainingQuantity === 0;
   const isLowStock =
      productRemainingQuantity > 0 && productRemainingQuantity <= 3;

   // Handle add to cart action
   const addToCartHandler = () => {
      if (accessToken) {
         dispatch(addToCart(id));
         setIsDisabled(true);
      } else {
         router("/login", { replace: true })
         toast.error("You have to login first");
      }
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

      if (accessToken) {

         if (isLoading) return; // Prevent multiple clicks while loading

         setIsLoading(true);
         dispatch(actLikeToggle(id)).unwrap().finally(() => {
            setIsLoading(false);
         });

      } else {
         setShowModal(true)
      }

   };


   return (
      <>

         {/* Modal For Login */}
         <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Login Required</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               You need to login first to add this item to your wishlist.
            </Modal.Body>
         </Modal>

         <div key={id} className="group relative mx-2 flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* add to wishlist */}
            <div onClick={() => id !== undefined && likeToggleHandler(id)} className="absolute top-2 w-13 h-13 flex items-center justify-center right-2 z-10 cursor-pointer rounded-full bg-white p-1 shadow-lg  transition-all duration-300 hover:scale-110">
               {isLoading ? <Spinner animation="border" size="sm" variant="primary" /> : isLiked ? <Like className="w-6 h-6 text-red-500" /> : <Unlike className="w-6 h-6 text-gray-400" />}
            </div>

            <ProductInfo title={title} direction="row" price={Number(price)} img={img as string}>

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
            </ProductInfo >
         </div>

      </>
   );
});

export default Product;
