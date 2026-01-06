import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
// IMPOT LAYOUT HERE
import Layout from "@/layouts/Layout/Layout";
// IMPORT PAGES HERE
import Product from "@/pages/Product/Product.jsx";
import ProductDetails from "@/pages/ProductDetails/ProductDetails.jsx";
import ErrorPage from "@/pages/ErrorPage/ErrorPage.jsx";
// IMPORT STYLES
import "@/styles/global.css";

// import contexts
import ProductProvider from "@/contexts/ProductContext/ProductContext";

// handle router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Product />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

const MainRoute = () => {
  return (
  <ProductProvider>
    <RouterProvider router={router} />
  </ProductProvider>
  );
};

export default MainRoute;
