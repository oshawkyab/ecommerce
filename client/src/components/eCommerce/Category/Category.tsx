import type { TCategory } from "@/utils/types";
import { Link } from "react-router-dom";

const Category = ({ title, img, prefix }: TCategory) => {
   return (
      <div className="scale-75">
         <Link
            to={`/products/${prefix}`}
            className="group block"
         >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-lg">
               <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
               />

               {/* Overlay */}
               <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="translate-y-3 rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-md transition-transform duration-300 group-hover:translate-y-0">
                     Shop Now
                  </span>
               </div>
            </div>

            {/* Title */}
            <h4 className="mt-4 text-center text-base font-semibold text-gray-800 transition-colors duration-300 group-hover:text-black sm:text-lg">
               {title}
            </h4>
         </Link>
      </div>
   );
};

export default Category;