import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

// IMPOT LAYOUT HERE
import Layout from "@/layouts/Layout/Layout";

// IMPORT PAGES HERE
import Home from "@/pages/Products/Products";
import ProductDetails from "@/pages/ProductDetails/ProductDetails.jsx";
import ErrorPage from "@/pages/ErrorPage/ErrorPage.jsx";

// IMPORT STYLES
import "@/styles/global.css";

// IMPORT PROVIDERS
import ProductProvider from "@/contexts/ProductContext/ProductProvider.jsx";
import SidebarProvider from "@/contexts/SidebarContext/SidebarProvider";
import CartProvider from "@/contexts/CartContext/CartProvider";

// handle router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
    <CartProvider>
      <ProductProvider>
        <SidebarProvider>
          <RouterProvider router={router} />
        </SidebarProvider>
      </ProductProvider>
    </CartProvider>
  );
};

export default MainRoute;
