import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from "react"
// layouts
const MainLayout = lazy(() => import('@/layouts/MainLayout/MainLayout'))
// pages
import Error from "@/pages/Error"
const AboutUs = lazy(() => import('@/pages/AboutUs'))
const Categories = lazy(() => import('@/pages/Categories'))
const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Login'))
const Register = lazy(() => import('@/pages/Register'))

const Wishlist = lazy(() => import('@/pages/Wishlist'))
const Cart = lazy(() => import('@/pages/Cart'))
const Products = lazy(() => import('@/pages/Products'))



// Handle Routes For App
const router = createBrowserRouter([
   {
      path: "/",
      element: <Suspense fallback={"Loading please wait..."}>
         <MainLayout />
      </Suspense>,
      errorElement: <Error />,
      children: [
         {
            index: true, element:
               <Suspense fallback={"Loading please wait..."}>
                  <Home />
               </Suspense>
         },
         {
            path: "/categories", element: <Suspense fallback={"Loading please wait..."}>
               <Categories />
            </Suspense>
         },
         {
            path: "/about-us", element: <Suspense fallback={"Loading please wait..."}>
               <AboutUs />
            </Suspense>
         },
         {
            path: "/cart", element: <Suspense fallback={"Loading please wait..."}>
               <Cart />
            </Suspense>
         },
         { path: "/wishlist", element: <Wishlist /> },
         {
            path: "/products/:prefix", element: <Suspense fallback={"Loading please wait..."}>
               <Products />
            </Suspense>, loader: ({ params }) => {
               //  Guard product prefix
               if (typeof params.prefix !== "string" || !/[a-zA-Z]/.test(params.prefix)) {
                  // Throw Error
                  throw new Response("Bad request", {
                     statusText: "Category is not found",
                     status: 400
                  })
               }
               // Continue reload page ==> true
               return true
            }
         },
         {
            path: "/register", element: <Suspense fallback={"Loading please wait..."}>
               <Register />
            </Suspense>
         },
         {
            path: "/login", element: <Suspense fallback={"Loading please wait..."}>
               <Login />
            </Suspense>
         },
      ]
   }
])
const AppRouter = () => {
   return (
      <RouterProvider router={router} />
   )
}

export default AppRouter