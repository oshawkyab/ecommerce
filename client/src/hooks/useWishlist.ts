import { useAppDispatch, useAppSelector } from "@/store/hook"
import { actGetWishlist } from "@/store/wishlist/wishlistSlice"
import { useEffect } from "react"

const useWishlist = () => {
   const { accessToken } = useAppSelector(state => state.auth)
   const dispatch = useAppDispatch()
   const { productsFullInfo, loading, error } = useAppSelector(state => state.wishlist)
   const cartItems = useAppSelector(state => state.cart.items)


   useEffect(() => {
      const promise = dispatch(actGetWishlist("productsFullInfo"))

      return () => {
         promise.abort()
      }
   }, [dispatch, accessToken])
   const records = productsFullInfo.map((el) => ({ ...el, quantity: el.id != null ? cartItems[el.id] : 0, isLiked: true, isAuthonticated: true }),)

   return { loading, error, records }
}

export default useWishlist