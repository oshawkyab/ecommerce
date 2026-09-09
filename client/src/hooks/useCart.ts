import { changeQuantity, cartItemRemove, productsFullInfoCleanUp } from "@/store/cart/cartSlice"
import { actGetProductsById } from "@/store/cart/thunk/actGetProductsById"
import { useAppDispatch, useAppSelector } from "@/store/hook"
import { useCallback, useEffect } from "react"

const useCart = () => {
   const dispatch = useAppDispatch()
   const { items, loading, error, productsFullInfo } = useAppSelector((state) => state.cart)

   useEffect(() => {
      const promise = dispatch(actGetProductsById())

      return () => {
         dispatch(productsFullInfoCleanUp())
         promise.abort()
      }
   }, [dispatch])

   const products = productsFullInfo.map((el) => {
      return {
         ...el,
         quantity: el.id != null ? items[el.id] : 0
      }
   })


   // handle change quantity
   const handleChangeQuantity = useCallback((payload: { id: number; quantity: number }) => {
      dispatch(changeQuantity({ id: payload.id, quantity: payload.quantity }))
   }, [dispatch]);

   // handle remove from cart
   const handleRemoveFromCart = useCallback((id: number) => {
      dispatch(cartItemRemove(id))
   }, [dispatch]);

   const totalPrice = products.reduce((acc, product) => {
      const productPrice = parseFloat(product.price) * (product.quantity || 0)
      return acc + productPrice
   }, 0)

   return { totalPrice, handleRemoveFromCart, handleChangeQuantity, products, error, loading }
}

export default useCart