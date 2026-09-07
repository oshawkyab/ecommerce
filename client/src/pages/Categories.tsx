import { Category, GridList, Heading } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import { cleanUpCategories, getCategories } from "@/store/categories/CategoriesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";


const Categories = () => {
   const { records, loading, error } = useAppSelector(
      (state) => state.categories
   );

   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getCategories());

      return () => {
         dispatch(cleanUpCategories())
      }
   }, [dispatch]);

   return (
      <section className="container mx-auto">
         <Loading status={loading} error={error}>
            <Heading>Categories</Heading>
            <GridList
               records={records}
               renderItem={(record) => <Category key={record.id} {...record} />}
            />
         </Loading>
      </section>
   );
};

export default Categories;