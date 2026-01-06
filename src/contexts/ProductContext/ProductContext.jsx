import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext([]);

import React from "react";

const ProductProvider = ({ children }) => {
  // handle state to get products
  const [products, setProducts] = useState([]);

  // fetch products from an API or database and set the products state
  useEffect(() => {
    const fetchProducts = async () => {
      // FETCH PRODUCTS FROM FAKE API STORE
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
