import { useAppDispatch, useAppSelector } from "@/store/hook";
import {
   actGetProductsByCatPrefix,
   cleanUp,
} from "@/store/products/productSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useProducts = () => {
   const { prefix } = useParams();

   const { records, loading, error } = useAppSelector(
      (state) => state.products
   );

   const cartItems = useAppSelector((state) => state.cart?.items ?? {});
   const wishlistItemsIds = useAppSelector((state) => state.wishlist.itemsId)


   const productsFullInfo = records.map((el) => ({
      ...el,
      quantity: el.id !== undefined ? (cartItems[el.id] ?? 0) : 0,
      isLiked: el.id !== undefined && wishlistItemsIds.includes(el.id),
   }));

   const dispatch = useAppDispatch();

   useEffect(() => {
      if (prefix) {
         const promise = dispatch(actGetProductsByCatPrefix(prefix));
         return () => {
            dispatch(cleanUp());
            promise.abort()
         };
      }

   }, [dispatch, prefix]);

   return { loading, error, prefix, productsFullInfo }
}

export default useProducts