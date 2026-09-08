import { GridList, Heading, Product } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import {
   actGetProductsByCatPrefix,
   cleanUp,
} from "@/store/products/productSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
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
         dispatch(actGetProductsByCatPrefix(prefix));
      }

      return () => {
         dispatch(cleanUp());
      };
   }, [dispatch, prefix]);

   return (
      <section className="container mx-auto px-4">
         <Loading status={loading} error={error}>
            <Heading title={`${prefix?.toUpperCase()} Products`} />
            <GridList
               records={productsFullInfo}
               renderItem={(record) => <Product key={record.id} {...record} />}
            />
         </Loading>
      </section>
   );

};

export default Products;