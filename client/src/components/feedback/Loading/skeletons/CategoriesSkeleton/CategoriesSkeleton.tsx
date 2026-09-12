import ContentLoader from "react-content-loader"

const CategoriesSkeleton = () => {
   const renderSkeletonList = Array(4).fill(0).map((_, idx) => {
      return (
         <ContentLoader
            key={idx}
            speed={2}
            width="100%"
            height={350}
            viewBox="0 0 300 350"
            backgroundColor="#f0f0f0"
            foregroundColor="#ffffff"
            className="w-full"
         >
            {/* Image */}
            <rect
               x="0"
               y="0"
               rx="16"
               ry="16"
               width="300"
               height="300"
            />

            {/* Title */}
            <rect
               x="55"
               y="320"
               rx="4"
               ry="4"
               width="190"
               height="18"
            />
         </ContentLoader>
      )
   })
   return (
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
         {renderSkeletonList}
      </div>

   )
}

export default CategoriesSkeleton