import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderRightBar from "./HeaderRightBar/HeaderRightBar";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Nav, NavDropdown } from "react-bootstrap";
import { logout } from "@/store/auth/authSlice";
import { actGetWishlist } from "@/store/wishlist/wishlistSlice";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const { accessToken, user } = useAppSelector(state => state.auth)

   const dispatch = useAppDispatch()

   useEffect(() => {
      if (accessToken) {
         dispatch(actGetWishlist("ProductIds"))

      }
   }, [dispatch, accessToken])

   const navLinkClass = ({ isActive }: { isActive: boolean }) =>
      `rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300
      ${isActive
         ? "bg-gray-900 text-white shadow-md shadow-gray-900/15"
         : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`;

   return (
      <header className="container mx-auto px-4 py-3">

         {/* Top Header */}
         <div className="mb-3 flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="group">

               {/* Left-Side */}
               <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Our
                  <span className="ml-2 text-cyan-500 transition-colors group-hover:text-cyan-600">
                     eCom
                  </span>
               </h1>
            </NavLink>

            {/* Render Wishlist and Cart */}
            <HeaderRightBar />

         </div>

         {/* Navbar */}
         <nav className="rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex min-h-16 items-center justify-between px-4 sm:px-6">

               {/* Mobile Menu Button */}
               <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle navigation"
                  aria-expanded={isOpen}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100 lg:hidden"
               >
                  <div className="space-y-1.5">
                     <span
                        className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""
                           }`}
                     />

                     <span
                        className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""
                           }`}
                     />

                     <span
                        className={`block h-0.5 w-5 bg-current transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""
                           }`}
                     />
                  </div>
               </button>

               {/* Desktop Navigation */}
               <div className="hidden items-center gap-1 lg:flex">
                  <NavLink to="/" className={navLinkClass}>
                     Home
                  </NavLink>

                  <NavLink to="/categories" className={navLinkClass}>
                     Categories
                  </NavLink>

                  <NavLink to="/about-us" className={navLinkClass}>
                     About
                  </NavLink>
               </div>

               {/* Authentication */}
               {!accessToken ? (
                  <div className="flex items-center gap-4">
                     <Nav.Link as={NavLink} to="login">
                        Login
                     </Nav.Link>
                     <Nav.Link as={NavLink} to="register">
                        Register
                     </Nav.Link>
                  </div>
               ) : (
                  <NavDropdown
                     title={`Welcome: ${user?.firstName} ${user?.lastName}`}
                     id="basic-nav-dropdown"
                  >
                     <NavDropdown.Item as={NavLink} to="profile">
                        Profile
                     </NavDropdown.Item>
                     <NavDropdown.Item>Orders</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item
                        as={NavLink}
                        to="/login"
                        onClick={() => {
                           dispatch(logout())
                        }}
                        className="w-full bg-transparent text-danger"
                     >
                        Logout
                     </NavDropdown.Item>
                  </NavDropdown>
               )}


            </div>

            {/* Mobile Navigation */}
            <div
               className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen
                  ? "max-h-96 border-t border-gray-100"
                  : "max-h-0"
                  }`}
            >
               <div className="flex flex-col gap-1 p-3">

                  <NavLink
                     to="/"
                     onClick={() => setIsOpen(false)}
                     className={navLinkClass}
                  >
                     Home
                  </NavLink>

                  <NavLink
                     to="/categories"
                     onClick={() => setIsOpen(false)}
                     className={navLinkClass}
                  >
                     Categories
                  </NavLink>

                  <NavLink
                     to="/about-us"
                     onClick={() => setIsOpen(false)}
                     className={navLinkClass}
                  >
                     About
                  </NavLink>

               </div>
            </div>
         </nav>
      </header>
   );
};

export default Header;