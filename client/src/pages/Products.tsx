import { Product } from "@/components/eCommerce";
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
            <div className="grid grid-cols-2 py-4 md:grid-cols-3 lg:grid-cols-4">
               {
                  records.length > 0 ? (
                     // Products
                     records.map((record) => (
                        <Product key={record.id} {...record} />
                     ))
                  ) : (
                     // Empty State
                     <div className="col-span-full flex min-h-75 flex-col items-center justify-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                           <span className="text-2xl">🛍️</span>
                        </div>

                        <h2 className="text-lg font-semibold text-gray-800">
                           No products found
                        </h2>

                        <p className="mt-1 text-sm text-gray-400">
                           There are no products in "{prefix}" category.
                        </p>
                     </div>
                  )
               }
            </div>
         </Loading>
      </section>
   );

};

export default Products;