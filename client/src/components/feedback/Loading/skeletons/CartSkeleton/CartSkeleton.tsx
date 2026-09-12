import ContentLoader from "react-content-loader"

const CartSkeleton = () => {
   const renderSkeletonList = Array(4).fill(0).map((_, idx) => {
      return (
         <ContentLoader
            key={idx}
            speed={2}
            width="100%"
            height={175}
            viewBox="0 0 600 175"
            backgroundColor="#f0f0f0"
            foregroundColor="#ffffff"
            className="w-full"
         >
            {/* Product Image */}
            <rect
               x="0"
               y="16"
               rx="8"
               ry="8"
               width="120"
               height="140"
            />

            {/* Product Title */}
            <rect
               x="136"
               y="22"
               rx="4"
               ry="4"
               width="210"
               height="18"
            />

            <rect
               x="136"
               y="48"
               rx="4"
               ry="4"
               width="150"
               height="18"
            />

            {/* Price */}
            <rect
               x="136"
               y="80"
               rx="4"
               ry="4"
               width="90"
               height="18"
            />

            {/* Remove Button */}
            <rect
               x="136"
               y="115"
               rx="6"
               ry="6"
               width="75"
               height="30"
            />

            {/* Quantity Label */}
            <rect
               x="470"
               y="35"
               rx="3"
               ry="3"
               width="100"
               height="14"
            />

            {/* Select */}
            <rect
               x="470"
               y="57"
               rx="6"
               ry="6"
               width="110"
               height="40"
            />
         </ContentLoader>

      )
   })
   return (
      <div>{renderSkeletonList}</div>
   )
}

export default CartSkeleton