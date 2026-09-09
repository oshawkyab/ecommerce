import { GridList, Heading, Product } from "@/components/eCommerce";
import { Loading } from "@components/feedback";
import useProducts from "@/hooks/useProducts";


const Products = () => {
   const { loading, error, prefix, productsFullInfo } = useProducts()

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