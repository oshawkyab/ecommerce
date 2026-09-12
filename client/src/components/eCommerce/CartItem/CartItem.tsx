import { Form } from "react-bootstrap";
import styles from "./styles.module.css";
import type { TProduct } from "@/utils/types";
import { memo } from "react";

const {
  cartItem,
  product,
  productImg,
  productInfo,
  productTitle,
  productPrice,
  removeBtn,
  cartItemSelection,
  quantityLabel,
} = styles;

type CartItemProps = TProduct & { changeQuantity: (payload: { id: number; quantity: number }) => void; removeFromCart: (id: number) => void; };


const CartItem = memo(({ id, title, price, img, quantity, max, changeQuantity, removeFromCart }: CartItemProps) => {
  const renderOptions = Array(max).fill(0).map((_, idx) => {
    const optionValue = idx + 1;
    return (
      <option value={optionValue}>{optionValue}</option>
    )
  })

  // handle change quantity
  const changeQuantityHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = parseInt(event.target.value);
    if (id) {
      changeQuantity({ id, quantity });
    }
  }

  return (
    <div className={cartItem}>
      <div className={product}>
        <div className={productImg}>
          <img
            src={img}
            alt={title}
          />
        </div>

        <div className={productInfo}>
          <h2 className={productTitle}>{title}</h2>

          <h3 className={productPrice}>{price} EGP</h3>

          <button className={`${removeBtn} btn btn-danger`} type="button" onClick={() => id && removeFromCart(id)}>
            Remove
          </button>
        </div>
      </div>

      <div className={cartItemSelection}>
        <span className={quantityLabel}>Quantity</span>

        <Form.Select aria-label="Product quantity" value={quantity} onChange={changeQuantityHandler}>
          {renderOptions}
        </Form.Select>
      </div>
    </div>
  );
});

export default CartItem;