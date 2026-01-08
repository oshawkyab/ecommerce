import { useContext } from "react";
// CONTEXTS
import { ProductContext } from "@/contexts/ProductContext/ProductContext";
// COMPONENTS
import Product from "@/components/Product/Product";

const Home = () => {
  // GET PRODUCTS FROM CONTEXT HERE (ONLY MEN'S AND WOMEN'S CLOTHING)
  const { products } = useContext(ProductContext);
  const clothingProducts = products.filter(
    (product) =>
      product.category === "men's clothing" ||
      product.category === "women's clothing"
  );

  return (
    <div>
      <section className="p-16">
        <div className="container mx-auto max-w-sm md:max-w-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {clothingProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
