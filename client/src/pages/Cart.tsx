import { CartItemList, Heading } from "@/components/eCommerce"
import CartSubtotalPrice from "@/components/eCommerce/CartTotalPrice/CartTotalPrice"
import { Loading } from "@/components/feedback"
import { changeQuantity, cartItemRemove, productsFullInfoCleanUp } from "@/store/cart/cartSlice"
import { actGetProductsById } from "@/store/cart/thunk/actGetProductsById"
import { useAppDispatch, useAppSelector } from "@/store/hook"
import { useCallback, useEffect } from "react"

const Cart = () => {
  const dispatch = useAppDispatch()
  const { items, loading, error, productsFullInfo } = useAppSelector((state) => state.cart)

  useEffect(() => {
    dispatch(actGetProductsById())

    return () => {
      dispatch(productsFullInfoCleanUp())
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

  return (
    <>
      {/* Headding */}
      <Heading>Cart</Heading>
      <Loading status={loading} error={error}>
        {products.filter((el) => !!el.quantity).length === 0 && <p className="text-center py-4 mb-5">Your cart is empty</p>}
        <CartItemList changeQuantity={handleChangeQuantity} removeFromCart={handleRemoveFromCart} products={products} />
        {/* total price */}
        <CartSubtotalPrice total={totalPrice} />
      </Loading>
    </>
  )
}

export default Cart