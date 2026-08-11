import type { TProduct } from "@/utils/types";

const Product = ({ title, img, price }: TProduct) => {
   return (
      <div className="group mx-2 flex flex-col justify-between relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

         {/* Product Image */}
         <div className="aspect-square overflow-hidden bg-gray-100">
            <img
               src={img}
               alt={title}
               loading="lazy"
               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

         </div>


         {/* Product Info */}
         <div className="p-4">
            <h2 className="line-clamp-2 min-h-12 text-base font-semibold text-gray-800 transition-colors group-hover:text-black">
               {title}
            </h2>

            <div className="mt-3 flex items-center justify-between gap-3">
               <h3 className="text-lg font-bold text-gray-900">
                  {price} <span className="text-sm font-medium text-gray-500">EGP</span>
               </h3>

               {/* Mobile / fallback button */}

            </div>
            <button
               type="button"
               className="w-full rounded text-white text-xs  cursor-pointer translate-y-3 bg-black py-3 font-semibold  shadow-lg transition-all duration-300 hover:bg-gray-800 group-hover:translate-y-0 group-hover:opacity-100"
            >
               Add to cart
            </button>
         </div>
      </div>
   );
};

export default Product;