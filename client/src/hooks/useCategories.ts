import { cleanUpCategories, getCategories } from "@/store/categories/CategoriesSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useEffect } from "react";

const useCategories = () => {
   const { records, loading, error } = useAppSelector(
      (state) => state.categories
   );

   const dispatch = useAppDispatch();

   useEffect(() => {
      const promise = dispatch(getCategories());

      return () => {
         dispatch(cleanUpCategories())
         promise.abort()
      }
   }, [dispatch]);
   
   return { records, loading, error }
}

export default useCategories