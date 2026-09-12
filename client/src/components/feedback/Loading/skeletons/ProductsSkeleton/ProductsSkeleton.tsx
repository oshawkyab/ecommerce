import ContentLoader from 'react-content-loader'

const ProductsSkeleton = () => {
   const renderSkeletonList = Array(4).fill(0).map((_, idx) => {
      return (
         <ContentLoader
            key={idx}
            speed={2}
            width="100%"
            height={500}
            viewBox="0 0 300 500"
            backgroundColor="#f0f0f0"
            foregroundColor="#ffffff"
            className="w-full"
         >
            {/* Product Image */}
            <rect
               x="0"
               y="0"
               rx="0"
               ry="0"
               width="300"
               height="300"
            />

            {/* Wishlist Button */}
            <circle
               cx="265"
               cy="35"
               r="26"
            />

            {/* Product Title - line 1 */}
            <rect
               x="16"
               y="320"
               rx="4"
               ry="4"
               width="250"
               height="18"
            />

            {/* Product Title - line 2 */}
            <rect
               x="16"
               y="345"
               rx="4"
               ry="4"
               width="180"
               height="18"
            />

            {/* Price */}
            <rect
               x="16"
               y="380"
               rx="4"
               ry="4"
               width="100"
               height="22"
            />

            {/* Stock Badge */}
            <rect
               x="16"
               y="420"
               rx="6"
               ry="6"
               width="115"
               height="28"
            />

            {/* Add To Cart Button */}
            <rect
               x="16"
               y="465"
               rx="6"
               ry="6"
               width="268"
               height="35"
            />
         </ContentLoader>

      )
   })
   return (
      <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>{renderSkeletonList}</div>
   )
}

export default ProductsSkeleton