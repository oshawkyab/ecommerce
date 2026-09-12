import { Category, GridList, Heading } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import useCategories from "@/hooks/useCategories";

const Categories = () => {
   const { records, loading, error } = useCategories()

   return (
      <section className="container mx-auto">
         <Loading type="categories" status={loading} error={error}>
            <Heading title="Categories" />
            <GridList
               records={records}
               renderItem={(record) => <Category key={record.id} {...record} />}
            />
         </Loading>
      </section>
   );
};

export default Categories;