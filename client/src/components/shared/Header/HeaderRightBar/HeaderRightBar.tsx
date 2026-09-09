import { HeaderCounter } from '@components/eCommerce'
import { useAppSelector } from '@/store/hook'
import { getQuantityCartSelector, getWishlistItemsNumber } from '@/store/selectors'
import CartLogo from "@assets/svg/cart.svg?react"
import WishlistLogo from "@assets/svg/wishlist.svg?react"

const HeaderRightBar = () => {
   const wishlistTotalQuantity = useAppSelector(getWishlistItemsNumber)
   const cartTotalQuantity = useAppSelector(getQuantityCartSelector)
   return (
      <div className="flex items-center gap-4">
         {/* wishlist */}
         <HeaderCounter href="/wishlist" svgIcon={<WishlistLogo />} totalQuantity={wishlistTotalQuantity} />
         <span className="w-0.5 bg-gray-800 h-8"></span>
         {/* Basket */}
         <HeaderCounter href="/cart" svgIcon={<CartLogo />} totalQuantity={cartTotalQuantity} />
      </div>
   )
}

export default HeaderRightBar