import { createBrowserRouter, RouterProvider } from "react-router-dom"
// layouts
import MainLayout from '@/layouts/MainLayout/MainLayout'
// pages
import AboutUs from '@/pages/AboutUs'
import Categories from '@/pages/Categories'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Error from "@/pages/Error"
import Products from "@/pages/Products"

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
         { index: true, element: <Home /> },
         { path: "/categories", element: <Categories /> },
         { path: "/about-us", element: <AboutUs /> },
         {
            path: "/products/:prefix", element: <Products />, loader: ({ params }) => {
               //  Guard product prefix
               if (typeof params.prefix !== "string" || !/[a-zA-Z]/.test(params.prefix)) {

                  throw new Response("Bad request", {
                     statusText: "Category is not found",
                     status: 400
                  })

               }
               // Continue reload page ==> true
               return true
            }
         },
         { path: "/register", element: <Register /> },
         { path: "/login", element: <Login /> },
      ]
   }
])
const AppRouter = () => {
   return (
      <RouterProvider router={router} />
   )
}

export default AppRouter