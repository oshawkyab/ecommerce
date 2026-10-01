import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from "react"
// layouts
const MainLayout = lazy(() => import('@/layouts/MainLayout/MainLayout'))
// pages
import Error from "@/pages/Error"
import LoadingAnimation from "@/components/feedback/LoadingAnimation/LoadingAnimation"
import ProtectedRoute from "@/components/Auth/ProtectedRoute/ProtectedRoute"
const AboutUs = lazy(() => import('@/pages/AboutUs'))
const Categories = lazy(() => import('@/pages/Categories'))
const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Login'))
const Register = lazy(() => import('@/pages/Register'))
const Products = lazy(() => import('@/pages/Products'))
const Wishlist = lazy(() => import('@/pages/Wishlist'))
const Cart = lazy(() => import('@/pages/Cart'))
const Profile = lazy(() => import('@/pages/Profile'))



// Handle Routes For App
const router = createBrowserRouter([
   {
      path: "/",
      element: <Suspense fallback={<LoadingAnimation />}>
         <MainLayout />
      </Suspense>,
      errorElement: <Error />,
      children: [
         {
            index: true, element:
               <Suspense fallback={<LoadingAnimation />}>
                  <Home />
               </Suspense>
         },
         {
            path: "/categories", element: <Suspense fallback={<LoadingAnimation />}>
               <Categories />
            </Suspense>
         },
         {
            path: "/about-us", element: <Suspense fallback={<LoadingAnimation />}>
               <AboutUs />
            </Suspense>
         },
         {
            path: "/cart", element: <ProtectedRoute>
               <Suspense fallback={<LoadingAnimation />}>
                  <Cart />
               </Suspense>
            </ProtectedRoute>
         },
         {
            path: "/wishlist", element: <ProtectedRoute>
               <Suspense fallback={<LoadingAnimation />}>
                  <Wishlist />
               </Suspense>
            </ProtectedRoute>
         },
         {
            path: "/profile", element: <ProtectedRoute>
               <Suspense fallback={<LoadingAnimation />}>
                  <Profile />
               </Suspense>
            </ProtectedRoute>
         },
         {
            path: "/products/:prefix", element: <Suspense fallback={<LoadingAnimation />}>
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
            path: "/register", element: <Suspense fallback={<LoadingAnimation />}>
               <Register />
            </Suspense>
         },
         {
            path: "/login", element: <Suspense fallback={<LoadingAnimation />}>
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