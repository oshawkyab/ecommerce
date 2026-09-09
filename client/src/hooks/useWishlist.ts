import { useAppDispatch, useAppSelector } from "@/store/hook"
import actGetProductsLiked from "@/store/wishlist/act/actGetProductsLiked"
import { wishlistCleanUp } from "@/store/wishlist/wishlistSlice"
import { useEffect } from "react"

const useWishlist = () => {

   const dispatch = useAppDispatch()
   const { wishlistFullInfo, loading, error } = useAppSelector(state => state.wishlist)

   const cartItems = useAppSelector(state => state.cart.items)

   const records = wishlistFullInfo.map((el) => ({ ...el, quantity: el.id != null ? cartItems[el.id] : 0, isLiked: true }))

   useEffect(() => {
      const promise = dispatch(actGetProductsLiked())

      return () => {
         dispatch(wishlistCleanUp())
         promise.abort()
      }
   }, [dispatch])

  return {loading, error, records}
}

export default useWishlist