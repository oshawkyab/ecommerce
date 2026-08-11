const Footer = () => {
   const year = new Date().getFullYear();

   return (
      <footer className="mt-16 border-t mt-auto border-gray-200 bg-white">
         <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col items-center justify-between gap-2 text-sm text-gray-500 sm:flex-row">
               <p>
                  © {year}{" "}
                  <span className="font-semibold text-gray-700">
                     Our Ecom
                  </span>
                  . All rights reserved.
               </p>

               <p className="text-gray-400">
                  Simple shopping. Better experience.
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;