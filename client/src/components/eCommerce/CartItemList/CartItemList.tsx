import type { TProduct } from "@/utils/types";
import CartItem from "../CartItem/CartItem";

type cartItemListProps = {
   products: TProduct[];
   changeQuantity: (payload: { id: number; quantity: number }) => void
   removeFromCart: (id: number) => void
}
const CartItemList = ({ products, changeQuantity, removeFromCart }: cartItemListProps) => {
   const renderList = products.filter((el) => !!el.quantity).map((el) => <CartItem changeQuantity={changeQuantity} removeFromCart={removeFromCart} key={el.id} {...el} />)
   return (
      <div>{renderList}</div>
   )
}

export default CartItemList