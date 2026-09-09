import { CartItemList, Heading } from "@/components/eCommerce"
import CartSubtotalPrice from "@/components/eCommerce/CartTotalPrice/CartTotalPrice"
import { Loading } from "@/components/feedback"
import useCart from "@/hooks/useCart"


const Cart = () => {

  const { totalPrice, handleRemoveFromCart, handleChangeQuantity, products, error, loading } = useCart()
  return (
    <>
      {/* Headding */}
      <Heading title="Cart" />
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