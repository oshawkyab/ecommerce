import { Category } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import { getCategories } from "@/store/categories/CategoriesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";


const Categories = () => {
   const { records, loading, error } = useAppSelector(
      (state) => state.categories
   );

   const dispatch = useAppDispatch();

   useEffect(() => {
      if (!records.length) {
         dispatch(getCategories());
      }
   }, [dispatch, records]);

   return (
      <section className="container mx-auto">
         <Loading status={loading} error={error}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
               {records.length > 0 ? (
                  // Categories
                  records.map((category) => (
                     <Category key={category.id} {...category} />
                  ))
               ) : (
                  // Empty State
                  <div className="col-span-full flex min-h-62.5 items-center justify-center">
                     <p className="text-sm font-medium text-gray-400">
                        There are no categories
                     </p>
                  </div>
               )}
            </div>
         </Loading>
      </section>
   );
};

export default Categories;