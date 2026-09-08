import { GridList, Heading, Product } from "@/components/eCommerce"
import { Loading } from "@/components/feedback"
import { useAppDispatch, useAppSelector } from "@/store/hook"
import actGetProductsLiked from "@/store/wishlist/act/actGetProductsLiked"
import { wishlistCleanUp } from "@/store/wishlist/wishlistSlice"
import { useEffect } from "react"

const Wishlist = () => {
   const dispatch = useAppDispatch()
   const { wishlistFullInfo, loading, error } = useAppSelector(state => state.wishlist)
   const cartItems = useAppSelector(state => state.cart.items)

   const records = wishlistFullInfo.map((el) => ({ ...el, quantity: el.id != null ? cartItems[el.id] : 0, isLiked: true }))

   useEffect(() => {
      dispatch(actGetProductsLiked())

      return () => {
         dispatch(wishlistCleanUp())
      }
   }, [dispatch])
   return (
      <>
         <Heading title="Your Wishlist" />
         <Loading status={loading} error={error}>
            <GridList records={records} renderItem={(record) => <Product {...record} />} />
         </Loading>
      </>
   )
}

export default Wishlist