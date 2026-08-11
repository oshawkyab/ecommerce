import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HeaderBasket } from "@/components/eCommerce";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const navLinkClass = ({ isActive }: { isActive: boolean }) =>
      `rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300
      ${
         isActive
            ? "bg-gray-900 text-white shadow-md shadow-gray-900/15"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`;

   return (
      <header className="container mx-auto px-4 py-3">

         {/* Top Header */}
         <div className="mb-3 flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="group">
               <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  our
                  <span className="ml-1 text-cyan-500 transition-colors group-hover:text-cyan-600">
                     Ecom
                  </span>
               </h1>
            </NavLink>

            {/* Basket */}
            <HeaderBasket />
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
                        className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                           isOpen ? "translate-y-2 rotate-45" : ""
                        }`}
                     />

                     <span
                        className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                           isOpen ? "opacity-0" : ""
                        }`}
                     />

                     <span
                        className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                           isOpen ? "-translate-y-2 -rotate-45" : ""
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
               <div className="hidden items-center gap-2 lg:flex">
                  <NavLink
                     to="/login"
                     className={({ isActive }) =>
                        `rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                           isActive
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`
                     }
                  >
                     Login
                  </NavLink>

                  <NavLink
                     to="/register"
                     className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-md hover:shadow-cyan-500/25"
                  >
                     Register
                  </NavLink>
               </div>
            </div>

            {/* Mobile Navigation */}
            <div
               className={`overflow-hidden transition-all duration-300 lg:hidden ${
                  isOpen
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

                  <div className="my-2 h-px bg-gray-100" />

                  <NavLink
                     to="/login"
                     onClick={() => setIsOpen(false)}
                     className={({ isActive }) =>
                        `rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                           isActive
                              ? "bg-gray-900 text-white"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        }`
                     }
                  >
                     Login
                  </NavLink>

                  <NavLink
                     to="/register"
                     onClick={() => setIsOpen(false)}
                     className="rounded-xl bg-cyan-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-cyan-600"
                  >
                     Register
                  </NavLink>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Header;